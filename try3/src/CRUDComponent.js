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

		const tfoot = $( '#table tfoot td:not( .options )' );
		tfoot.each( function () {
			var title = $( this ).text();
			$( this ).html( '<input class="form-control form-control-sm" type="text" placeholder="Buscar en ' + title + '" />' );
		} );

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
			"initComplete": function() {
				this.api().columns().every( function () {
					const that = this;

					$( 'input', this.footer() ).on( 'keyup change', function() {
						if ( that.search() !== this.value ) {
							that
							.search( this.value )
							.draw();
						}	// end if
					} );
				} );
			},
		} );
	}, [] );

	return (
		<div className="CRUDComponent container">
			<h1 className="display-5 my-3">CRUDComponent</h1>

			<hr />

			<table ref={table} id="table" className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
						<th>Apellido Paterno</th>
						<th>Fecha de creación</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td>ID</td>
						<td>Nombre</td>
						<td>Apellido Paterno</td>
						<td>Fecha de creación</td>
					</tr>
				</tfoot>
			</table>
			<hr />
		</div>
	);
}

export default CRUDComponent;
