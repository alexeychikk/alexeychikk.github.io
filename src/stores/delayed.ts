import { writable, type Writable } from 'svelte/store';

export function delayed<T>(
  initialValue: T,
  delay: number,
  when: (value: T) => boolean = () => true,
): Writable<T> {
  let timeout: number;

  const { set, subscribe, update } = writable(initialValue, () => {
    return () => clearTimeout(timeout);
  });

  return {
    subscribe,
    set: (value: T) => {
      clearTimeout(timeout);
      if (when(value)) {
        timeout = setTimeout(() => set(value), delay);
      } else {
        set(value);
      }
    },
    update: (fn: (value: T) => T) => {
      update((value) => {
        const newValue = fn(value);
        clearTimeout(timeout);
        if (when(value)) {
          timeout = setTimeout(() => set(value), delay);
          return value;
        }
        return newValue;
      });
    },
  };
}

export const delayedOut = (initialValue: boolean, delay: number) =>
  delayed(initialValue, delay, (value) => !value);
