var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('Pérdimos conexion con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Abraham',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

// Escuchar Informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});