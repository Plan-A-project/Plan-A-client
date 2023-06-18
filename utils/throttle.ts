// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): [T, () => void] => {
  let timerId: ReturnType<typeof setTimeout> | null;
  let lastArgs: Parameters<T> | null;
  let isCancelled = false;

  const throttledFn = (...args: Parameters<T>) => {
    lastArgs = args;

    if (!timerId && !isCancelled) {
      timerId = setTimeout(() => {
        if (lastArgs) {
          callback(...lastArgs);
          lastArgs = null;
        }
        timerId = null;
      }, delay);
    }
  };

  const cancel = () => {
    if (timerId != null) {
      clearTimeout(timerId);
    }
    timerId = null;
    lastArgs = null;
    isCancelled = true;
  };

  return [throttledFn as T, cancel];
};
