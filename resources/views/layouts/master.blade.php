<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html;charset=UTF-8">
    <meta name="theme-color" content="#282827e0 ">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('head-title')</title>
    <link href="{{ asset('/css/normalize.css') }}"  rel="stylesheet">
    <link href="{{ asset('/lib/font-awesome/css/font-awesome.css') }}"    rel="stylesheet">
    <link href="{{ asset('/lib/Ionicons/css/ionicons.css') }}" rel="stylesheet">
    <link href="{{ asset('/lib/SpinKit/css/spinkit.css') }}"   rel="stylesheet">


    <link id="headerSkin" rel="stylesheet" href="">

    <!-- vendor css -->
    <link href="{{asset("/lib/font-awesome/css/font-awesome.css")}}" rel="stylesheet">
    <link href="{{asset("/lib/Ionicons/css/ionicons.css")}}" rel="stylesheet">
    <link href="{{asset("/lib/select2/css/select2.min.css")}}" rel="stylesheet">
    <link href="{{asset("/lib/jt.timepicker/css/jquery.timepicker.css")}}" rel="stylesheet">
    <link href="{{asset("/lib/jquery-toggles/css/toggles-full.css")}}" rel="stylesheet">

    @yield('estilos')
    <!-- Slim CSS -->
    <link rel="stylesheet" href="{{asset("/css/slim.css")}}" rel="stylesheet">


    <style>
      .b-l-2{
        border-left:3px solid #282827e0 ;
        padding-left: 5px;
        margin-bottom: 5px;
      }
      .btn-primary{
        background: #282827e0  !important;
        border: 1px solid #282827e0 ;
      }
      .btn-primary:focus{
        box-shadow:0 0 0 0.2rem rgba(227, 234, 183,0.5);
      }
      .btn-contact-new{
        background: #282827e0  !important;
      }
      .slim-pagetitle{
        border-left: 4px solid #282827e0  !important;
      }
      .logged-user img {
        width: 50px;
        height: 50px;
        padding: 3px;
        border: 1px solid #727C2E !important;
        border-radius: 100%;
      }
      table .icon{
        background: #282827e0  !important;
        padding: 2px 5px;
        border-radius: 25%;
        color: #fff;
      }
      .icon.tx-danger, .icon.ion-calendar, .icon.tx-success{
        background: none !important;
      }
      .icon.ion-calendar{
        color:#495057;
      }
      .ckbox span:after{
        background-color: #282827e0  !important;
      }
      .select2-container--default .select2-results__option--highlighted[aria-selected]{
        background-color: #282827e0  !important;
      }
      li.ui-timepicker-selected, .ui-timepicker-list li:hover, .ui-timepicker-list .ui-timepicker-selected:hover{
        background-color: #282827e0  !important;
      }
      .toggle-light.primary .toggle-on.active{
        background: #282827e0  !important;
      }
      .toggle-light.primary .toggle-on.active + .toggle-blob{
        border: 3px solid #282827e0  !important;
      }
      .error{
        border: 1px solid red !important;
        position: relative;
        animation-name: error;
        animation-duration: 0.6s;
      }

      @keyframes error {

        5%  {left: 10px;}
        10% {left: 0px;}
        20% {left: 10px;}
        30% {left: 0px;}
        40% {left: 10px;}
        60% {left: 0px;}
        70% {left: 3px}
        80% {left: 6px;}
        90% {left: 3px}
        100% {left: 0px;}
      }

      table{
        width: calc(100% - 2px) !important;
      }
      table.dataTable tbody tr:nth-child(2n){
        background-color: #FCFCFC;
      }
      table.dataTable tbody td {
        word-break: break-word;
        vertical-align: top;
        white-space:normal;
      }
      .btn-outline-primary {
        color: #282827e0 ;
        background-color: transparent;
        background-image: none;
        border-color: #282827e0 ;
      }
      .btn-outline-primary:hover {
        color: #fff;
        background-color: #282827e0 ;
        border-color:  #282827e0 ;
      }
      .toggle-blob{
        z-index: 1 !important;
      }
      .ui-datepicker-year{
        min-width: 60px;
      }
      .manager-left{
        width: 227px !important;
      }
      .manager-right{
        width: 918px !important;
      }
      .rdiobox input[type='radio']:checked + span:before {
        border-color: transparent;
        background-color: #282827e0  !important;
      }
      .dia-inhabil a{
        background-color: #FDE7E7 !important;
      }
      .custom-cells{
        cursor: pointer;
      }
      span.select2{
        width: 100% !important;
      }
      ul.bandejas li a{
        height: 28px !important;
      }
      ul.bandejas li:first-child{
        margin-left: auto;
      }
      ul.bandejas li:last-child{
        margin-right: auto;
      }
      a.nav-link2{
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: .7px;
        font-weight: 500;
        color: #656d75;
        height: 46px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-right-width: 0;
        top: auto;
        bottom: 100%;
        margin-top: 0;
        margin-bottom: 0.025rem;
      }
      .slim-header-right .dropdown-c .nav-link .icon{
        color: #282827e0 ;
      }
      .slim-navbar .nav-item:last-child .nav-link2 {
          border-right-width: 1px;
      }
      .activo{
        border:1px solid #282827e0  !important;
      }
      .reloj_vencido{
        color: red;
      }
      .f-mayus::first-letter{
        text-transform: uppercase;
      }
      div.icono{
        background: #282827e0 ;
        height: 25px;
        width: 25px;
        display: inline-block;
        text-align: center;
        border-radius: 25%;
      }
      div.icono a{
        height: 100%;
        width: 100%;
      }
      div.icono i{
        color: #FFF;
        font-size: 13px;
        padding-top: 5px;
      }
      div.icono.danger{
        background: #cc3300;
      }
      div.icono.warning{
        background:	#ffcc00;
      }
      div.warning-alert{
        height: 100px;
        width: 100px;
        border: 2px solid #ffcc00;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        font-size: 65px;
        color: #ffcc00;
        border-radius: 50%;
        margin-bottom: 28px;
        background-color:none !important;
      }
      .flex-container > div{
        padding: 0 !important;
      }

      .pagination-wrapper{
        height: 50px !important;
      }
      #modal_loading{
        z-index: 1150;
      }
      @media only screen and (max-width: 1199px){
        .manager-right{
          width: 100% !important;
        }
      }
      @media only screen and (max-width: 600px){
        #ui-datepicker-div{
          top: 200.5px !important;
        }
      }

        #notificacion_flotante{
          width: 15%;
          height: auto;
          border-radius: 10px;
          position: fixed;
          top: 4%;
          right: 1%;
          color: #fff;
        }
        .header_not{
          border: 1px solid #ccc;
          border-radius: 7px 7px 0px 0px;
          background: #282827e0  !important;
          display: flex;
          justify-content: space-between;
        }
        .image{
          width: 50%;
          padding: 1px;
          font-weight: bold;
          font-size: 0.9em;
        }
        .image img{
          width: 15px;
          height: 15px;
          margin:  0 3%;
        }
        .buttons{
          width: 7%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .closes{
          text-align: center;
          text-align: center;
          font-size: 0.8em;
          font-weight: bold;
          cursor: pointer;
        }
        .closes:hover{
          background: rgba(255, 255, 255, 0.1);
        }
        .closes:active{
          transform: scale(0.95);
        }
        .body_not{
          border: 1px solid #ccc;
          border-radius: 0px 0px 7px 7px;
          height: auto;
          color: rgb(104, 104, 104);
          background: #fff;
        }
        .body_not ul{
          padding: 0;
          font-size: 0.84em;
          font-weight: bold;
          color: #aaa;
        }
        .body_not ul li{
          list-style: none;
          width: 100%;
          text-align: center;
          padding-top: 4px;
          width: 270px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 4px;
        }


        .cant{
          background: red;
          width: 14px;
          height: 14px;
          font-size: 0.6em;
          text-align: center;
          position: absolute;
          border-radius: 50%;
          top: 5px;
          right: 6px;
        }




    </style>


  </head>
  <body>
    <div id="app">
      @yield('content')
    </div>




      @yield('cuerpo')


    {{-- / Codigo para chat tidio --}}
  </body>
</html>
