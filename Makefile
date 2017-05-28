IMAGE = asix-final-project-node-frontend
DOCKER = docker-compose
MACHINE = alsfront
# FRONTMACHINE = eu.gcr.io/noted-feat-168716/asixfinalprojectfrontend_node-server_1
FRONTMACHINE = 727924676995.dkr.ecr.eu-west-2.amazonaws.com


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

awslogin:
	@echo "Loggin in aws...";
	@`aws ecr get-login --region eu-west-2`;
	@echo "Done!";

deploy-production:
	@echo "Deploying frontend... (production)";
	@docker build -t $(MACHINE):latest .
	@docker tag $(MACHINE):latest $(FRONTMACHINE)/$(MACHINE):latest;
	@docker push $(FRONTMACHINE)/$(MACHINE):latest;
	@echo "Done!";
