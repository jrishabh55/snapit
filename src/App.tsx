import React, { useCallback, useState, MouseEvent } from 'react';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';

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

  const onSnapIt = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.querySelector('.react-codemirror2');
    if (el) {
      domToImage.toBlob(el).then((blob) => {
        saveAs(blob, 'capture.png');
      });
    }
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
        <button type="button" onClick={onSnapIt}>
          Snap IT
        </button>
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
