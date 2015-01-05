var five = require ('johnny-five'),
	placa = new five.Board(),
	led,
	estadoSwitch = false;

placa.on("ready", function(){
	console.log('Placa Lista');
	led = new five.Led(13);

	setInterval(switchLED, 200);

	function switchLED(){
		estadoSwitch = !estadoSwitch;

		if(estadoSwitch) led.on();
		else led.off();
	}
});

console.log("\n Esperando a que se conecte la placa...");
