export function render(component: () => HTMLElement, container: HTMLElement) {
    container.innerHTML = '';
    container.appendChild(component());
}
