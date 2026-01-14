import { t, _, p } from "./compat.module-0843eda4.js";
const useCallbackOnEsc = (callback) => {
  const cb = t(_(callback), "cb");
  const active = !!callback;
  cb.current = callback;
  p(() => {
    if (!active) {
      return;
    }
    const callbackOnEsc = (e) => {
      if (e.key === "Escape") {
        cb.current && cb.current();
      }
    };
    document.addEventListener("keydown", callbackOnEsc);
    return () => {
      document.removeEventListener("keydown", callbackOnEsc);
    };
  }, [active]);
};
export {
  useCallbackOnEsc as u
};
