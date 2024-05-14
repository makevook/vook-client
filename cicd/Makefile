VERSION := $(shell git describe --tags --always --dirty)

.PHONY:deploy-stag
deploy-stag:
	dagger call -v deploy \
	--source-dir=..:default \
	--dockerfile=../stag.Dockerfile \
	--ssh-dest=file:./secrets/stag/dest.txt \
	--ssh-key=file:./secrets/stag/ssh.key \
	--target-path=~/repo/makevook/vook-deployment/stag \
	--version=${VERSION} \
	--command="make deploy-client"

.PHONY:build-stag
build-stag:
	dagger call -v build-client-image \
	--dir=..:default \
	--dockerfile=../stag.Dockerfile \
	-o out/stag-client.tar

.PHONY:load-stag
load-stag:
	docker load --input out/stag-client.tar | sed 's/.*sha256://' | xargs -I% docker tag % makevook/vook-client:stag

.PHONY:run-stag
run-stag:
	docker run --rm -p 3000:3000 makevook/vook-client:stag
