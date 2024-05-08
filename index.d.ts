export {};

declare global {
  interface Document {
    startViewTransition(callback: () => void): {
      ready: Promise<void>;
      updateCallbackDone: Promise<void>;
      finished: Promise<void>;
    };
  }
}
