
@extends('layouts.index')

@section('contenido-pageheader')
    <ol class="breadcrumb slim-breadcrumb">
        <li class="breadcrumb-item"><a href="#">Actividades</a></li>
        <li class="breadcrumb-item"><a href="#">Consulta Actividades</a></li>
    </ol>
    <h6 class="slim-pagetitle">Consulta Actividades</h6>
@endsection


@section('contenido-principal')

    <div class="section-wrapper" style="max-width: 100%;">
        <div class="form-layout">
            <div class="d-flex justify-content-between" style="align-items: center;">
                <a style="border:1px solid #ccc; width: 70px; height: 45px;" data-toggle="collapse" data-parent="#accordion" href="#collapseSearchAdvance" aria-expanded="false" aria-controls="collapseSearchAdvance" class="btn btn-default">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <i class="fas fa-chevron-down" style="margin-left: 5%; font-size:0.7em;"></i>
                </a>

            </div>

            <div id="accordion" class="accordion-one mt-2 mg-b-20" role="tablist" aria-multiselectable="true">
                <div class="card">
                    <div id="collapseSearchAdvance"  role="tabpanel" aria-labelledby="headingOne">
                        <div class="card-body">
                            <div class="row mg-b-25">

                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label class="label">Fecha de solicitud (Desde): </label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="icon ion-calendar tx-16 lh-0 op-6"></i>
                                                </div>
                                            </div>
                                            <input type="date" class="form-control fc-datepicker" placeholder="DD-MM-AAAA" value="" id="fechasinicio" name="" >
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label class="label">Fecha de solicitud (Hasta): </label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="icon ion-calendar tx-16 lh-0 op-6"></i>
                                                </div>
                                            </div>
                                            <input type="date" class="form-control fc-datepicker" placeholder="DD-MM-AAAA" value="" id="fechasfinal" name="" >
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label class="label">Número de personas :</label>
                                        <input class="form-control" type="text" value="" name="" id="numero" placeholder="">
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-lg-12">
                                    <button type="button" class="btn btn-primary btn-sm btn-block mg-b-10" data-toggle="collapse" data-target="#demo" onclick="buscar()">Filtrar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="resultados" class="mg-b-20 mg-t-20">
                <table id="resultados" class="display dataTable dtr-inline collapsed d-block" style="overflow-x: auto; padding-left:0; padding-right:0" role="grid" aria-describedby="example_info">
                    <thead style="background-color: #EBEEF1; color: #000; text-align:center">
                        <tr>
                            <th class="acciones" name="acciones" style="width: 20%;">ID</th>
                            <th class="id_solicitud" name="id_solicitud" style="width: 20%;">Titulo</th>
                            <th class="fecha_registro" name="fecha_registro" style="width: 10%;">Precio</th>
                            <th class="carpeta-investigacion" name="carpeta-investigacion" style="width: 10%;">Número de personas</th>
                            <th class="carpeta-investigacion" name="carpeta-investigacion" style="width: 20%;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="items-agregados" style="width: 100%; text-align: center;">
                    </tbody>
                </table>
            </div>


    <div class="modal fade" id="modal_reservas"  data-backdrop="static" aria-hidden="true">
        <div class="modal-dialog modal-dialog-medium" role="document">
            <div class="modal-content">
            <div class="modal-header pd-x-20">
              <h6 class="tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold" >Confirmación de reserva de actividad</h6>
            </div>
            <div class="modal-body pd-20">
          <div class="row">

            <div class="col-lg-6">
                <div class="form-group mg-b-10-force" id="div_id">
                  <label class="form-control-label">ID:</label>
                  <input type="number" class="form-control fc-datepicker"  name="id_reserva" id="id_reserva"  autocomplete="off">
                </div>
            </div>

            <div class="col-lg-12">
              <div class="form-group mg-b-10-force" id="divFechaApel">
                <label class="form-control-label">Cantidad de personas :</label>
                <input type="number" class="form-control fc-datepicker"  name="numero_personas" id="numero_personas"  autocomplete="off">
              </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mg-b-10-force" id="divFechaApel">
              <label class="form-control-label">Precio unitario:</label>
              <input type="number" class="form-control fc-datepicker"  name="precio_por_persona" id="precio_por_persona"  autocomplete="off" readonly="readonly">
            </div>
        </div>

        <div class="col-lg-6">
            <div class="form-group mg-b-10-force" id="divFechaApel">
              <label class="form-control-label">Total:</label>
              <input type="number" class="form-control fc-datepicker"  name="total" id="total"  autocomplete="off"  readonly="readonly">
            </div>
        </div>

        <div class="col-lg-12">
            <div class="form-group mg-b-10-force" id="divFechaApel">
              <label class="form-control-label">Fecha de reserva:</label>
              <input type="date" class="form-control fc-datepicker"  name="fecha_reserva" id="fecha_reserva"  autocomplete="off">
            </div>
        </div>

        </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="cerrarModalGeneral()">Cancelar</button>
                 <button type="button" class="btn btn-primary"  onclick="guardarReserva()">Guardar</button>
              </div>

            </div>
          </div>
        </div>

        </div>
    </div>


    <div class="modal fade" id="modal_actividades_detalle" data-backdrop="static" aria-hidden="true">
        <div class="modal-dialog modal-dialog-medium" role="document">
            <div class="modal-content">
                <div class="modal-header pd-x-20">
                    <h6 class="tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold">Información de la actividad</h6>
                </div>
                <div class="modal-body pd-20">
                    <div class="modal-body pd-20">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Campo</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Título:</strong></td>
                                    <td id="titulo"></td> <!-- Aquí mostramos el título de la actividad -->
                                </tr>
                                <tr>
                                    <td><strong>Descripción:</strong></td>
                                    <td id="descripcion"></td> <!-- Aquí mostramos la descripción de la actividad -->
                                </tr>
                                <tr>
                                    <td><strong>Fecha de reservación:</strong></td>
                                    <td id="fecha_reservacion"></td> <!-- Aquí mostramos el precio total -->
                                </tr>
                                <tr>
                                    <td><strong>Cantidad de personas:</strong></td>
                                    <td id="numero_personas2"></td> <!-- Aquí mostramos la cantidad de personas -->
                                </tr>
                                <tr>
                                    <td><strong>Precio total:</strong></td>
                                    <td id="total2"></td> <!-- Aquí mostramos el precio total -->
                                </tr>

                                <tr>
                                    <td><strong>Actividad Relacionada:</strong></td>
                                    <td id="actividad_relacionada"></td> <!-- Aquí mostramos la actividad relacionada -->
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="cerrarModalGeneral()">Cancelar</button>
                    <button type="button" class="btn btn-primary" onclick="guardarReserva()">Comprar</button>
                </div>
            </div>
        </div>
    </div>



@endsection
@yield('seccion-estilos')

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="{{ asset('/lib/jquery-ui/js/jquery-ui.js') }}" ></script>
<script src="{{ asset('/lib/datatables/js/jquery.dataTables.js') }}"></script>
<script src="{{ asset('/lib/datatables-responsive/js/dataTables.responsive.js') }}"></script>
<script src="{{ asset('/lib/select2/js/select2.min.js') }}" ></script>
<script src="{{ asset('/lib/moment/js/moment.js') }}" ></script>
<script src="https://cdn.datatables.net/colreorder/1.5.3/js/dataTables.colReorder.min.js"></script>
<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
<script src="{{ asset('/js/solicitudes/consulta_solicitudes.js') }}" ></script>
<script src="{{asset("/lib/select2/js/select2.full.min.js")}}"></script>
<script src="{{asset("/lib/jquery-toggles/js/toggles.min.js")}}"></script>
<script src="{{asset("/lib/jt.timepicker/js/jquery.timepicker.js")}}"></script>
<script src="{{asset("/lib/spectrum/js/spectrum.js")}}"></script>
<script src="{{asset("/lib/jquery.maskedinput/js/jquery.maskedinput.js")}}"></script>
<script src="{{asset("/lib/bootstrap-tagsinput/js/bootstrap-tagsinput.js")}}"></script>
<script src="{{asset("/js/slim.js")}}"></script>
<script src="{{asset('js/swiped-events.js')}}"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>



<script>


     document.addEventListener('DOMContentLoaded', function() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById('fecha_reserva').value = today;
    });

    function buscar() {
    $('#modal_loading').modal('show');

    var data = {
        fechasinicio: $("#fechasinicio").val(),
        fechasfinal: $("#fechasfinal").val(),
        numero: $("#numero").val(),
    };

    $.ajax({
        type: 'GET',
        url: 'http://localhost/prueba_programacion/public/obtener_solicitudes',
        data: data,
        success: function(response) {
            $('#resultados tbody').empty();

            if (response.length === 0) {
                var fila = `<tr><td colspan="7" class="text-center">Sin resultados</td></tr>`;
                $('#resultados tbody').append(fila);
            } else {
                response.forEach(actividad => {
                    console.log(actividad);
                    // Sumar el número de personas de todas las reservas de la actividad
                    let totalPersonas = 0;
                    if (actividad.reservas.length > 0) {
                        actividad.reservas.forEach(reserva => {
                            totalPersonas += reserva.numero_personas;
                        });
                    }


                    var fila = `<tr>
                        <td>${actividad.id}</td>
                        <td>${actividad.titulo}</td>

                        <td>${actividad.precio_por_persona}</td>
                        <td>${totalPersonas}</td> <!-- Mostrar el total de personas -->
                        <td>
                            <button type="button" class="btn btn-primary btn-sm btn-block mg-b-5" data-toggle="collapse" data-target="#demo" onclick="mostrar_modal_reservacion(${actividad.precio_por_persona}, ${actividad.id})">Comprar</button>
                            <button type="button" class="btn btn-primary btn-sm btn-block mg-b-5" data-toggle="collapse" data-target="#demo" onclick="mostrar_modal_detalle('${actividad.titulo}', ${actividad.id}, ${totalPersonas}, '${actividad.descripcion}',${actividad.reservas.length > 0 ? actividad.reservas[0].total : 0}, '${actividad.reservas.length > 0 ? actividad.reservas[0].fecha_reserva : 0}')">Ver Detalle</button>
                        </td>
                    </tr>`;

                    $('#resultados tbody').append(fila);

                    // Verificar si hay reservas y mostrarlas
                    if (actividad.reservas.length > 0) {
                        actividad.reservas.forEach(reserva => {
                            console.log(`Número de personas en reserva: ${reserva.numero_personas}`);
                        });
                    } else {
                        console.log("No hay reservas.");
                    }
                });
            }
        },
        error: function(error) {
            console.error('Error en la solicitud:', error);
        },
        complete: function() {
            setTimeout(function() {
                $('#modal_loading').modal('hide');
            }, 500);
        }
    });
}


    function mostrar_modal_reservacion(precio,id) {
        $('#id_reserva').val(id);
        $('#precio_por_persona').val(precio);
        $('#div_id').hide();
        $('#modal_reservas').modal('show');

        $('#numero_personas').on('input', function() {
                calcular_total(precio);
            });

        $('#precio_por_persona').on('input', function() {
            var nuevoPrecio = parseFloat($(this).val()) || 0;
            calcular_total(nuevoPrecio);
        });

    }



    function calcular_total(precio) {
        var numeroPersonas = parseInt($('#numero_personas').val()) || 0;
        var total = precio * numeroPersonas;
        $('#total').val(total.toFixed(2));
    }


    function mostrar_modal_detalle(titulo,id,numero_personas,descripcion,total,fecha_reservacion) {


        $('#titulo').text(titulo);
        $('#descripcion').text(descripcion);
        $('#fecha_reservacion').text(fecha_reservacion);
        $('#numero_personas2').text(numero_personas);
        $('#total2').text(parseFloat(total).toFixed(2));
        $('#modal_actividades_detalle').modal('show');

    }



    //Funcion para guardar el formulario en reservas

    function guardarReserva() {
      //  $('#modal_loading').modal('show');
        var data = {
            actividad_id: $("#id_reserva").val(),
            numero_personas: $("#numero_personas").val(),
            precio_por_persona: $("#precio_por_persona").val(),
            total: $("#total").val(),
            fecha_reserva: $("#fecha_reserva").val(),
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost/prueba_programacion/public/reservas',
            data: data,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(response) {
                console.log('Reserva agregada:', response);
                $('#modal_loading').modal('hide');
                $('#modal_reservas').modal('hide');
                Swal.fire({
                icon: 'success',
                title: 'Reserva agregada con éxito',
                text: 'Tu reserva ha sido completada correctamente.',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3085d6',
                });
            },
            error: function(error) {
                console.error('Error al agregar reserva:', error);

                $('#modal_loading').modal('hide');

                alert('Error al agregar la reserva');
            },
            complete: function() {

                $('#modal_loading').modal('hide');
            }
        });
    }

    function cerrarModalGeneral() {
    $('#modal_actividades_detalle').modal('hide');  // Cerrar el modal
    $('#modal_reservas').modal('hide');  // Cerrar el modal

}




</script>





