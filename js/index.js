'use strict';

const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');


const Main = require('./components/Main');
const reducers = require('./reducers/reducers');

let store = createStore(reducers);

render(
	<Provider store={store}>
		<Main />
	</Provider>, 
	document.getElementById('signUpApp')
);