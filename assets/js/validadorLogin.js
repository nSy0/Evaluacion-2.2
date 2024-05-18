//validacion login

var expr = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

$(Document).ready(function(){
    $("#enviar").click(function(){

        var correo = $("$idcorreo").val();
        var password = $("$idpassword").val();
        
        if(password == ""){
            $("#errorPassword").fadeIn();
            return false;
        }else{
            $("#errorMail").fadeOut();
            if(correo == "" || expr.test(correo)){
                $("#errorMail").fadeIn();
                return false;
            }
        }
    });
});