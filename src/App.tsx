import React, { useCallback, useState } from 'react';
import SyntaxHighlighterComponent from './components/SyntaxHighlighter';

import { baseCode, themes } from 'utills';

import './App.scss';

function App() {
  const [theme, setTheme] = useState('atomOneDark');
  const onSelectChange = useCallback((e) => {
    console.log(e.currentTarget.value);
    setTheme(e.currentTarget.value);
  }, []);
  return (
    <div className="app">
      <div>
        <select onChange={onSelectChange} value={theme}>
          {
            themes.map(theme => <option key={theme.value} value={theme.value}>{theme.name}</option>)
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
