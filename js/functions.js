//SIDEBAR

$(document).ready(function(){
  
  	if ( $(window).width() > 979 ) {
      $('#menu').removeClass('sb-slidebar sb-right sb-style-push');
    };

  $(window).resize(function(){

    if($(window).width() > 979){
      $('#menu').removeClass('sb-slidebar sb-right sb-style-push');
  	} else { 
  	$('#menu').addClass('sb-slidebar sb-right sb-style-push');
    };

  });
  
});

//SLIDDER

$(document).ready(function() {

	if($(window).width() > 480){
	    $('.pgwSlider').pgwSlider({
	    	displayControls: true,
	    	});

	} else {
		$('.pgwSlider').pgwSlider({
	    	displayList: false
	    	});
	};

});

//DATE PICKER

$(document).ready(function () {
    $(document).on('click', 'input[type=text]', function () {
        this.select();
    });
    $(document).on('click', 'input[type=date]', function () {
        this.select();
    });
});

$(document).ready(function($) {
    $("input[id='solo-ida']").click(function(){
        var remove = '';
        if ($(this).is(':checked')) {
            $("input[id='vuelta']").attr("disabled", true);
            $("input[id='vuelta']").val("");
        }
        else if ($(this).not(':checked')) {
            $("input[id='vuelta']").attr("disabled", false);
        }
    });
});

$(document).ready(function() {
    var now = new Date();
    var today =  ('0' + now.getDate()).slice(-2) + '/' + ('0' + (now.getMonth() + 1)).slice(-2) + '/' + now.getFullYear();
    $('#salida').val(today);
    $('#vuelta').val(today);
});

$(document).ready(function() {
    $( "#salida" ).datepicker({
        minDate: 0,
        maxDate: "+1Y",
        inline: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        onClose: function( selectedDate ) {
            $( "#vuelta" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#vuelta" ).datepicker({
        minDate: 0,
        maxDate: "+1Y",
        inline: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        onClose: function( selectedDate ) {
            $( "#salida" ).datepicker( "option", "maxDate", selectedDate );
        }
    });
});

// Traducción al español de Datepicker
$(function($){
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '&lt;&nbsp;Ant',
        nextText: 'Sig&nbsp;&gt;',
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
});

//FOOTER MOBILE

$(document).ready(function(){

    if ($(window).width() < 769) {
        $('footer li').click(function(){
            $(this).children('p').slideToggle();
        });
    }
})
