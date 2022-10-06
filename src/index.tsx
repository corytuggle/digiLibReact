import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Contact, About, Library, SignIn } from './components';
import './style.css';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const temp_props = "Sydbee's Digital Library"

ReactDOM.render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
		
		<Provider store={store}>

		<Router>
			<Switch>

				<Route exact path='/'>
					<Home title={temp_props} />
				</Route>

				<Route path='/library'>
					<Library></Library>
				</Route>

				<Route path='/contact'>
					<Contact></Contact>
				</Route>

				<Route path='/about'>
					<About></About>
				</Route>

				<Route path='/signin'>
					<SignIn></SignIn>
				</Route>
			
			</Switch>
		</Router>
		
		</Provider>
		
		</FirebaseAppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
