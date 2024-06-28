const { LanguageCode } = require("speakmaster-module-builder");
const { DefaultCommandsBuilder, Command, CommandParameter } = require("speakmaster-module-builder/default-commands-builder");

const dcb = new DefaultCommandsBuilder();

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command(
		"displace mouse [to] [the] {DIRECTION (up, down, left, right)}",
		"moveMouse",
		new CommandParameter("direction").useRestrictedVariable("DIRECTION", ["UP", "DOWN", "LEFT", "RIGHT"])
	)
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command(
		"deslocar [o] mouse [(para, pra)] {DIREÇÃO (cima, baixo, esquerda, direita)}",
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

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command(
		"(move, (start, keep) moving) [the] mouse [to] [the] {DIRECTION (up, down, left, right)}",
		"startMovingMouse",
		new CommandParameter("direction").useRestrictedVariable("DIRECTION", ["UP", "DOWN", "LEFT", "RIGHT"])
	)
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command(
		"mover [o] mouse [(para, pra)] {DIREÇÃO (cima, baixo, esquerda, direita)}",
		"startMovingMouse",
		new CommandParameter("direction").useRestrictedVariable("DIREÇÃO", ["UP", "DOWN", "LEFT", "RIGHT"])
	)
);

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command("(release, stop [moving]) [the] mouse", "stopMovingMouse")
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command("(liberar, parar [de mover]) [o] mouse", "stopMovingMouse")
);

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command(
		"[play] mouse animation {ANIMATION (infinity, circle, sine)}",
		"playAnimation",
		new CommandParameter("animation").useRestrictedVariable("ANIMATION", ["INFINITY", "CIRCLE", "SINE"])
	)
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command(
		"([tocar] animação, animar) [(do, o)] mouse {ANIMAÇÃO (infinito, círculo, seno)}",
		"playAnimation",
		new CommandParameter("animation").useRestrictedVariable("ANIMAÇÃO", ["INFINITY", "CIRCLE", "SINE"])
	)
);

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command(
		"shake mouse",
		"playAnimation",
		new CommandParameter("animation").useConstant("SHAKE")
	)
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command(
		"(sacudir, chacoalhar, tremer) mouse",
		"playAnimation",
		new CommandParameter("animation").useConstant("SHAKE")
	)
);

dcb.addCommand(
	[LanguageCode.EN_US, LanguageCode.EN_GB],
	new Command(
		"fix mouse [position]",
		"playAnimation",
		new CommandParameter("animation").useConstant("FIXED_POSITION")
	)
).addCommand(
	[LanguageCode.PT_BR, LanguageCode.PT_PT],
	new Command(
		"fixar [(o, [a] posição [do])] mouse",
		"playAnimation",
		new CommandParameter("animation").useConstant("FIXED_POSITION")
	)
);

dcb.generateJSON();
