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
    import(`codemirror/theme/${options.theme}.css`).then(() => {
      setSettingTheme(false);
    });
  }, [options]);

  return { settingTheme };
};

const useCodeMirrorMode = (options: EditorConfiguration) => {
  const [isSettingMode, setIsSettingMode] = useState(true);
  useEffect(() => {
    setIsSettingMode(true);
    import(`codemirror/mode/${options.mode}/${options.mode}`).then(() => {
      setIsSettingMode(false);
    });
  }, [options]);

  return { isSettingMode };
};

const CodeMirror: FC<IUnControlledCodeMirror> = (props) => {
  const { options = {} } = props;
  const { settingTheme } = useCodeMirrorTheme(options);
  const { isSettingMode } = useCodeMirrorMode(options);

  if (settingTheme || isSettingMode) {
    return null;
  }

  return <CodeMirrorComponent {...props} />;
};

export default CodeMirror;
