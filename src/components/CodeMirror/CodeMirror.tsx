import React, { FC, useEffect, useState } from 'react';
import { EditorConfiguration } from 'codemirror';
import {
  Controlled as CodeMirrorComponent,
  IControlledCodeMirror,
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

const CodeMirror: FC<IControlledCodeMirror> = props => {
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
