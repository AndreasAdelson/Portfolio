import './assets/css/gui.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Acceuil from './components/Acceuil';

class App extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={Acceuil} />
					</Switch>
				</Router>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
