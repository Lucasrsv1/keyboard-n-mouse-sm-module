const robot = require("robotjs");
const { sleep } = require("../../sleep");

async function circleAnimation (state) {
	const twoPI = Math.PI * 2.0;
	const screenSize = robot.getScreenSize();
	const centerX = screenSize.width / 2;
	const centerY = screenSize.height / 2;
	const radius = Math.min(centerX, centerY) * 0.5;

	while (state.playingAnimation) {
		for (let progress = 0; progress < screenSize.width && state.playingAnimation; progress += state.mouseSpeed) {
			const x = (radius * Math.cos(twoPI * (progress / screenSize.width))) + centerX;
			const y = (radius * Math.sin(twoPI * (progress / screenSize.width))) + centerY;
			robot.moveMouse(x, y);
			await sleep(1);
		}
	}
}

module.exports = { circleAnimation };
