import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CRUDComponent from './CRUDComponent';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
	<React.StrictMode>
		<CRUDComponent />
	</React.StrictMode>
);