package main

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
