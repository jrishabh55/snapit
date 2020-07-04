import { createContext, Dispatch } from 'react';
import { DataType, initialValues, DataReducerType } from 'reducers/data.reducer';

export type DataContextType = { dispatch: Dispatch<DataReducerType>; state: DataType };

const dataContext = createContext<DataContextType>({
  dispatch: () => initialValues,
  state: initialValues,
});

export default dataContext;
