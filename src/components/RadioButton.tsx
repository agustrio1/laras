import { createElement } from "../core/createElement";

export function RadioButton({value, checked, onChange, className}: {value: string, checked: boolean, onChange: (value: string) => void, className?: string}) {
    return createElement('input', {
        type: 'radio',
        value,
        checked,
        onChange: (e: any) => onChange(e.target.value)
        , className
    }, )
}