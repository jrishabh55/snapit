import React, { useCallback, useState } from 'react';
import CodeMirror from 'components/CodeMirror/CodeMirror';

import { themes, LANGUAGES } from 'utils';

import './App.scss';

function App() {
  const [theme, setTheme] = useState('material');

  const onThemeChange = useCallback((e) => {
    console.log(e.currentTarget.value);
    setTheme(e.currentTarget.value);
  }, []);

  const [mode, setMode] = useState('javascript');
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
        <select onChange={onModeChange} value={theme}>
          {
            LANGUAGES.map(language => <option key={language.mode} value={language.mode}>{language.name}</option>)
          }
        </select>
      </div>

      <CodeMirror
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
