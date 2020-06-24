import React, { useCallback, useState, useMemo, MouseEvent, ChangeEvent } from 'react';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';

import { themes, baseCode } from 'utils';
import { modes } from 'utils/modes';

import CodeWrapper from 'components/CodeWrapper';
import CodeMirror from 'components/CodeMirror/CodeMirror';

import Box from 'components/tailwind/Box/Box';
import Button from 'components/tailwind/Button';
import Select from 'components/tailwind/Select';

const SnapIt = () => {
  const [theme, setTheme] = useState('material');
  const [mode, setMode] = useState('javascript');

  const onThemeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.currentTarget.value);
  }, []);

  const onModeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setMode(e.currentTarget.value);
  }, []);

  const onSnapIt = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.querySelector('#codeation-code-wrapper');
    if (el) {
      domToImage.toBlob(el).then((blob) => {
        saveAs(blob, 'capture.png');
      });
    }
  }, []);

  const themeOption = useMemo(() => themes.map(($theme) => ({ name: $theme.name, value: $theme.id })), []);

  const modeOption = useMemo(
    () =>
      modes.map(($language) => ({
        name: $language.name,
        value: $language.mode,
        id: $language.id,
      })),
    []
  );

  return (
    <>
      <Box className="max-w-screen-md mx-auto">
        <Select options={themeOption} value={theme} onChange={onThemeChange} />
        <Select options={modeOption} value={mode} onChange={onModeChange} />
        <Button bgColor="white" textColor="blue-500" shadowType="normal" border rounded onClick={onSnapIt}>
          Snap IT
        </Button>
      </Box>
      <Box className="mt-4 max-w-screen-md mx-auto">
        <CodeWrapper>
          <CodeMirror
            value={baseCode}
            options={{
              theme,
              mode,
              lineNumbers: true,
              autofocus: true,
            }}
          />
        </CodeWrapper>
      </Box>
    </>
  );
};

export default SnapIt;
