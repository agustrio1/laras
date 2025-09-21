import { createElement} from "../core/createElement";

export function Select({options, value, onChange, className}: {options: string[], value: string, onChange: (value: string) => void, className?: string}) {
    return createElement('select', {
        value,
        onChange: (e: any) => onChange(e.target.value)
        , className
    }, options.map((option) => createElement('option', {value: option}, option)))
}