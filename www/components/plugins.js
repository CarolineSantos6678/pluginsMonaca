// This is a JavaScript file
$(document).on("click","#alerta", function(){

    function retorno(){
    }
    navigator.notification.alert("Concordo com termos", retorno,"Aviso","Concordo");
});
$(document).on("click","#confirm",function(){
    function  confirm(buttonIndex){
        if(buttonIndex == "1"){
            navigator.notification.alert("Escolheu a opção A");
}else{
    navigator.notification.alert("Escolheu a opção B");
}
    }
navigator.notification.confirm("Escolha A ou B",confirm,"Escolha:",['A','B']);
});
$(document).on("click","#beep", function(){
    navigator.notification.beep(4)
});
$(document).on("click","#vibrar", function(){
    navigator.vibrate( 1000 )
});