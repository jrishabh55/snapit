import { EditorConfiguration } from 'codemirror';
import set from 'lodash/set';

export enum DataReducerActions {
  CODEMIRROR_MODE_CHANGE,
  CODEMIRROR_THEME_UPDATE,
}

export interface DataReducerType {
  type: DataReducerActions;
  data?: Record<string, any>;
}

export interface DataType {
  config: {
    codeMirror: EditorConfiguration;
  };
}

export const initialValues: DataType = {
  config: {
    codeMirror: {
      theme: 'material',
      mode: 'javascript',
      lineNumbers: true,
      autofocus: true,
      lineWrapping: true,
    },
  },
};

const dataReducer = ($state: DataType = initialValues, action: DataReducerType) => {
  const state: DataType = JSON.parse(JSON.stringify($state));
  switch (action.type) {
    case DataReducerActions.CODEMIRROR_MODE_CHANGE:
      return set(state, 'config.codeMirror.mode', action.data?.mode);
    case DataReducerActions.CODEMIRROR_THEME_UPDATE:
      return set(state, 'config.codeMirror.theme', action.data?.theme);
    default:
      return state;
  }
};

export default dataReducer;
