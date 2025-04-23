package main

import (
	"context"
	"dagger/vook-client/internal/dagger"
	"fmt"
	"strings"
)

type VookClient struct{}

func (v *VookClient) BuildClientImage(
	// +ignore=[".git", "**/node_modules"]
	dir *dagger.Directory,
	dockerfile *dagger.File,
) *dagger.File {
	dirWithDockerfile := dir.WithFile("Dockerfile", dockerfile)

	return dag.Docker().
		Build(dirWithDockerfile, dagger.DockerBuildOpts{
			Platform: []dagger.Platform{"linux/arm64"},
		}).
		Save(dagger.DockerBuildSaveOpts{
			Name: "web-client",
		}).
		File("web-client@linux-arm64.tar")
}

func (v *VookClient) SendImage(
	ctx context.Context,
	sshDest *dagger.Secret,
	sshKey *dagger.Secret,
	path string,
	imageTar *dagger.File,
) error {
	sshDestText, err := sshDest.Plaintext(ctx)
	if err != nil {
		return err
	}

	_, err = dag.Scp().
		Config(strings.TrimSpace(sshDestText)).
		WithIdentityFile(sshKey).
		FileToRemote(imageTar, dagger.ScpCommanderFileToRemoteOpts{
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
	destination *dagger.Secret,
	sshKey *dagger.Secret,
	imageTar *dagger.File,
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
	sourceDir *dagger.Directory,
	dockerfile *dagger.File,
	sshDest *dagger.Secret,
	sshKey *dagger.Secret,
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
