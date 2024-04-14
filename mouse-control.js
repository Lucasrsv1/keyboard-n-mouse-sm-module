const state = { speed: 10 };

// TODO: adicionar depois as funções startMovingMouse e stopMovingMouse para fazer movimentos continuos

/**
 * Registra a lista de funcionalidades disponíveis para controle do mouse
 * @param {import("speakmaster-module-connection").ModuleConnection} connection
 */
function registerMouseControl (connection) {
	connection.registerFeature("moveMouse", moveMouse);
	connection.registerFeature("increaseSpeed", increaseSpeed);
	connection.registerFeature("decreaseSpeed", decreaseSpeed);
	connection.registerFeature("resetSpeed", resetSpeed);
	connection.registerFeature("setSpeed", setSpeed);
}

function moveMouse ({ direction }) {
	// TODO: mover o mouse na direção desejada e velocidade atual
	return false;
}

function increaseSpeed () {
	state.speed += 5;
	console.log(">", state);
	return true;
}

function decreaseSpeed () {
	state.speed -= 5;
	return true;
}

function resetSpeed () {
	state.speed = 10;
	return true;
}

function setSpeed ({ speed }) {
	switch (speed) {
		case "VERY_SLOW":
			state.speed = 1;
			break;
		case "SLOW":
			state.speed = 5;
			break;
		case "NORMAL":
			state.speed = 10;
			break;
		case "FAST":
			state.speed = 20;
			break;
		case "VERY_FAST":
			state.speed = 30;
			break;
		default:
			return [
				{ description: "Very Slow", value: { speed: "VERY_SLOW" } },
				{ description: "Slow", value: { speed: "SLOW" } },
				{ description: "Normal", value: { speed: "NORMAL" } },
				{ description: "Fast", value: { speed: "FAST" } },
				{ description: "Very Fast", value: { speed: "VERY_FAST" } }
			];
	}

	return true;
}

module.exports = { registerMouseControl };
