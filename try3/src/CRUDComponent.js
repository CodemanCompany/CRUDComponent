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
		const data = [
			{
				"id": 1,
				"name": "Gustavo",
				"last_name": "Martinez",
				"created_at": "2022-11-22 18:27:03",
			},
			{
				"id": 2,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 3,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 4,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 5,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 6,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 7,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 8,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 9,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 10,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 11,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
			{
				"id": 12,
				"name": "Mateo",
				"last_name": "Bernal",
				"created_at": "2022-11-23 08:27:03",
			},
		];

		$( table.current ).DataTable( {
			"columns": [
				{ "data": "id" },
				{ "data": "name" },
				{ "data": "last_name" },
				{ "data": "created_at" }
			],
			"data": data,
			"ordering": true,
			"paging": true,
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
