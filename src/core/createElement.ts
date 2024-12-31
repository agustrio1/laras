type Props = {
    [key: string]: any;
};

// Utility function to create an element or invoke a functional component
export function createElement(tag: string | Function, props: Props = {}, ...children: any[]) {
    if (typeof tag === 'function') {
        // Invoke functional component
        return tag({ ...props, children });
    }

    const element = document.createElement(tag);

    // Apply props
    Object.entries(props || {}).forEach(([key, value]) => {
        if (key.startsWith('on') && typeof value === 'function') {
            // Add event listeners for props starting with 'on'
            element.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (key === 'className') {
            element.className = value;
        } else {
            element.setAttribute(key, value);
        }
    });

    // Add children
    children.flat().forEach((child) => {
        if (typeof child === 'string' || typeof child === 'number') {
            element.appendChild(document.createTextNode(child.toString()));
        } else if (child instanceof HTMLElement) {
            element.appendChild(child);
        }
    });

    return element;
}
