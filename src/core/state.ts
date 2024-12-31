export function larasState<T>(initialValue: T): [() => T, (newValue: T) => void] {
    let value = initialValue

    const getValue = () => value
    const setValue = (newValue: T) => value = newValue
    document.dispatchEvent(new CustomEvent('stateChanged'));

    return [getValue, setValue]
}

