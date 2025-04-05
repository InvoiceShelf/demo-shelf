# Demo Shelf

Create a demo site for your Docker based web application.

Live Demo (invoiceShelf):
https://demo.invoiceshelf.com/start-demo

![image](https://github.com/louislam/demo-kuma/assets/1336778/f15b5e46-5c98-419e-98e4-a2d52b91780c)

## Features

-   Quickly create a demo for your project.
-   Spin up a docker stack when requested, shut down the stack when time is up.
-   A countdown timer at the bottom right corner.
-   Custom demo duration.
-   Portless demo instances design, you just need one port for Demo Shelf.

## How to use

1. Create a stack directory `demo-shelf`.
1. Download `compose.yaml` and `compose-demo.yaml` into the directory.
    - `compose.yaml` = Demo Shelf stack
        - You should go through all variables in the `environment:` section.
    - `compose-demo.yaml` = The stack that you want to provide a demo
        - By default, the main service should be `main` and the network name should be `demo-shelf_default`.
        - If your stack name is not `demo-shelf`, you should change the network name to `{your-name}_default`
1. `docker compose up -d`.
1. Go to http://localhost:3003/start-demo to test the demo.

## How it works?

1. Demo Shelf takes control of your Docker
1. User requests a demo via a browser
1. Demo Shelf assign a session ID for this request and spin up the stack `compose-demo.yaml`
1. Once the demo stack is started, Demo Shelf will act as a reverse proxy to communicate between the browser and the demo stack.
1. The timer will be created at the same time. When time is up, Demo Shelf will shut down the stack.

# More screenshots

![image](https://github.com/louislam/demo-kuma/assets/1336778/c264c86a-0718-42af-a91b-20db061af7db)

## Shoutout

A big shout out to [@louislam](https://github.com/louislam/) the original creator of [demo-kuma](https://github.com/louislam/demo-kuma) for creating this amazing tool, go give him a ⭐ he deserves it!
