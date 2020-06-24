import React from 'react';
import Layout from 'components/Layout/Layout';

import './assets/main.css';
import './App.scss';
import SnapIt from 'pages/SnapIt';

function App() {
  return (
    <div className="app">
      <Layout>
        <SnapIt />
      </Layout>
    </div>
  );
}

export default App;
