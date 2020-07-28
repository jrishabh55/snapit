import React, { useState, useEffect, useReducer } from 'react';
import ReactGA from 'react-ga';
import DataContext from 'utils/contexts/data.context';
import dataReducer, { initialValues } from 'reducers/data.reducer';
import Layout from 'components/Layout/Layout';
import FullScreenLoading from 'components/FullScreenLoading';
import SnapIt from 'pages/SnapIt';

import './assets/main.css';
import './App.scss';

function App() {
  const [state, dispatch] = useReducer(dataReducer, initialValues);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTIC_KEY as string);
    setLoading(false);
  }, []);

  return (
    <div className="app">
      {loading && <FullScreenLoading />}
      <DataContext.Provider value={{ dispatch, state }}>
        <Layout>
          <SnapIt />
        </Layout>
      </DataContext.Provider>
    </div>
  );
}

export default App;
