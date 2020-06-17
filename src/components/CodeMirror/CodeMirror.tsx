import React, { FC, useEffect, useState } from 'react';
import { EditorConfiguration } from 'codemirror';
import { UnControlled as CodeMirrorComponent, IUnControlledCodeMirror } from 'react-codemirror2';

import './codemirror.scss';

const useCodeMirrorTheme = (options: EditorConfiguration) => {
  const [isSettingTheme, setIsSettingTheme] = useState(true);
  useEffect(() => {
    setIsSettingTheme(true);
    import(`codemirror/theme/${options.theme}.css`).then(() => {
      setIsSettingTheme(false);
    });
  }, [options]);

  return { isSettingTheme };
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
  const { isSettingTheme } = useCodeMirrorTheme(options);
  const { isSettingMode } = useCodeMirrorMode(options);

  if (isSettingTheme || isSettingMode) {
    return null;
  }

  return <CodeMirrorComponent {...props} />;
};

export default CodeMirror;
