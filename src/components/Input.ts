import { createElement } from "../core/createElement";

export function Input({value, onChange, className}: {value: string, onChange: (value: string) => void, className?: string}) {
    return createElement('input', {
        value,
        onChange: (e: any) => onChange(e.target.value)
        , className
    }, )
}