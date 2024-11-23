let sustituciones = [];

$(document).ready( () => {
    cargarSustituciones();
    setTimeout(function () {
        $('#modal_loading').modal('hide');
    },600);

});

window.addEventListener("DOMContentLoaded", function(){
    
		// different configs for different screen sizes
		var compactView = {
			xy: {
				nav_height: 80
			},
			config: {
				header: {
					rows: [
                  { 
                     cols: [
                     "prev",
                     "date",
                     "next",
                     ]
                 },
                 { 
                     cols: [
                     "day",
                     "week",
                     "month",
                     "spacer",
                     "today"
                     ]
                 }
                 ]
             }
         },
         templates: {
            month_scale_date: scheduler.date.date_to_str("%D"),
            week_scale_date: scheduler.date.date_to_str("%D, %j"),
            event_bar_date: function(start,end,ev) {
               return "";
           }
           
       }
   };
   var fullView = {
     xy: {
        nav_height: 80
    },
    config: {
        header: [
        "day",
        "week",
        "month",
        "date",
        "prev",
        "today",
        "next"
        ]
    },
    templates: {
        month_scale_date: scheduler.date.date_to_str("%l"),
        week_scale_date: scheduler.date.date_to_str("%l, %F %j"),
        event_bar_date: function(start,end,ev) {
           return "• <b>"+scheduler.templates.event_date(start)+"</b> ";
       }
   }
};

var ugas_opts = [
{ "key" : "", "label":"Seleccione una opción",},
@isset($unidades['response'])
@foreach ($unidades['response'] as $unidad)
{ key: "{{$unidad['id_unidad_gestion']}}" ,  label:"{{$unidad['nombre_unidad']}}"},
@endforeach
@endisset
];


var parent_onchange = function( event ) {

    var arrGuardias = [];

    $.ajax({
        url:'/public/obtener_usuarios_sustitucion',
        type: "POST",
        async: true,
        data: {id_unidad_gestion:this.value},
        success : function(response){

            arrGuardias.push({
                "key":"",
                "label":"Seleccione una opción",
            });                

            response.response.sort((a, b) => a.nombres.localeCompare(b.nombres))

            $(response.response).each(function(index, incidencia) {

                var datosGuardia = "";
                const {id_usuario, usuario, nombres, apellido_paterno, apellido_materno } = incidencia;

                datosGuardia = {
                    "key":id_usuario,
                    "label":nombres+' '+'('+usuario+')'
                }
                arrGuardias.push(datosGuardia);
            });

            new_child_options = arrGuardias;
            update_select_options(scheduler.formSection('Usuario').control, new_child_options);
            update_select_options(scheduler.formSection('Reemplazo').control, new_child_options);

        }
    });

			//update_select_options(scheduler.serverList('projectos').control, new_child_options);
		};


        var update_select_options = function(select, options) { // helper function
         select.options.length = 0;
         for (var i=0; i<options.length; i++) {
            var option = options[i];
            select[i] = new Option(option.label, option.key);
        }
    };


    function resetConfig(){
     var settings;
     if(window.innerWidth < 1000){
        settings = compactView;
    }else{
        settings = fullView;
        
    }
    scheduler.utils.mixin(scheduler.config, settings.config, true);
    scheduler.utils.mixin(scheduler.templates, settings.templates, true);
    scheduler.utils.mixin(scheduler.xy, settings.xy, true);
    return true;
}

scheduler.config.responsive_lightbox = true;
resetConfig();
scheduler.config.drag_move = false;
scheduler.attachEvent("onBeforeViewChange", resetConfig);
scheduler.attachEvent("onSchedulerResize", resetConfig);
scheduler.locale.labels.workweek_tab = false;
scheduler.locale.labels.decade_tab = false;

scheduler.config.lightbox.sections = [
{ name:"Unidad de Gestión", height:40, map_to:"id_unidad_gestion", type:"select", options:ugas_opts, onchange:parent_onchange },
{ name:"Usuario", height:40, map_to:"juez_titular", type:"select",options:scheduler.serverList("Usuario")},
{ name:"Reemplazo", height:40, map_to:"juez_sustituye", type:"select",options:scheduler.serverList("Reemplazo")},
{ name:"Motivo", height:200, map_to:"descripcion", type:"textarea" , focus:true},
{ name:"Periodo", height:72, type:"time", map_to:"auto"}
];


scheduler.init('scheduler_here',new Date(),"month");

		// scheduler.load("../common/events.json");

		// document.querySelector(".add_event_button").addEventListener("click", function(){
		// 	scheduler.addEventNow();
		// });
	});

scheduler.attachEvent("onEventSave",function(id,ev) {

    console.log(ev);

    if (!ev.id_unidad_gestion) {
        alert("Falta elegir la unidad");
        return false;   
    }

    if (!ev.juez_titular || ev.juez_titular == '' ) {
        alert("Falta elegir al usuario titular");
        return false;   
    }

    if (!ev.juez_sustituye || ev.juez_sustituye == '' ) {
        alert("Falta elegir al usuario que sustituye al titular");
        return false;   
    }

    if (!ev.descripcion) {
        alert("La descripcion no puede estar vacia");
        return false;   
    }


    
    const evento_existente = sustituciones.filter( evento => evento.id_sustitucion == id);
    var formatFunc = scheduler.date.date_to_str("%Y-%m-%d %H:%i:%s");
    var start_date = formatFunc(ev.start_date);
    var end_date = formatFunc(ev.end_date);

    const data = {
        id_usuario_titular: ev.juez_titular,
        id_usuario_sustituye: ev.juez_sustituye,
        id_unidad_gestion: ev.id_unidad_gestion,
        descripcion: ev.descripcion,
        fecha_ini: start_date,
        fecha_fin: end_date,
    };
    
    if( evento_existente.length ) {

        data.id_sustitucion = id;
        editaSustitucion( data );

    } else {
        
        registraSustitucion( data );

    }

    return true;

});

scheduler.attachEvent("onDblClick", function (id, ev){ return false; });

scheduler.attachEvent("onBeforeTaskDrag", function (id, ev){
    alert('hi');
    return false;
    $('.dhx_qi_big_icon.icon_details').attr('onclick', `pintaCampos(${id})`);
    $('.dhx_qi_big_icon.icon_delete').attr('onclick', `confirmaEliminacion(${id})`);
    
    return true;

})

scheduler.attachEvent("onClick", function (id, ev){
    
    $('.dhx_qi_big_icon.icon_details').attr('onclick', `pintaCampos(${id})`);
    $('.dhx_qi_big_icon.icon_delete').attr('onclick', `confirmaEliminacion(${id})`);
    
    
    
    return true;

});

function confirmaEliminacion( id ) {
    
    setTimeout( () => {
        $('.dhtmlx_popup_text').html( "La sustitución se eliminará definitivamente, ¿Desea continuar?");
        $('.dhtmlx_popup_button.dhtmlx_ok_button').attr('onclick', `eliminarSustitucion(${id})`);
        
        const btnOk = $('.dhtmlx_popup_controls').find('div')[1];
        const btnCancel = $('.dhtmlx_popup_controls').find('div')[3];

        $(btnOk).html('Aceptar')
        $(btnCancel).html('Cancelar');

    },100);
}

function eliminarSustitucion( id ) {

    const data = { 
        id_sustitucion: id,
        estatus: 0
    }

    editaSustitucion( data )

}

function cargarSustituciones() { 
    
    sustituciones = [];
    scheduler.clearAll();
    
    $.ajax({
        method: 'GET',
        url: '/public/obtener_sustituciones',
        data: {},
        success: function (response ) {
            if( response.status == 100 ) {

                sustituciones = response.response;

                $( response.response ).each( function( i, evento ) {
                    
                    const { id_sustitucion, fecha_inicio, fecha_fin, usuario_titular, nombre_usuario_titular, usuario_sustituye, nombre_usuario_sustituye, descripcion, nombre_unidad } = evento;

                    scheduler.addEvent({
                        id: id_sustitucion,
                        start_date: fecha_inicio,
                        end_date: fecha_fin,
                        text: "(" + usuario_titular + ")" + nombre_usuario_titular + " es sustituido por (" + usuario_sustituye + ") " + nombre_usuario_sustituye, 
                        descripcion: descripcion,
                        unidad: nombre_unidad,
                    });

                }); 

            }
        }
    });
}

function registraSustitucion( data ) {

    $('#modal_loading').modal('show');
    console.log('pasa a registrar');
    $.ajax({
        type:'POST',
        url:'/public/registrar_sustitucion',
        data:data,
        success:function(response){
            console.log('registrar_sustitucion')
            
            if(response.status==100){

                $('#datos-respuesta-solicitud').html(`${response.response }`);
                $('#modalSuccess').modal('show');
                
            }else {

                $('#messageError').html(`${response.message} `);
                $('#modalError').modal('show');
            }

            setTimeout( () => {
                $('#modal_loading').modal('hide');
            },600);

            cargarSustituciones();
        }
    });
}

function editaSustitucion( data ) {
    
    $('#modal_loading').modal('show');

    console.log('pasa a editar');
    $('#modal_loading').modal('show');
    
    $.ajax({
        type:'POST',
        url:'/public/modifica_agenda_sustitucion',
        data:data,
        success:function(response){
            
            if(response.status==100){

                $('#datos-respuesta-solicitud').html(`${response.response }`);
                $('#modalSuccess').modal('show');
                
            }else {

                $('#messageError').html(`${response.message} `);
                $('#modalError').modal('show');
            }

            setTimeout( () => {
                $('#modal_loading').modal('hide');
            },600);

            cargarSustituciones();
        }
    });

    setTimeout( () => {
        $('#modal_loading').modal('hide');
    },400);

}

function pintaCampos( id ) {

    const obj_evento = scheduler.getEvent(id),
    sustitucion_evento = sustituciones.filter( sustitucion => sustitucion.id_sustitucion == obj_evento.id );

    const { id_unidad_gestion, id_usuario_titular, id_usuario_sustituye} = sustitucion_evento[0];

    pintaUsuarios(id_unidad_gestion, id_usuario_titular, id_usuario_sustituye);

    setTimeout( () => {
        $('.dhx_delete_btn_set').attr('onclick', `confirmaEliminacion(${id})`);
    },2000);
    
}



function pintaUsuarios( id_unidad_gestion, id_titular = '', id_sustituye = '' ) {
    
    var arrGuardias = [];

    $.ajax({
        url:'/public/obtener_usuarios_sustitucion',
        type: "POST",
        async: true,
        data: {id_unidad_gestion:id_unidad_gestion},
        success : function(response){

            arrGuardias.push({
                "key":"",
                "label":"Seleccione una opción",
            });

            response.response.sort((a, b) => a.nombres.localeCompare(b.nombres))

            $(response.response).each(function(index, incidencia) {

                var datosGuardia = "";
                const {id_usuario, usuario, nombres, apellido_paterno, apellido_materno, estatus } = incidencia;

                datosGuardia = {
                    "key":id_usuario,
                    "label":nombres+' '+'('+usuario+')'
                }
                arrGuardias.push(datosGuardia);
            });

            new_child_options = arrGuardias;
            updateSelectOptions(scheduler.formSection('Usuario').control, new_child_options);
            updateSelectOptions(scheduler.formSection('Reemplazo').control, new_child_options);

            scheduler.formSection('Unidad de Gestión').setValue(id_unidad_gestion);
            scheduler.formSection('Usuario').setValue(id_titular);
            scheduler.formSection('Reemplazo').setValue(id_sustituye);

        }
    });

        //update_select_options(scheduler.serverList('projectos').control, new_child_options);
    };

    function updateSelectOptions(select, options) { // helper function
     select.options.length = 0;
     for (var i=0; i<options.length; i++) {
        var option = options[i];
        select[i] = new Option(option.label, option.key);
    }
};


var parent_onchange = function(event) {
    var arrGuardias=[];
    $.ajax({
        url:'/public/obtener_usuarios_sustitucion',
        type: "POST",
        async: true,
        data: {id_unidad_gestion:this.value},
        success : function(response){
            
            response.response.sort((a, b) => a.nombres.localeCompare(b.nombres))

            $(response.response).each(function(index, incidencia){
                var datosGuardia="";
                const {id_usuario,usuario,nombres,apellido_paterno,apellido_materno}=incidencia;

                datosGuardia={
                    "key":id_usuario,
                    "label":nombres+' '+'('+usuario+')'
                }
                arrGuardias.push(datosGuardia);
            });

            new_child_options=arrGuardias;
            update_select_options(scheduler.formSection('Usuario').control, new_child_options);
            update_select_options(scheduler.formSection('Reemplazo').control, new_child_options);


        }
    });

			//update_select_options(scheduler.serverList('projectos').control, new_child_options);
		};
      //  update_select_options(scheduler.serverList('Usuario').control, new_child_options);
       // scheduler.updateCollection("Usuario", update_select_options);

       scheduler.config.lightbox.sections=[
       { name:"Unidad de Gestión", height:40, map_to:"id_unidad_gestion", type:"select", options:ugas_opts,onchange:parent_onchange },
       { name:"Usuario2", height:40, map_to:"juez_titular", type:"select", options:scheduler.serverList("Usuario"),},
       { name:"Reemplazo", height:40, map_to:"juez_sustituye", type:"select",options:scheduler.serverList("Reemplazo"),},
       {name:"Motivo", height:200, map_to:"descripcion", type:"textarea" , focus:true},
       {name:"time", height:72, type:"time", map_to:"auto"}
       ];

                        //GUARDAR
                        scheduler.attachEvent("onEventSave",function(id,ev){

                           if (!ev.descripcion) {
                            alert("La descripcion no puede estar vacia");
                            return false;
                        }
               // return true;

               var formatFunc = scheduler.date.date_to_str("%Y-%m-%d %H:%i:%s");
               var start_date = formatFunc(ev.start_date);
               var end_date = formatFunc(ev.end_date);

               $.ajax({
                type:'POST',
                url:'/public/registrar_sustitucion',
                data:{
                    id_usuario_titular:ev.juez_titular,
                    id_usuario_sustituye:ev.juez_sustituye,
                    id_unidad_gestion:ev.id_unidad_gestion,
                    descripcion:ev.descripcion,
                    fecha_ini:start_date,
                    fecha_fin:end_date,
                },
                success:function(response){
                    console.log(response);

                    if(response.status==100){

                        $('#datos-respuesta-solicitud').html(`${response.response }`);

                        $('#modalSuccess').modal('show');
                        return true;

                    }else{
                        $('#datos-respuesta-solicitud-error').html(`${response.response} `);
                        $('#modalError').modal('show');
                        return false;
                    }
                }
            });
               return true;
           })

                        scheduler.templates.tooltip_text = function(start,end,ev){
                    /* 	var evento=scheduler.getEvent(ev.id);
                    console.log(evento); */
                    console.log(ev);
                    return  "<b>UGJ:</b> "+ev.unidad+
                    "<br/><b>Participantes:</b> "+ev.text+"<br/><b>Fecha de Inicio:</b> " +
                    scheduler.templates.tooltip_date_format(start)+
                    "<br/><b>Fecha Fin:</b> "+scheduler.templates.tooltip_date_format(end)+
                    "<br/><b>Descripción:</b> "+ev.descripcion;
                };


                        //MENSAJE
                        scheduler.locale.labels.confirm_deleting = "Seguro que deseas borrar este elemento?";

                        //ELIMINAR
                        scheduler.attachEvent('onBeforeEventDelete', function(id, ev) {
                          //  sched.endLightBox(true);
                          $.ajax({
                            type:'POST',
                            url:'/public/modifica_agenda_sustitucion',
                            data:{
                                id_sustitucion:id,
                                estatus:"0"
                            },
                            success:function(response){
                                if(response.status==100){
                                    $('#datos-respuesta-modifica').html(`${response.response ?? "Sin datos"}`);
                                    $('#modalSuccessModifica').modal('show');

                                    return true;
                                }else{
                                    $('#datos-respuesta-modifica-error').html(`${response.response ?? "Sin datos"}`);

                                    $('#modalErrorModifica').modal('show');
                                    return false;
                                }
                            }
                        });   return true;

                      });

                        scheduler.attachEvent("onEventChanged",function(event_id, event_object){
                            console.log(event_id);
                            console.log(event_object);
                            alert("MODIFICACION DE AGENDA EN DESARROLLO");
/*                                     scheduler.clearAll();
                                    scheduler.load("/events/records?ts=" + (new Date()).valueOf());
                                    */                                    return true;
                                });









                        $(function(){
                            'use strict';

     // Select2
     $('.select2').select2({
        minimumResultsForSearch: Infinity
    });

     $('.fc-datepicker').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
     $( ".fc-datepicker" ).datepicker( "option", "dd-mm-yy" );

     $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional['es']);
    $(function () {
        $("#fc-datepicker").datepicker();
    });

    //focus textfiled
    $('.form-layout .form-control').on('focusin', function(){
        $(this).closest('.form-group').addClass('form-group-active');
    });
    $('.form-layout .form-control').on('focusout', function(){
        $(this).closest('.form-group').removeClass('form-group-active');
    });








});


function limpiarCampos(){

    $('#title').val('');//text
}





function cerrar_modal(valor){
    $("#"+valor).modal('hide');
    $('body').removeClass('modal-open');

}

function guardarEvento(){

    guardar = document.getElementById('dhx_save_btn');

    guardar.addEventListener('click', function() {
      console.log("GUARDADO");
  });
}
