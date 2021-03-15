import { ReducerWithoutAction, useReducer } from 'react';
export const useForceUpdate = () => {
  const [, setReload] = useReducer<ReducerWithoutAction<number>, number>(
    value => value + 1,
    0,
    value => value,
  );
  return setReload;
};
