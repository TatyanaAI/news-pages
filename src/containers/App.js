import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout from '../components/Layout/layout'

import NewsListContainer from './NewsListContainer/newsListContainer';
import AddNewsContainer from './AddNewsContainer/addNewsContainer';
import FullNewsContainer from './FullNewsContainer/fullNewsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout  >
        <Switch>
          <Route path="/" exact component={NewsListContainer} />
          <Route path="/news" exact component={NewsListContainer} />
          <Route path="/news/:id" exact component={(props) => <FullNewsContainer {...props} />} />
          <Route path="/add" exact component={AddNewsContainer} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
