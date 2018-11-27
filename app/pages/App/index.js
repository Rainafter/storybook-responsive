/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyle from '../../global-styles';

const App = () => (
  <div className="app">
    <Helmet
      titleTemplate="Discovery"
      defaultTitle="Discovery"
    >
      <meta name="description" content="Discovery Email Component" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Home} />
    </Switch>
    <GlobalStyle />
  </div>
);


export default App;
