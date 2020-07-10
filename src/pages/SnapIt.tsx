import React, { useCallback, useState, useMemo, MouseEvent, ChangeEvent } from 'react';

import { themes, baseCode } from 'utils';
import { modes, ModeType } from 'utils/modes';
import captureDom from 'utils/captureDom';
import { useFetchContext } from 'utils/contexts';

import CodeWrapper from 'components/CodeWrapper';
import CodeMirror from 'components/CodeMirror/CodeMirror';

import { Box, Select, Button } from 'tailwind';
import Header from 'components/Header';
import { DataReducerActions } from 'reducers/data.reducer';

const id = '#codeation-code-wrapper';

const SnapIt = () => {
  const { state, dispatch } = useFetchContext('data');
  const [theme, setTheme] = useState(state.config.codeMirror.theme as string);
  const [mode, setMode] = useState(state.config.codeMirror.mode);

  const onThemeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setTheme(e.currentTarget.value);
      dispatch({ type: DataReducerActions.CODEMIRROR_THEME_UPDATE, data: { theme: e.currentTarget.value } });
    },
    [dispatch]
  );

  const onModeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { mode: currentMode } = modes.find((m) => m.id === parseInt(e.currentTarget.value, 10)) as ModeType;
      setMode(e.currentTarget.value);
      dispatch({ type: DataReducerActions.CODEMIRROR_MODE_CHANGE, data: { mode: currentMode } });
    },
    [dispatch]
  );

  const onSnapIt = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    captureDom(id);
  }, []);

  const themeOption = useMemo(() => themes.map(($theme) => ({ name: $theme.name, value: $theme.id })), []);

  const modeOption = useMemo(
    () =>
      modes.map(($language) => ({
        name: $language.name,
        value: $language.id,
        id: $language.id,
      })),
    []
  );

  return (
    <>
      <Header title="SnapIT" />
      <Box display="grid" gap="2" className="grid-flow-col max-w-screen-md justify-center mx-auto">
        <Select options={themeOption} value={theme} onChange={onThemeChange} />
        <Select options={modeOption} value={mode} onChange={onModeChange} />
        <Button bgColor="bg-blue-300" textColor="text-white" shadow border rounded onClick={onSnapIt}>
          Snap IT
        </Button>
      </Box>
      <Box className="mt-4 max-w-screen-md mx-auto">
        <CodeWrapper id={id}>
          <CodeMirror value={baseCode} className="w-full" options={state.config.codeMirror} />
        </CodeWrapper>
      </Box>
    </>
  );
};

export default SnapIt;
