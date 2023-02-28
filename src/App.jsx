import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Pay from './components/Pay';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pay" component={Pay} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
