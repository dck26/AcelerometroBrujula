//brujula
var br = {
    watchID: null,
    satisfactorio: function(h){
        $('#brujula h2').text(h.magneticHeading);
    },
    error: function(err){
        alert('Error en Brújula: ' + err.code);
    },
    opc: { frecuency: 500},
    iniciar: function(){
        if(br.watchID == null)
            br.watchID = navigator.compass.watchHeading(br.satisfactorio, br.error, br.opc);
    },
    detener: function(){
        if(br.watchID){
            navigator.compass.clearWatch(br.watchID);
            br.watchID = null;
            $('#brujula h2').text('detenido');
        }
    }
};