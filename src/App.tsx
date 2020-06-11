import React, { useCallback, useState } from 'react';
import SyntaxHighlighterComponent from './components/SyntaxHighlighter';

import { themes } from 'utils';

import './App.scss';

function App() {
  const [theme, setTheme] = useState('material');

  const onThemeChange = useCallback((e) => {
    console.log(e.currentTarget.value);
    setTheme(e.currentTarget.value);
  }, []);
  return (
    <div className="app">
      <div>
        <select onChange={onThemeChange} value={theme}>
          {
            themes.map(theme => <option key={theme.id} value={theme.id}>{theme.name}</option>)
          }
        </select>
      </div>
      <SyntaxHighlighterComponent style={theme}>
        {baseCode}
      </SyntaxHighlighterComponent>
    </div>
  );
}

export default App;
