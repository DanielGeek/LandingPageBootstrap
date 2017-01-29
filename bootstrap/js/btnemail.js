$(function(){
    //Cuando le den click al boton
    $("#mc-embedded-subscribe").click(function(){
        
        //Qué contiene el formulario, si esta vacio... Quitar la class hideen y añadir la de show
        if($('#mce-EMAIL').val().trim() === ''){
            
            $('#alert-error').removeClass('hidden').addClass('show');
            
        } else {
            //EL CAMPO DE EMAIL NO ESTA VACIO y es correcto
            if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test($('#mce-EMAIL').val())){
                //ocultar msj de error
                $("#alert-error").removeClass('show').addClass('hidden');
                //mostrar msj exito
                $("#alert-exito").removeClass('hidden').addClass('show');
                //esconder el formulario
                $("#conocerlo, #mc-embedded-subscribe-form").removeClass('show').addClass('hidden');
                
            } else {
                //No está vacío pero es incorrecto la expresión regular
                $('#alert-error').removeClass('hidden').addClass('show');
            }
        }
    });
})