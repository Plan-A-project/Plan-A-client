type Callback<T> = (...args: any[]) => Promise<T>;
import { useRouter } from "next/router";

export const methodFormat = <T>(callback: Callback<T>) => {
  const method = async (
    ...args: any[]
  ): Promise<{
    ok: boolean;
    data?: T;
    message?: string;
    code?: any;
  }> => {
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
        code: error.response.status || "",
      };
    }
  };
  return method;
};
