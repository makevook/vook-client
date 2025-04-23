VERSION := $(shell git describe --tags --always --dirty)

.PHONY:deploy-stag
deploy-stag:
	dagger call -v deploy \
	--source-dir=.. \
	--dockerfile=../stag.Dockerfile \
	--ssh-dest=file:./secrets/stag/dest.txt \
	--ssh-key=file:./secrets/stag/ssh.key \
	--target-path=~/repo/makevook/vook-deployment/stag \
	--version=${VERSION} \
	--command="make deploy-client"

.PHONY:build-stag
build-stag:
	dagger call -v build-client-image \
	--dir=.. \
	--dockerfile=../stag.Dockerfile \
	-o out/stag-client.tar

.PHONY:load-stag
load-stag:
	docker load --input out/stag-client.tar | sed 's/.*sha256://' | xargs -I% docker tag % makevook/vook-client:stag

.PHONY:run-stag
run-stag:
	docker run --rm -p 3000:3000 makevook/vook-client:stag

.PHONY:deploy-prod
deploy-prod:
	dagger call -v deploy \
	--source-dir=.. \
	--dockerfile=../prod.Dockerfile \
	--ssh-dest=file:./secrets/prod/dest.txt \
	--ssh-key=file:./secrets/prod/ssh.key \
	--target-path=~/repo/makevook/vook-deployment/prod \
	--version=${VERSION} \
	--command="make deploy-client"

.PHONY:build-prod
build-prod:
	dagger call -v build-client-image \
	--dir=.. \
	--dockerfile=../prod.Dockerfile \
	export --path out/prod-client.tar

.PHONY:load-prod
load-prod:
	docker load --input out/prod-client.tar | sed 's/.*sha256://' | xargs -I% docker tag % makevook/vook-client:prod

.PHONY:run-prod
run-prod:
	docker run --rm -p 3000:3000 makevook/vook-client:prod

.PHONY:workflow
workflow:
	(cd .. && act workflow_dispatch -s STAG_SSH_DEST="$(< secrets/stag/dest.txt)",STAG_SSH_KEY="$(< secrets/stag/ssh.key)",PROD_SSH_DEST="$(< secrets/prod/dest.txt)",PROD_SSH_KEY="$(< secrets/prod/ssh.key)")
