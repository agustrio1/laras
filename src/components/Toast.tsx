import { createElement } from "../core/createElement";

export function Toast({text, className}: {text: string, className?: string}) {
    return createElement('div', {className}, text);
}