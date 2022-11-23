import { useEffect, useRef } from 'react';
import './CRUDComponent.css';
import $ from 'jquery';
// import 'datatables.net';
import 'datatables.net-bs5';

// Styles
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';

function CRUDComponent() {

	const table = useRef();

	useEffect( () => {
		const data = [];

		$( table.current ).DataTable( {
			"ajax": function( data, callback, settings ) {
				$.ajax( {
					"url": 'http://[::1]:8000/index.php',
					"type": 'GET',
					"data": data,
					"success": ( data ) => {
						callback( data );
					},
				} );
			},
			"columns": [
				// { "data": "id" },
				// { "data": "name" },
				// { "data": "last_name" },
				// { "data": "created_at" }
				{ "data": 0 },
				{ "data": 1 },
				{ "data": 2 },
				{ "data": 3 }
			],
			"data": data,
			"ordering": true,
			"paging": true,
			"processing": true,
			"serverSide": true,
		} );
	}, [] );

	return (
		<div className="CRUDComponent container">
			<h1 className="display-5 my-3">CRUDComponent</h1>

			<table ref={table} id="table" className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
						<th>Apellido Paterno</th>
						<th>Fecha de creación</th>
					</tr>
				</thead>
			</table>
		</div>
	);
}

export default CRUDComponent;
