import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App_23_FetchingData from './App_23_FetchingData';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<App_23_FetchingData />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
