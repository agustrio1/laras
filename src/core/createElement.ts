type Props = {
    [key: string]: any;
};

export function createElement(tag: string | Function, props: Props, ...children: any[]) {
    if (typeof tag === 'function') {
        return tag(props, ...children);
}

    const element = document.createElement(tag);

    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            if (key.startsWith('on') && typeof value === 'function') {
                element.addEventListener(key.slice(2).toLowerCase(), value);
            } else {
                element.setAttribute(key, value);
            }
        });
    }

    children.flat().forEach((child) => {
        if (typeof child === 'string' || typeof child === 'number') {
           element.appendChild(document.createTextNode(child.toString()));
        } else if (child instanceof HTMLElement) {
            element.appendChild(child);
        }
    });

    return element;
}