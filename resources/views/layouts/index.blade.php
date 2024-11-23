@extends('layouts.master')
@section('head-title')
  Actividades
@endsection
@section('cuerpo')

  <div id="page">
    <div id="contenido">

        </div><!-- slim-header -->
      </div>

      <div class="slim-mainpanel" style="max-width: 1650px; margin-left: auto;margin-right: auto;" id="contenidoS">
        <div class="pd-l-5 pd-r-5 pd-md-l-30 pd-md-r-30">
          <div class="slim-pageheader">
            @yield('contenido-pageheader')
          </div><!-- slim-pageheader -->
          <div class="manager-wrapper">
            <div class="manager-right" style="">
              @yield('contenido-principal')
            </div>

          </div>
        </div><!-- container -->
      </div><!-- slim-mainpanel -->
    </div>
  </div>
@endsection
@section('seccion-estilos')
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <link href="{{ asset('/lib/datatables/css/jquery.dataTables.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('/css/solicitudes/consulta_solicitudes.css') }}" rel="stylesheet">

    <style>
        .flex-container {
            display: flex;
            justify-content: center;

        }

        .flex-container>div {
            margin: 1px;
            padding: 1px;
            font-size: 16px;
        }
        .tipo_audiencia {
            min-width: 200px !important;
        }

        @media screen and (max-width: 600px) {}

        #accordion .card {
            border: none !important;
        }

        #accordion .card .card-header {
            width: 75px !important;
            border: 1px solid #dee2e6 !important;
        }

        #accordion .card .card-header a {
            padding: 10px !important;
        }

        #collapseSearchAdvance,
        #collapseSearchAdvance {
            border: 1px solid #eee !important;
            background: #f8f9fa;
        }

        #accordion a::before {
            top: 10px !important;
        }

        #modalAdjuntarDocumento .modal-dialog {
            height: 95%;
            min-width: 90%;
        }


        #modalAdjuntarDocumento .modal-body {
            height: 95%;
            min-width: 90%;
        }

        #modalAdjuntarDocumento .modal-content {
            height: 95%;
            min-width: 90%;
        }

        #documentoPDFrame {
            min-height: 100%;
            min-width: 100%;

        }

        #modal_flujo .modal-dialog {
            height: 95%;
            min-width: 90%;
        }


        #modal_flujo .modal-body {
            height: 95%;
            min-width: 90%;
        }

        #modal_flujo .modal-content {
            height: 95%;
            min-width: 90%;
        }

        table {
            width: calc(100% - 2px) !important;
            border-bottom: 1px solid #f0f2f7;
        }

        td,
        th {
            padding-left: 1px !important;
            padding-right: 3px !important;
            padding-top: 0px;
            padding-bottom: px !important;
            border-bottom: 1px solid #f0f2f7;
            max-width: 110px !important;
            position: relative;
        }

        span.select2-container.select2-container--default.select2-container--open {

            width: '100%';
        }

        .datepicker-container {
            z-index: 1110;
        }

        .abs-center {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }

        .iconify {
            display: inline-block;
            text-align: left;
            vertical-align: top;
        }

        .fecha {
            min-width: 111px !important;
        }

        .expediente {
            min-width: 80px !important;
        }

        .ref {
            min-width: 80px !important;

        }

        .id_solicitud {
            min-width: 165px !important;
        }

        .folio_solicitud {
            min-width: 130px !important;
        }

        .materia_destino {
            min-width: 120px !important;
        }

        .tipo_audiencia {
            min-width: 200px !important;
        }

        .semaforo {
            min-width: 50px !important;
            text-align: center;
            size: 20px;
            vertical-align: top;
        }

        .carpeta-investigacion {
            min-width: 250px !important;
        }

        .totales_tareas {
            min-width: 183px !important;
        }

        .fecha_registro {
            min-width: 180px !important;
        }

        .folio_carpeta {
            min-width: 130px !important;
        }

        .estatus_urgente {
            min-width: 100px !important;
        }

        .estatus_ {
            min-width: 160px !important;
        }

        .responsable_ {
            min-width: 160px !important;
        }

        .comentarios_ {
            min-width: 230px !important;
        }

        .horafecha_ {
            min-width: 160px !important;
        }

        .td-title {
            background-color: #f0f2f7 !important;
            min-width: 120px !important;
            border-color: #f0f2f7 !important;
            max-height: 5px !important;
            padding: 3px 5px 3px 5px !important;
        }

        .th-title {
            column-span: 100%;
            background-color: #f0f2f7 !important;
            min-width: 130px !important;
            border-color: #f0f2f7 !important;
            max-height: 5px !important;
            padding: 3px 0px 3px 5px !important;
            align: center !important;
        }

        .slim-navbar {
            z-index: 1000 !important;
        }

        table#datosolicitud tr td:nth-child(2) {
            padding-left: 5px !important;
        }

        .dep {
            min-width: 115px !important;
        }

        .concepto {
            min-width: 86px !important;
        }

        .importe {

            min-width: 80px !important;
        }

        .moneda {
            min-width: 100px !important;
        }

        .estatus {
            min-width: 80px !important;
        }

        .acciones {
            min-width: 200px !important;

        }

        .estado_solicitud {
            min-width: 110px !important;
        }

        td.acciones {
            font-size: 25px !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            display: inline-block;

        }

        td.acciones a {
            display: inline;
            margin-left: 20%;
            cursor: pointer;
            text-align: left;
        }

        td.acciones a:first-child {
            margin-left: 0;
            text-align: left;
        }

        .ul {
            list-style: none;
        }

        .depo {
            min-width: 80px !important;
        }

        table {

            width: calc(100% - 2px) !important;
        }

        table a:hover {
            font-weight: bold;
        }

        span.select2-container {
            width: '100%';
        }

        /* .active:after {
            content: "\2212";
        } */

        .accordion {
            /* background-color: #eee; */

            color: #444;
            cursor: pointer;
            padding: 10px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
            transition: 0.4s;
        }

        .active,
        .accordion:hover {
            /*  background-color: #ccc; */
        }


        .panel {

            padding: 0 18px;
            background-color: white;
            max-height: 0;
            overflow: hidden;
            transition: 0.2s ease-out;
        }

        .molde {
            width: 100%;
            height: 80px;
            padding: 0 4px;
            background: #fff;
        }

        .soli {
            width: 100%;
            padding: 2px 0;
            background: #dfe6ad;
            color: #757575;
            font-size: 0.82em;
            font-weight: bold;
            text-align: center;
        }

        .soli_e {
            font-size: 0.8em;
            color: #a9a9a9;
            padding-top: 10px;
            text-align: center;
            width: 100%;
        }

        .soli_fs {
            width: 100%;
            color: green;
            text-align: right;
            font-size: 0.61em;
            font-weight: bold;
            padding: 10px 0 0 5px;
        }

        .soli_fs span {
            color: #a9a9a9;
            font-size: 0.92em;
            margin: 0 1%;
        }

        td {
            padding: 0 !important;
            display: table-cell !important;
            vertical-align: middle !important;
        }

        .molde2 {
            width: 100%;
            height: 80px;
            padding: 0 10px;
        }

        .molde3 {
            width: 100%;
            height: 80px;
            padding: 10px;
        }

        .barra_l {
            border-left: 3px solid #848F33 !important;
            padding: 4px;
        }

        .barra_l ul {
            width: 100%;
            padding: 0;
            text-align: left;
            margin-left: 2%;
        }

        .barra_l ul li {
            list-style: none;
            margin-bottom: 4px;
        }

        .barra_l ul li ul li {
            list-style: none;
        }
        ::-webkit-scrollbar {
            height: 8px;
            width: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background: #D7DCE1;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #a8acaf;
        }
        ::-webkit-scrollbar-track {
            background: #fff
        }
  </style>
@endsection


<div id="modal_loading" class="modal fade" data-backdrop="static" data-keyboard="false" >
    <div class="modal-dialog" role="document" style="width: 100%;height: 50%; max-width: 300px;">
      <div class="modal-content tx-size-sm" id="modal_content-loading" style="height:0">
        <div class="modal-body" style="text-align:center">

          <div class="loadin" style="">
            <img src="{{asset('/images/spinner-of-dots.png')}}" alt="" width="150px">
            <div class="wrapper" style="margin-top: 50px">
              <div class="border">
                <div class="space">
                  <div class="loading">
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div><!-- modal-body -->
      </div><!-- modal-content -->
    </div><!-- modal-dialog -->
  </div><!-- modal -->


