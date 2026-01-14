import { t, _, h, F, p } from "./compat.module-0843eda4.js";
const useLaggedState = (initialState, defaultDelay = 0, thenState) => {
  const timeout = t(_(), "timeout");
  const [[currentState, nextState], setLocalState] = t(h(() => {
    const initial = typeof initialState === "function" ? initialState() : initialState;
    return [initial, initial];
  }), "setLocalState");
  const setState = t(F(
    () => {
      const _setter = (newState, customDelay) => {
        timeout.current && clearTimeout(timeout.current);
        const delay = customDelay !== void 0 ? customDelay : defaultDelay;
        setLocalState((prevState) => {
          const [current, upcoming] = prevState;
          const newValue = typeof newState === "function" ? newState(current, upcoming) : newState;
          if (!delay || newValue === current) {
            return newValue === current && newValue === upcoming ? prevState : [newValue, newValue];
          }
          timeout.current = setTimeout(() => setLocalState([newValue, newValue]), delay);
          return [current, newValue];
        });
      };
      _setter.cancel = () => {
        _setter((prevState) => prevState, null);
      };
      return _setter;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // defaultDelay,
    ]
  ), "setState");
  p(
    () => {
      thenState !== void 0 && setState(thenState);
      return () => {
        timeout.current && clearTimeout(timeout.current);
      };
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const isTransitioning = currentState !== nextState || void 0;
  return [currentState, setState, nextState, isTransitioning];
};
export {
  useLaggedState as u
};
