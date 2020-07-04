import React, { useReducer } from 'react';
import DataContext from 'utils/contexts/data.context';
import dataReducer, { initialValues } from 'reducers/data.reducer';
import Layout from 'components/Layout/Layout';
import SnapIt from 'pages/SnapIt';

import './assets/main.css';
import './App.scss';

function App() {
  const [state, dispatch] = useReducer(dataReducer, initialValues);
  return (
    <div className="app">
      <DataContext.Provider value={{ dispatch, state }}>
        <Layout>
          <SnapIt />
        </Layout>
      </DataContext.Provider>
    </div>
  );
}

export default App;
