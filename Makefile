IMAGE = asix-final-project-node-frontend
DOCKER = docker-compose
MACHINE = node-server


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
