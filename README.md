# Demo Shelf

![Repo Banner](/static/banner.png)

Create a demo site for your Docker-based web application.

[Live Demo](https://demo.invoiceshelf.com/start-demo)

## Table of Contents

<!-- TOC -->

- [Demo Shelf](#demo-shelf)
  - [Table of Contents](#table-of-contents)
  - [Special Shoutout](#special-shoutout)
  - [Features](#features)
  - [How to Use](#how-to-use)
  - [How It Works](#how-it-works)
  - [More Screenshots](#more-screenshots)

<!-- /TOC -->

## Special Shoutout

A big shout out to [@louislam](https://github.com/louislam/), the original creator of [demo-kuma](https://github.com/louislam/demo-kuma), for developing this amazing tool. Go give him a ⭐; he deserves it!

## Features

- Quickly create a demo for your project.
- Automated deployment of the Docker application stack upon HTTP request.
- Automatic shutdown of the stack when the time is up.
- Countdown timer displayed in the bottom right corner.
- Customisable demo duration.
- Single port operation.

## How to Use

1. Create a stack directory named `demo-shelf` (IMPORTANT: Docker uses this for the network name, and this application relies on it).
2. Download `compose.yaml` and `compose-demo.yaml` into the directory.
   - `compose.yaml`: This file defines the Demo Shelf stack.
     - Review all variables in the `environment:` section.
   - `compose-demo.yaml`: This file defines your demo stack.
     - By default, the main service should be named `main`, and the network name should be `demo-shelf_default`.
     - If your repository or root folder name is not `demo-shelf`, change the network name to `{your-repo/root-folder-name}_default`.
3. Run the command `docker compose up -d`.
4. (Optional) If you are in development mode, navigate to http://localhost:3003/start-demo to test the demo.

## How It Works

1. Demo Shelf takes control of your Docker environment, so ensure you run this in an isolated virtual machine or on a dedicated server.
2. The user sends an HTTP request via a browser to initialise the demo.
3. Demo Shelf assigns a session ID for this request and spins up the stack defined in `compose-demo.yaml`.
4. Once the demo stack is started, Demo Shelf acts as a reverse proxy to facilitate communication between the browser and the individual demo stack. This is why we set the `demo-shelf_default` network to `external` in the demo stack.
5. A timer is initiated simultaneously. When the time is up, Demo Shelf will shut down the stack.

## More Screenshots

![Instructions popup](/static/instructions.png)

![Live demo](/static/live%20demo.png)

![End Screen](/static/end.png)
