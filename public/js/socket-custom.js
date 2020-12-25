var socket = io();
socket.on("connect", function () {
	console.log("Conectado al servidor");
});
//Escuchar sucesos
socket.on("disconnect", function () {
	console.log("Perdimos conexion con el servidor");
});

//Enviar informacion
socket.emit(
	"enviarMensaje",
	{
		usuario: "David",
		mensaje: "Hola Mundo",
	},
	function (resp) {
		console.log("Respuesta server:", resp);
	}
);

//Escuchar informacion
socket.on("enviarMensaje", (mensaje) => {
	console.log("servidor: ", mensaje);
});
