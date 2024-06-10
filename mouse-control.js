const robot = require("robotjs");

const { sineAnimation } = require("./mouse-animations/sine");
const { shakeAnimation } = require("./mouse-animations/shake");
const { circleAnimation } = require("./mouse-animations/circle");
const { fixedPositionAnimation } = require("./mouse-animations/fixed-position");
const { infinityAnimation } = require("./mouse-animations/infinity");

const { sleep } = require("./sleep");

const preferences = {
	mouseSpeed: {
		min: 1,
		max: 15,
		default: 6,
		value: 5
	}
};

const state = {
	get mouseDelay () {
		return preferences.mouseSpeed.max - preferences.mouseSpeed.value;
	},
	get mouseSpeed () {
		return 2 * preferences.mouseSpeed.value;
	},
	get mouseDisplacement () {
		return Math.round(100 * (preferences.mouseSpeed.value / preferences.mouseSpeed.max));
	},
	horizontalMovement: 0,
	verticalMovement: 0,
	playingAnimation: false
};

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
	connection.registerFeature("startMovingMouse", startMovingMouse);
	connection.registerFeature("stopMovingMouse", stopMovingMouse);
	connection.registerFeature("playAnimation", playAnimation);
}

function moveMouse ({ direction }) {
	const { x, y } = robot.getMousePos();
	switch (direction) {
		case "UP":
			robot.moveMouse(x, y - state.mouseDisplacement);
			break;
		case "DOWN":
			robot.moveMouse(x, y + state.mouseDisplacement);
			break;
		case "LEFT":
			robot.moveMouse(x - state.mouseDisplacement, y);
			break;
		case "RIGHT":
			robot.moveMouse(x + state.mouseDisplacement, y);
			break;
		default:
			return [
				{ description: "Up", value: { speed: "UP" } },
				{ description: "Down", value: { speed: "DOWN" } },
				{ description: "Left", value: { speed: "LEFT" } },
				{ description: "Right", value: { speed: "RIGHT" } }
			];
	}

	return true;
}

function increaseSpeed () {
	preferences.mouseSpeed.value = Math.min(preferences.mouseSpeed.max, preferences.mouseSpeed.value + 1);
	robot.setMouseDelay(state.mouseDelay);
	return true;
}

function decreaseSpeed () {
	preferences.mouseSpeed.value = Math.max(preferences.mouseSpeed.min, preferences.mouseSpeed.value - 1);
	robot.setMouseDelay(state.mouseDelay);
	return true;
}

function resetSpeed () {
	preferences.mouseSpeed.value = preferences.mouseSpeed.default;
	robot.setMouseDelay(state.mouseDelay);
	return true;
}

function setSpeed ({ speed }) {
	switch (speed) {
		case "VERY_SLOW":
			preferences.mouseSpeed.value = preferences.mouseSpeed.min;
			break;
		case "SLOW":
			preferences.mouseSpeed.value = Math.round((preferences.mouseSpeed.default - preferences.mouseSpeed.min) / 2) + preferences.mouseSpeed.min;
			break;
		case "NORMAL":
			preferences.mouseSpeed.value = preferences.mouseSpeed.default;
			break;
		case "FAST":
			preferences.mouseSpeed.value = Math.round((preferences.mouseSpeed.max - preferences.mouseSpeed.default) / 2) + preferences.mouseSpeed.default;
			break;
		case "VERY_FAST":
			preferences.mouseSpeed.value = preferences.mouseSpeed.max;
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

	robot.setMouseDelay(state.mouseDelay);
	return true;
}

function startMovingMouse ({ direction }) {
	state.playingAnimation = false;
	switch (direction) {
		case "UP":
			state.verticalMovement = -1;
			break;
		case "DOWN":
			state.verticalMovement = 1;
			break;
		case "LEFT":
			state.horizontalMovement = -1;
			break;
		case "RIGHT":
			state.horizontalMovement = 1;
			break;
		default:
			return [
				{ description: "Up", value: { speed: "UP" } },
				{ description: "Down", value: { speed: "DOWN" } },
				{ description: "Left", value: { speed: "LEFT" } },
				{ description: "Right", value: { speed: "RIGHT" } }
			];
	}

	return true;
}

function stopMovingMouse () {
	state.horizontalMovement = 0;
	state.verticalMovement = 0;
	state.playingAnimation = false;
	return true;
}

async function playAnimation ({ animation }) {
	stopMovingMouse();
	robot.setMouseDelay(state.mouseDelay);

	await sleep(100);
	state.playingAnimation = true;

	switch (animation) {
		case "INFINITY":
			infinityAnimation(state);
			break;
		case "FIXED_POSITION":
			fixedPositionAnimation(state);
			break;
		case "CIRCLE":
			circleAnimation(state);
			break;
		case "SHAKE":
			shakeAnimation(state);
			break;
		case "SINE":
			sineAnimation(state);
			break;
		default:
			return [
				{ description: "Infinity", value: { animation: "INFINITY" } },
				{ description: "Fixed Position", value: { animation: "FIXED_POSITION" } },
				{ description: "Circle", value: { animation: "CIRCLE" } },
				{ description: "Shake", value: { animation: "SHAKE" } },
				{ description: "Sine", value: { animation: "SINE" } }
			];
	}

	return true;
}

function _moveMouseContinuously () {
	if (state.horizontalMovement !== 0 || state.verticalMovement !== 0) {
		const { x, y } = robot.getMousePos();
		robot.moveMouse(x + (state.horizontalMovement * state.mouseSpeed), y + (state.verticalMovement * state.mouseSpeed));
		console.log(x + (state.horizontalMovement * state.mouseSpeed), y + (state.verticalMovement * state.mouseSpeed), preferences.mouseSpeed.value);
	}

	setTimeout(_moveMouseContinuously, 1000 / 35);
}

_moveMouseContinuously();

module.exports = { registerMouseControl };
