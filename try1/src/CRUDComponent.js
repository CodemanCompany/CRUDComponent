import { useEffect, useRef } from 'react';
import $ from 'jquery';
import './CRUDComponent.css';
import 'datatables.net';
import { tab } from '@testing-library/user-event/dist/tab';

function CRUDComponent() {
	// $.DataTable = require( 'datatables.net' );

	const table = useRef();
	let active = 1;

	useEffect( () => {
		if( active ) {
			console.log($( table.current ));
			// $( table.current ).DataTable().destroy()
			$( table.current ).DataTable( {
			"aaSorting": [ [ 1, "desc" ] ] ,
			"ajax": function( data, callback, settings ) {
				$.ajax( {
					"url": 'http://localhost:8000/',
					"type": 'GET',
					// "data": data,
					// "headers": request.getHeaders( true ),
					"success": ( data ) => {
						callback( data );
					},
					// "error": ( data ) => {
					// 	Swal.fire( {
					// 		"confirmButtonText": "Aceptar",
					// 		"text": "Por favor vuelve a iniciar sesión.",
					// 		"title": "Tu sesión ha expirado",
					// 		"type": "error",
					// 	} )
					// 	.then( ( result ) => {
					// 		if( result.value ) {
					// 			localStorage.clear();
					// 			location.href = '/';
					// 		}	// end if
					// 	} );
					// },
				} );
			},
			"lengthMenu": [
				[ 10, 25, 50, 100, -1 ],
				[ 10, 25, 50, 100, "Todos" ],
			],
			"columns": [
				{ "data": "id" },
				{ "data": "name" },
				{ "data": "last_name" },
			],
			// "dom": 'Blfrtip',
			"buttons": [
				{
					"bom": true,
					"charset": "utf-8",
					"className": "btn btn-secondary mb-4",
					"exportOptions": { "columns": ":visible:not(:eq(0))" },
					"extend": "csv",
					"fieldBoundary": '"',
					"fieldSeparator": ",",
					"filename": "Reporte",
					"text": '<i class="far fa-file-excel"></i> Exportar a CSV',
				},
			],
			"pageLength": 10,
			"processing": true,
			"serverSide": true,
		} );
		}	// end if
		active = 0;
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
					</tr>
				</thead>
			</table>
		</div>
	);
}	// end function

export default CRUDComponent;
