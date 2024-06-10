const robot = require("robotjs");
const { sleep } = require("../sleep");

async function infinityAnimation (state) {
	const screenSize = robot.getScreenSize();
	const centerX = screenSize.width / 2;
	const centerY = screenSize.height / 2;
	const radius = Math.min(centerX, centerY) * 2;

	while (state.playingAnimation) {
		for (let progress = 0; progress < screenSize.width && state.playingAnimation; progress += state.mouseSpeed * 0.5) {
			const t = 2 * Math.PI * (progress / screenSize.width);
			const scale = radius / (3 - Math.cos(2 * t));
			const x = scale * Math.cos(t);
			const y = scale * Math.sin(2 * t) / 2;
			robot.moveMouse(centerX + x, centerY + y);
			await sleep(1);
		}
	}
}

module.exports = { infinityAnimation };
