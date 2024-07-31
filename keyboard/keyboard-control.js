const robot = require("robotjs");
robot.setKeyboardDelay(10);

/**
 * Registra a lista de funcionalidades disponíveis para controle do teclado
 * @param {import("speakmaster-module-connection").ModuleConnection} connection
 */
function registerKeyboardControl (connection) {
	connection.registerFeature("type", type);
	connection.registerFeature("tapKey", tapKey);
	connection.registerFeature("tapKeys", tapKeys);
}

function tapKey ({ key, modifiers }) {
	try {
		if (modifiers)
			robot.keyTap(key.toLowerCase().replace(/ /g, "_"), modifiers.split(" "));
		else
			robot.keyTap(key.toLowerCase().replace(/ /g, "_"));

		return true;
	} catch (error) {
		console.error(error, { key, modifiers });
		return false;
	}
}

function tapKeys ({ keys }) {
	try {
		for (const key of keys.split(" "))
			robot.keyTap(key.toLowerCase());
	} catch (error) {
		console.error(error, { keys });
		return false;
	}

	return true;
}

function type ({ content }) {
	try {
		robot.typeString(content);
		return true;
	} catch (error) {
		console.error(error, { content });
		return false;
	}
}

module.exports = { registerKeyboardControl };
