import { createElement } from "../core/createElement";

export function Button({text, onclick, className}: {text: string, onclick: () => void, className?: string}) {
    return createElement('button', {
        className,
        onclick
    }, text);
}