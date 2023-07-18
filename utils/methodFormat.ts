type Callback<T> = (...args: any[]) => Promise<T>;

export const methodFormat = <T>(callback: Callback<T>) => {
  const method = async (
    ...args: any[]

  ): Promise<{ ok: boolean; data?: T; message?: string }> => {

    try {
      const data = await callback(...args);
      return {
        ok: true,
        data,
      };
    } catch (error: any) {
      return {
        ok: false,
        message: error.message,
      };
    }
  };
  return method;
};
