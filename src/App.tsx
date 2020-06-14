import React, { useCallback, useState } from 'react';
import CodeMirror from 'components/CodeMirror/CodeMirror';

import { themes, LANGUAGES, baseCode } from 'utils';

import './assets/main.css';
import './App.scss';

function App() {
  const [theme, setTheme] = useState('material');
  const [mode, setMode] = useState('javascript');

  const onThemeChange = useCallback((e) => {
    setTheme(e.currentTarget.value);
  }, []);

  const onModeChange = useCallback((e) => {
    setMode(e.currentTarget.value);
  }, []);

  return (
    <div className="app">
      <div>
        <select onChange={onThemeChange} value={theme}>
          {themes.map(($theme) => (
            <option key={$theme.id} value={$theme.id}>
              {$theme.name}
            </option>
          ))}
        </select>
        <select onChange={onModeChange} value={mode}>
          {LANGUAGES.map((language) => (
            <option key={language.id} value={language.mode}>
              {language.name}
            </option>
          ))}
        </select>
      </div>

      <CodeMirror
        value={baseCode}
        options={{
          theme,
          mode,
          lineNumbers: true,
          autofocus: true,
        }}
      />
    </div>
  );
}

export default App;
