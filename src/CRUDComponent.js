import { useEffect } from 'react';
import $ from 'jquery';
import './CRUDComponent.css';
import 'datatables.net'

function CRUDComponent() {
	// $.DataTable = require( 'datatables.net' );

	let active = 1;

	useEffect( () => {
		if( active )
		$( '#table' ).DataTable( {
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
				// {
				// 	"data": null,
				// 	"orderable": false,
				// 	"render": ( data, type, row ) => {
				// 		const dataString = escape( JSON.stringify( data ) );
				// 		return `<button class="btn btn-sm update-modal" type="button" data-params="${dataString}">
				// 			<i class="la la-edit"></i> Editar
				// 		</button>
				// 		<button class="btn btn-sm delete-modal" type="button" data-params="${dataString}">
				// 			<i class="la la-trash"></i> Eliminar
				// 		</button>`;
				// 	},
				// 	"searchable": false,
				// 	"sortable": false,
				// 	"targets": 0,
				// },
				{ "data": "id", "width": 150 },
				{ "data": "name" },
				{ "data": "last_name" },
				// { "data": "email" },
			],
			"dom": 'Blfrtip',
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
			// "language": request.lang,
			"pageLength": 10,
			"processing": true,
			// Scrollable
			"scrollCollapse": true,
			"scrollX": true,
			"scrollY": "50vh",
			"serverSide": true,
			// "initComplete": function() {
			// 	this.api().columns().every( function () {
			// 		const that = this;

			// 		$( 'input', this.footer() ).on( 'keyup change', function() {
			// 			if ( that.search() !== this.value ) {
			// 				that
			// 				.search( this.value )
			// 				.draw();
			// 			}	// end if
			// 		} );
			// 	} );
			// },
		} );
		active = 0;
	}, [] );

	
	return (
		<div className="CRUDComponent container">
			<h1 className="display-5 my-3">CRUDComponent</h1>

			<table id="table" className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
						<th>Apellido Paterno</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
				<tfoot>
					<tr>
						<td>ID</td>
						<td>Nombre</td>
						<td>Apellido Paterno</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}	// end function

export default CRUDComponent;
