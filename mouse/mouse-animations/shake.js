const robot = require("robotjs");
const { sleep } = require("../../sleep");

const SHAKE_AMPLITUDE = 10;

function random () {
	return ((Math.random() * 2) - 1) * SHAKE_AMPLITUDE;
}

async function shakeAnimation (state) {
	let { x, y } = robot.getMousePos();
	while (state.playingAnimation) {
		robot.moveMouse(x + random(), y + random());
		await sleep(1);

		const { x: newX, y: newY } = robot.getMousePos();
		if (Math.abs(newX - x) > SHAKE_AMPLITUDE * 2) x = newX;
		if (Math.abs(newY - y) > SHAKE_AMPLITUDE * 2) y = newY;
	}
}

module.exports = { shakeAnimation };
