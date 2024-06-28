const robot = require("robotjs");
const { sleep } = require("../../sleep");

async function sineAnimation (state) {
	const twoPI = Math.PI * 2.0;
	const screenSize = robot.getScreenSize();
	const height = (screenSize.height / 2) - 10;
	const width = screenSize.width;

	while (state.playingAnimation) {
		for (let x = 0; x < width && state.playingAnimation; x += state.mouseSpeed * 0.6) {
			const y = (height * Math.sin(twoPI * (x / width))) + height;
			robot.moveMouse(x, y);
			await sleep(1);
		}
	}
}

module.exports = { sineAnimation };
