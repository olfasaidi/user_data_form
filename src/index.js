import React from 'react'; // JSX
import ReactDOM from 'react-dom'; // Library from node_modules
import './index.css'; // File from specific location
import App from './App'; // JavaScript Files
import reportWebVitals from './reportWebVitals';


	// React.createElement(
	// 	'div',
	// 	{},
	// 	React.createElement(
	// 		'span',
	// 		{},
	// 		React.createElement(
	// 			'span',
	// 			{},
	// 			'Name: ',
	// 			React.createElement(
	// 				'span',
	// 				{},
	// 				'Fernando'
	// 			),
	// 			React.createElement(
	// 				'br',
	// 				{},
	// 			),
	// 			'Last Name: ',
	// 			React.createElement(
	// 				'span',
	// 				{},
	// 				'Toledo'
	// 			)
	// 		)
	// 	)
	// ),


ReactDOM.render( // Virtual DOM
	<React.StrictMode>
		<App>
		</App>
	</React.StrictMode>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
