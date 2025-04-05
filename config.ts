export const serverPort: number = parseInt(process.env.SERVER_PORT ?? "") ?? 80;
export const stackPrefix: string = process.env.STACK_PREFIX ?? "demo";
export const serviceName: string =
  process.env.STACK_MAIN_SERVICE_NAME ?? "main";
export const servicePort: number =
  parseInt(process.env.STACK_MAIN_SERVICE_PORT ?? "") ?? 80;
export const entryPath: string =
  process.env.STACK_MAIN_SERVICE_ENTRY_PATH ?? "/";
export const dockerNetwork: string =
  process.env.DOCKER_NETWORK_NAME ?? "demo-shelf";
export const websiteName: string = process.env.WEBSITE_NAME ?? "Demo";
export const sessionTime: number =
  parseInt(process.env.SESSION_TIME ?? "") ?? 600;
export const startTimeout: number =
  parseInt(process.env.START_TIMEOUT ?? "") ?? 60;
export const installURL: string = process.env.INSTALL_URL ?? "";
export const showEntry: boolean = process.env.SHOW_ENTRY === "true";
