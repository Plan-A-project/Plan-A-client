type TimerId = ReturnType<typeof setTimeout>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): [T, () => void] => {
  let timerId: TimerId | null = null;

  const debouncedFn = (...args: Parameters<T>) => {
    if (timerId != null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };

  const cancel = () => {
    if (timerId != null) {
      clearTimeout(timerId);
    }
    timerId = null;
  };

  return [debouncedFn as T, cancel];
};
