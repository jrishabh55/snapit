import { useContext } from 'react';
import DataContext, { DataContextType } from './data.context';

type ContextTypes = 'data';

export function useFetchContext(context: 'data'): DataContextType;
export function useFetchContext(context: ContextTypes): DataContextType {
  let currContext = DataContext;
  if (context === 'data') {
    currContext = DataContext;
  }

  return useContext(currContext);
}
