import React, { FC, useEffect, useState } from 'react';
import { EditorConfiguration } from 'codemirror';
import {
  UnControlled as CodeMirrorComponent,
  IUnControlledCodeMirror,
} from 'react-codemirror2';

import './codemirror.scss';


const useCodeMirrorTheme = (options: EditorConfiguration) => {
  const [settingTheme, setSettingTheme] = useState(true);
  useEffect(() => {
    setSettingTheme(true);
    Promise.all([
      import(`codemirror/mode/${options.mode}/${options.mode}`),
      import(`codemirror/theme/${options.theme}.css`),
    ]).then(() => {
      setSettingTheme(false);
    });
  }, [options]);

  return { settingTheme };
};

const CodeMirror: FC<IUnControlledCodeMirror> = (
  props = {
    options: {
      mode: 'xml',
      theme: 'material',
      lineNumbers: true,
    },
  }
) => {
  const { options = {} } = props;
  const { settingTheme } = useCodeMirrorTheme(options);

  if (settingTheme) {
    return null;
  }

  return (
      <CodeMirrorComponent {...props} />
  );
};

export default CodeMirror;
