const robot = require("robotjs");
const { sleep } = require("../sleep");

async function fixedPositionAnimation (state) {
	const { x, y } = robot.getMousePos();
	while (state.playingAnimation) {
		robot.moveMouse(x, y);
		await sleep(1);
	}
}

module.exports = { fixedPositionAnimation };
