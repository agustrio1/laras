import { createElement } from "./core/createElement";
import { render } from "./core/render";
import { Router } from "./core/router";
import { larasState } from "./core/state";

const [toast, setToast] = larasState("");
const [count, setCount] = larasState(0);
const [name, setName] = larasState("");

const router = new Router(document.getElementById("root")!);

router.addRoute("/", () =>
  createElement("div", { className: "home" }, "Welcome to the Home Page")
);
router.addRoute("/about", () =>
  createElement(
    "div",
    { className: "about" },
    "Learn more about us on the About Page"
  )
);

router.loadRoute();

render(
  () => createElement("div", { className: "app" }, "Hello World"),
  document.getElementById("root")!
);

setInterval(() => setCount(count() + 1), 1000);

document.addEventListener("stateChanged", () => {
  console.log("State has been updated");
});

window.addEventListener("hashchange", () => router.loadRoute());

document.addEventListener("toast", (e: any) => setToast(e.detail));

document.addEventListener("nameChanged", (e: any) => setName(e.detail));
