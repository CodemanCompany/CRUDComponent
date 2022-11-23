import React from 'react';
import ReactDOM from 'react-dom/client';
import CRUDComponent from './CRUDComponent';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
	// <React.StrictMode>
		<CRUDComponent />
	// </React.StrictMode>
);