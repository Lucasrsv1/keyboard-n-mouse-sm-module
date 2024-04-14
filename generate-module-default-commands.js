const { LanguageCode } = require("speakmaster-module-builder");
const { DefaultCommandsBuilder, Command, CommandParameter } = require("speakmaster-module-builder/default-commands-builder");

const dcb = new DefaultCommandsBuilder();

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command(
		"move mouse {DIRECTION (up, down, left, right)}",
		"moveMouse",
		new CommandParameter("direction").useRestrictedVariable("DIRECTION", ["UP", "DOWN", "LEFT", "RIGHT"])
	)
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command(
		"mover [o] mouse [(para, pra)] {DIREÇÃO (cima, baixo, esquerda, direita)}",
		"moveMouse",
		new CommandParameter("direction").useRestrictedVariable("DIREÇÃO", ["UP", "DOWN", "LEFT", "RIGHT"])
	)
);

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command("increase mouse (speed, velocity)", "increaseSpeed")
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command("(acelerar, aumentar velocidade [do]) mouse", "increaseSpeed")
);

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command("decrease mouse (speed, velocity)", "decreaseSpeed")
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command("(desacelerar, diminuir velocidade [do]) mouse", "decreaseSpeed")
);

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command("reset mouse (speed, velocity)", "resetSpeed")
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command("(resetar, reiniciar) velocidade [do] mouse", "resetSpeed")
);

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command(
		"set mouse (speed, velocity) to {SPEED (very slow, slow, normal, fast, very fast)}",
		"setSpeed",
		new CommandParameter("speed").useRestrictedVariable("SPEED", ["VERY_SLOW", "SLOW", "NORMAL", "FAST", "VERY_FAST"])
	)
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command(
		"(setar, definir) velocidade [do] mouse [para] {VELOCIDADE ((muito, bem) devagar, devagar, normal, rápido, (muito, bem) rápido)}",
		"setSpeed",
		new CommandParameter("speed").useRestrictedVariable("VELOCIDADE", ["VERY_SLOW", "SLOW", "NORMAL", "FAST", "VERY_FAST"])
	)
);

dcb.generateJSON();
