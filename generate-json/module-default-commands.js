const { LanguageCode } = require("speakmaster-module-builder");
const { DefaultCommandsBuilder, Command, CommandParameter } = require("speakmaster-module-builder/default-commands-builder");

const dcb = new DefaultCommandsBuilder();

// ========== MOUSE CONTROL ==========

dcb
	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"displace mouse [to] [the] {DIRECTION (up, down, left, right)}",
			"moveMouse",
			new CommandParameter("direction").useRestrictedVariable("DIRECTION", ["UP", "DOWN", "LEFT", "RIGHT"])
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"deslocar [o] mouse [(para, pra)] {DIREÇÃO (cima, baixo, ☺esquerda, [a] direita)}",
			"moveMouse",
			new CommandParameter("direction").useRestrictedVariable("DIREÇÃO", ["UP", "DOWN", "LEFT", "RIGHT"])
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command("increase mouse (speed, velocity)", "increaseSpeed")
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command("(acelerar, aumentar velocidade [do]) mouse", "increaseSpeed")
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command("decrease mouse (speed, velocity)", "decreaseSpeed")
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command("(desacelerar, diminuir velocidade [do]) mouse", "decreaseSpeed")
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command("reset mouse (speed, velocity)", "resetSpeed")
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command("(resetar, reiniciar) velocidade [do] mouse", "resetSpeed")
	)

	.addCommand(
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
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(move, (start, keep) moving) [the] mouse [to] [the] {DIRECTION (up, down, left, right)}",
			"startMovingMouse",
			new CommandParameter("direction").useRestrictedVariable("DIRECTION", ["UP", "DOWN", "LEFT", "RIGHT"])
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"mover [o] mouse [(para, pra)] {DIREÇÃO (cima, baixo, [a] esquerda, [a] direita)}",
			"startMovingMouse",
			new CommandParameter("direction").useRestrictedVariable("DIREÇÃO", ["UP", "DOWN", "LEFT", "RIGHT"])
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command("(release, stop [moving]) [the] mouse", "stopMovingMouse")
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command("(liberar, parar [de mover]) [o] mouse", "stopMovingMouse")
	)

	.addCommand(
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
	)

	.addCommand(
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
	)

	.addCommand(
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
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(click, mouse click)",
			"mouseClick",
			new CommandParameter("button").useConstant("LEFT")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(clicar, clique) [o] [mouse]",
			"mouseClick",
			new CommandParameter("button").useConstant("LEFT")
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"{BUTTON (left, right, middle)} [button] (click, mouse click)",
			"mouseClick",
			new CommandParameter("button").useRestrictedVariable("BUTTON", ["LEFT", "RIGHT", "MIDDLE"])
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(clicar, clique) [com] [o] botão {BOTÃO (esquerdo, direito, [do] meio)} [do mouse]",
			"mouseClick",
			new CommandParameter("button").useRestrictedVariable("BOTÃO", ["LEFT", "RIGHT", "MIDDLE"])
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"double (click, mouse click)",
			"mouseDoubleClick",
			new CommandParameter("button").useConstant("LEFT")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(clicar duas vezes, clique duplo, clique duas vezes) [o] [mouse]",
			"mouseDoubleClick",
			new CommandParameter("button").useConstant("LEFT")
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"{BUTTON (left, right, middle)} [button] double (click, mouse click)",
			"mouseDoubleClick",
			new CommandParameter("button").useRestrictedVariable("BUTTON", ["LEFT", "RIGHT", "MIDDLE"])
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(clicar duas vezes, clique duplo, clique duas vezes) [com] [o] botão {BOTÃO (esquerdo, direito, [do] meio)} [do mouse]",
			"mouseDoubleClick",
			new CommandParameter("button").useRestrictedVariable("BOTÃO", ["LEFT", "RIGHT", "MIDDLE"])
		)
	);

// ========== KEYBOARD CONTROL ==========

const tapKeyEnglishCmd =
`(tap, press) {
	MODIFIERS (
		shift, control, alt, (command, windows),
		control shift, control alt, control (command, windows), shift alt, shift (command, windows), alt (command, windows),
		control shift alt, control shift (command, windows), control alt (command, windows), shift alt (command, windows),
		control shift alt (command, windows)
	)
} {KEY}`;

const tapKeyPortugueseCmd =
`(pressione, pressionar, pressiona) {
	MODIFICADORES (
		shift, control, alt, (comando, windows),
		control shift, control alt, control (comando, windows), shift alt, shift (comando, windows), alt (comando, windows),
		control shift alt, control shift (comando, windows), control alt (comando, windows), shift alt (comando, windows),
		control shift alt (comando, windows)
	)
} {TECLA}`;

dcb
	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"type {CONTENT}",
			"type",
			new CommandParameter("content").useVariable("CONTENT")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(digite, digitar) {CONTEÚDO}",
			"type",
			new CommandParameter("content").useVariable("CONTEÚDO")
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			tapKeyEnglishCmd,
			"tapKey",
			[
				new CommandParameter("key").useVariable("KEY"),
				new CommandParameter("modifiers").useRestrictedVariable("MODIFIERS", [
					"shift", "control", "alt", "command",
					"control shift", "control alt", "control command", "shift alt", "shift command", "alt command",
					"control shift alt", "control shift command", "control alt command", "shift alt command",
					"control shift alt command"
				])
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			tapKeyPortugueseCmd,
			"tapKey",
			[
				new CommandParameter("key").useVariable("TECLA"),
				new CommandParameter("modifiers").useRestrictedVariable("MODIFICADORES", [
					"shift", "control", "alt", "command",
					"control shift", "control alt", "control command", "shift alt", "shift command", "alt command",
					"control shift alt", "control shift command", "control alt command", "shift alt command",
					"control shift alt command"
				])
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(tap, press) [the] key {KEY}",
			"tapKey",
			new CommandParameter("key").useVariable("KEY")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(pressione, pressionar, pressiona) [a] tecla {TECLA}",
			"tapKey",
			new CommandParameter("key").useVariable("TECLA")
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(tap, press) [the] keys {KEYS}",
			"tapKeys",
			new CommandParameter("keys").useVariable("KEYS")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(pressione, pressionar, pressiona) [as] teclas {TECLAS}",
			"tapKeys",
			new CommandParameter("keys").useVariable("TECLAS")
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(open, run) [the] task manager",
			"tapKey",
			[
				new CommandParameter("key").useConstant("escape"),
				new CommandParameter("modifiers").useConstant("control shift")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(abra, abrir, execute, executar) [o] gerenciador de tarefas",
			"tapKey",
			[
				new CommandParameter("key").useConstant("escape"),
				new CommandParameter("modifiers").useConstant("control shift")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"lock [the] computer",
			"tapKey",
			[
				new CommandParameter("key").useConstant("l"),
				new CommandParameter("modifiers").useConstant("command")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"bloquear [o] computador",
			"tapKey",
			[
				new CommandParameter("key").useConstant("l"),
				new CommandParameter("modifiers").useConstant("command")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(run, execute)",
			"tapKey",
			[
				new CommandParameter("key").useConstant("r"),
				new CommandParameter("modifiers").useConstant("command")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(execute, executar)",
			"tapKey",
			[
				new CommandParameter("key").useConstant("r"),
				new CommandParameter("modifiers").useConstant("command")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(open, run) [the] file (explorer, manager)",
			"tapKey",
			[
				new CommandParameter("key").useConstant("e"),
				new CommandParameter("modifiers").useConstant("command")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(abra, abrir, execute, executar) [o] (explorador, gerenciador) de arquivos",
			"tapKey",
			[
				new CommandParameter("key").useConstant("e"),
				new CommandParameter("modifiers").useConstant("command")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(erase, delete) {DIRECTION (next word, [(last, previous)] word)}",
			"tapKey",
			[
				new CommandParameter("key").useRestrictedVariable("DIRECTION", ["delete", "backspace"]),
				new CommandParameter("modifiers").useConstant("control")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(apagar, deletar) {DIREÇÃO (próxima palavra, [última] palavra)}",
			"tapKey",
			[
				new CommandParameter("key").useRestrictedVariable("DIREÇÃO", ["delete", "backspace"]),
				new CommandParameter("modifiers").useConstant("control")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"close [[the] window]",
			"tapKey",
			[
				new CommandParameter("key").useConstant("f4"),
				new CommandParameter("modifiers").useConstant("alt")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"fechar [[a] janela]",
			"tapKey",
			[
				new CommandParameter("key").useConstant("f4"),
				new CommandParameter("modifiers").useConstant("alt")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"copy",
			"tapKey",
			[
				new CommandParameter("key").useConstant("c"),
				new CommandParameter("modifiers").useConstant("control")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(copie, copiar)",
			"tapKey",
			[
				new CommandParameter("key").useConstant("c"),
				new CommandParameter("modifiers").useConstant("control")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"paste",
			"tapKey",
			[
				new CommandParameter("key").useConstant("v"),
				new CommandParameter("modifiers").useConstant("control")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(cole, colar)",
			"tapKey",
			[
				new CommandParameter("key").useConstant("v"),
				new CommandParameter("modifiers").useConstant("control")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"undo",
			"tapKey",
			[
				new CommandParameter("key").useConstant("z"),
				new CommandParameter("modifiers").useConstant("control")
			]
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"desfazer",
			"tapKey",
			[
				new CommandParameter("key").useConstant("z"),
				new CommandParameter("modifiers").useConstant("control")
			]
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"arrow {DIRECTION (up, down, left, right)}",
			"tapKey",
			new CommandParameter("key").useVariable("DIRECTION")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"seta (para, pra) {DIREÇÃO (cima, baixo, [a] esquerda, [a] direita)}",
			"tapKey",
			new CommandParameter("key").useRestrictedVariable("DIREÇÃO", ["up", "down", "left", "right"])
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"play [the] (music, song, audio)",
			"tapKey",
			new CommandParameter("key").useConstant("audio_play")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(toque, tocar) [a] (música, áudio)",
			"tapKey",
			new CommandParameter("key").useConstant("audio_play")
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"(pause, stop) [the] (music, song, audio)",
			"tapKey",
			new CommandParameter("key").useConstant("audio_pause")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(pausar, pause) [a] (música, áudio)",
			"tapKey",
			new CommandParameter("key").useConstant("audio_pause")
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"next (music, song, audio)",
			"tapKey",
			new CommandParameter("key").useConstant("audio_next")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"(próxima, avançar [(para, pra)]) (música, áudio)",
			"tapKey",
			new CommandParameter("key").useConstant("audio_next")
		)
	)

	.addCommand(
		[LanguageCode.EN_US, LanguageCode.EN_GB],
		new Command(
			"previous (music, song, audio)",
			"tapKey",
			new CommandParameter("key").useConstant("audio_prev")
		)
	).addCommand(
		[LanguageCode.PT_BR, LanguageCode.PT_PT],
		new Command(
			"[voltar [(para, pra, para o, pro)]] (música, áudio) anterior",
			"tapKey",
			new CommandParameter("key").useConstant("audio_prev")
		)
	);

dcb.generateJSON();
