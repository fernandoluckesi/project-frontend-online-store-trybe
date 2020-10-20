import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:productId" component={DetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
