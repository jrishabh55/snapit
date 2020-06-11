import React, { useCallback, useState } from 'react';
import CodeMirror from 'components/CodeMirror/CodeMirror';

import { themes, LANGUAGES, baseCode } from 'utils';

import './App.scss';

function App() {
  const [theme, setTheme] = useState('material');
  const [mode, setMode] = useState('javascript');
  const [code, setCode] = useState(baseCode);

  const onThemeChange = useCallback((e) => {
    console.log(e.currentTarget.value);
    setTheme(e.currentTarget.value);
  }, []);

  const onModeChange = useCallback((e) => {
    console.log(e.currentTarget.value);
    setMode(e.currentTarget.value);
  }, []);

  return (
    <div className="app">
      <div>
        <select onChange={onThemeChange} value={theme}>
          {
            themes.map(theme => <option key={theme.id} value={theme.id}>{theme.name}</option>)
          }
        </select>
        <select onChange={onModeChange} value={mode}>
          {
            LANGUAGES.map(language => <option key={language.id} value={language.mode}>{language.name}</option>)
          }
        </select>
      </div>

      <CodeMirror
        value={code}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
        options={{
          theme,
          mode,
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default App;
