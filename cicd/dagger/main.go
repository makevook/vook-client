package main

import (
	"context"
	"fmt"
	"strings"
)

type VookClient struct{}

func (v *VookClient) BuildClientImage(
	dir *Directory,
	dockerfile *File,
) *File {
	dirWithDockerfile := dir.WithFile("Dockerfile", dockerfile)

	return dag.Docker().
		Build(dirWithDockerfile, DockerBuildOpts{
			Platform: []Platform{"linux/arm64"},
		}).
		Save(DockerBuildSaveOpts{
			Name: "web-client",
		}).
		File("web-client_linux_arm64.tar")
}

func (v *VookClient) SendImage(
	ctx context.Context,
	sshDest *Secret,
	sshKey *Secret,
	path string,
	imageTar *File,
) error {
	sshDestText, err := sshDest.Plaintext(ctx)
	if err != nil {
		return err
	}

	_, err = dag.Scp().
		Config(strings.TrimSpace(sshDestText)).
		WithIdentityFile(sshKey).
		FileToRemote(imageTar, ScpCommanderFileToRemoteOpts{
			Target: path,
		}).
		Sync(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (v *VookClient) Apply(
	ctx context.Context,
	destination *Secret,
	sshKey *Secret,
	imageTar *File,
	path string,
	version string,
	command string,
) error {
	destinationText, err := destination.Plaintext(ctx)
	if err != nil {
		return err
	}

	filename, err := imageTar.Name(ctx)
	if err != nil {
		return err
	}

	_, err = dag.SSH().
		Config(strings.TrimSpace(destinationText)).
		WithIdentityFile(sshKey).
		Command(
			fmt.Sprintf(`
cd %s
CLIENT_FILENAME=%s CLIENT_VERSION=%s %s
`, path, filename, version, command),
		).
		Sync(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (v *VookClient) Deploy(
	ctx context.Context,
	sourceDir *Directory,
	dockerfile *File,
	sshDest *Secret,
	sshKey *Secret,
	targetPath string,
	version string,
	command string,
) error {
	imageTar := v.BuildClientImage(sourceDir, dockerfile)

	err := v.SendImage(ctx, sshDest, sshKey, targetPath, imageTar)
	if err != nil {
		return err
	}

	err = v.Apply(ctx, sshDest, sshKey, imageTar, targetPath, version, command)
	if err != nil {
		return err
	}

	return nil
}
