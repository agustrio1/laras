export class Router {
  private routes: { path: string; component: () => HTMLElement }[] = [];
  private rootElement: HTMLElement | null = null;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    window.addEventListener("hashchange", () => this.loadRoute());
    this.loadRoute();
  }

  addRoute(path: string, component: () => HTMLElement) {
    this.routes.push({ path, component });
  }

  loadRoute() {
    const currentPath = window.location.hash.substring(1) || "/";
    const route = this.routes.find((route) => route.path === currentPath);
    if (route) {
      this.rootElement!.innerHTML = "";
      this.rootElement!.appendChild(route.component());
    } else {
      this.rootElement!.innerHTML = "<h1>404 - Not Found</h1>";
    }
  }
}
