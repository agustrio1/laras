export function larasState<T>(
    initialValue: T
): [() => T, (newValue: T) => void, (callback: () => void) => () => void] {
    let value = initialValue;
    const subscribers: Set<() => void> = new Set();

    const getValue = () => value;
    const setValue = (newValue: T) => {
        value = newValue;
        subscribers.forEach((callback) => callback());
    };

    const subscribe = (callback: () => void) => {
        subscribers.add(callback);
        return () => subscribers.delete(callback); // Unsubscribe
    };

    return [getValue, setValue, subscribe,];
}
