export function render(component: () => HTMLElement, container: HTMLElement) {
    const renderComponent = () => {
        container.innerHTML = '';
        container.appendChild(component());
    }

    renderComponent();

    document.addEventListener('stateChanged', renderComponent);
}