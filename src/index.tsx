import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Acceuil from './components/Acceuil/index'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Acceuil} />
        </Switch>
      </Router>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);