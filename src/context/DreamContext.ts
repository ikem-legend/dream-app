import {createContext, useReducer} from "react";

export type DreamData = {
  firstName: string
  dreamDesc: string
}

type DreamDefn = {
  dreams: DreamData[]
}

type DreamContextType = {
  dreams: DreamData[],
  dispatch: ({dreams}: DreamDefn) => void
}

const useController = () => {
  const initialState = {
    dreams: []
  };

  const [state, dispatch] = useReducer(
    (state: any, value: any) => ({
      ...state,
      ...value,
    }),
    initialState,
  );

  return {state, dispatch};
};

const dreamDB: DreamData[] = []
export const DreamContext = createContext<DreamContextType>({dreams: dreamDB, dispatch: () => {}})

export default useController