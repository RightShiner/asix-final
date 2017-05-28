IMAGE = asix-final-project-node-frontend
DOCKER = docker-compose
MACHINE = node-server
FRONTMACHINE = eu.gcr.io/noted-feat-168716/asixfinalprojectfrontend_node-server_1


help:
	@echo ""
	@echo "usage:"
	@echo ""
	@echo "* make run:              runs the frontend in development mode (deattached)"
	@echo "* make stop:             stops the docker machine"
	@echo "* make build:            builds the docker image"
	@echo ""

build:
	@echo "Building machine...please, wait...";
	@docker build -t $(IMAGE) .
	@echo "Done! ✅";

run:
	@echo "Servering frontend...";
	@$(DOCKER) up -d;
	@echo "Done! ✅";

stop:
	@echo "Stopping frontend! 🍺";
	@$(DOCKER) down;
	@echo "Done! ✅";

deploy-production:
	@echo "Deploying frontend... (production)";
	@docker build -t $(FRONTMACHINE):v3 --build-arg ENV=production .
	@gcloud docker -- push $(FRONTMACHINE):v3;
	@echo "Done!";
