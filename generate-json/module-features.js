const { LanguageCode } = require("speakmaster-module-builder");
const { Feature, ModuleFeaturesBuilder, Parameter, ParameterValue } = require("speakmaster-module-builder/features-builder");

const mfb = new ModuleFeaturesBuilder();

// ========== MOUSE CONTROL ==========

// Parâmetros reutilizados
const mouseButton = new Parameter("button")
	.addTranslation("Button", "Button of the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Botão", "Botão do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addAllowedValue(
		new ParameterValue("LEFT")
			.addTranslation("Left", "Left button", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Esquerdo", "Botão esquerdo do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
		new ParameterValue("RIGHT")
			.addTranslation("Right", "Right button", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Direito", "Botão direito do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
		new ParameterValue("MIDDLE")
			.addTranslation("Middle", "Middle button", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Meio", "Botão do meio do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	);

const mouseDirection = new Parameter("direction")
	.addTranslation("Direction", "Direction to move mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Direção", "Direção na qual o mouse irá mover", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addAllowedValue(
		new ParameterValue("UP")
			.addTranslation("Up", "Move mouse upwards", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Para Cima", "Move o mouse para cima", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
		new ParameterValue("DOWN")
			.addTranslation("Down", "Move mouse downwards", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Para Baixo", "Move o mouse para baixo", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
		new ParameterValue("LEFT")
			.addTranslation("Left", "Move mouse leftwards", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Esquerda", "Move o mouse para a esquerda", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
		new ParameterValue("RIGHT")
			.addTranslation("Right", "Move mouse rightwards", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Direita", "Move o mouse para a direita", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	);

// Funcionalidades
const moveMouse = new Feature("moveMouse", LanguageCode.EN_US)
	.addTranslation("Move Mouse", "Moves the mouse in the given direction", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Mover o Mouse", "Move o mouse na direção informada", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(mouseDirection);

const increaseSpeed = new Feature("increaseSpeed", LanguageCode.EN_US)
	.addTranslation("Increase Speed", "Increases the speed of the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Aumentar Velocidade", "Aumenta a velocidade do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]);

const decreaseSpeed = new Feature("decreaseSpeed", LanguageCode.EN_US)
	.addTranslation("Decrease Speed", "Decreases the speed of the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Diminuir Velocidade", "Diminui a velocidade do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]);

const resetSpeed = new Feature("resetSpeed", LanguageCode.EN_US)
	.addTranslation("Reset Speed", "Resets the speed of the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Reiniciar Velocidade", "Retorna a velocidade do mouse para o padrão", [LanguageCode.PT_BR, LanguageCode.PT_PT]);

const setSpeed = new Feature("setSpeed", LanguageCode.EN_US)
	.addTranslation("Set Speed", "Sets the speed of the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Definir Velocidade", "Define a velocidade do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(
		new Parameter("speed")
			.addTranslation("Speed", "Speed of the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Velocidade", "Velocidade do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT])
			.addAllowedValue(
				new ParameterValue("VERY_SLOW")
					.addTranslation("Very Slow", "Move mouse very slowly", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Muito Devagar", "Move o mouse bem devagar", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("SLOW")
					.addTranslation("Slow", "Move mouse slowly", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Devagar", "Move o mouse devagar", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("NORMAL")
					.addTranslation("Normal", "Move mouse at normal speed", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Normal", "Move o mouse na velocidade normal", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("FAST")
					.addTranslation("Fast", "Move mouse rapidly", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Rápido", "Move o mouse rápido", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("VERY_FAST")
					.addTranslation("Very Fast", "Move mouse very fast", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Muito Rápido", "Move o mouse muito rápido", [LanguageCode.PT_BR, LanguageCode.PT_PT])
			)
	);

const startMovingMouse = new Feature("startMovingMouse", LanguageCode.EN_US)
	.addTranslation("Move Mouse Continuously", "Continuously move the mouse in the given direction", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Mover o Mouse Continuamente", "Move o mouse continuamente na direção informada", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(mouseDirection);

const stopMovingMouse = new Feature("stopMovingMouse", LanguageCode.EN_US)
	.addTranslation("Stop Moving Mouse", "Stop moving the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Parar de Mover o Mouse", "Para de mover o mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]);

const playAnimation = new Feature("playAnimation", LanguageCode.EN_US)
	.addTranslation("Play Mouse Animation", "Continuously move the mouse according to an animation", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Animar o Mouse", "Move o mouse continuamente de acordo com uma animação", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(
		new Parameter("animation", false, true)
			.addTranslation("Animation", "The animation to be performed", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Animação", "A animação a ser executada", [LanguageCode.PT_BR, LanguageCode.PT_PT])
			.addAllowedValue(
				new ParameterValue("INFINITY")
					.addTranslation("Infinity", "Move mouse in an infinity shape", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Infinito", "Move o mouse no formato do símbolo de infinito", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("FIXED_POSITION")
					.addTranslation("Fixed Position", "Keeps the mouse in a fixed position", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Posição Fixa", "Mantém o mouse em uma posição fixa", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("CIRCLE")
					.addTranslation("Circle", "Move mouse in the shape of a circle", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Círculo", "Move o mouse na forma de um círculo", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("SHAKE")
					.addTranslation("Shake", "Keeps shaking the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Chacoalhar", "Fica chacoalhando o mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("SINE")
					.addTranslation("Sine", "Move mouse in a sine wave", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Seno", "Move o mouse na forma de uma onda senoidal", [LanguageCode.PT_BR, LanguageCode.PT_PT])
			)
	);

const mouseClick = new Feature("mouseClick", LanguageCode.EN_US)
	.addTranslation("Mouse Click", "Click a button of the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Clique o Mouse", "Clica um botão do mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(mouseButton);

const mouseDoubleClick = new Feature("mouseDoubleClick", LanguageCode.EN_US)
	.addTranslation("Mouse Double Click", "Double click a button of the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Clique Duas Vezes o Mouse", "Clica um botão do mouse duas vezes", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(mouseButton);

mfb.addFeature(moveMouse)
	.addFeature(increaseSpeed)
	.addFeature(decreaseSpeed)
	.addFeature(resetSpeed)
	.addFeature(setSpeed)
	.addFeature(startMovingMouse)
	.addFeature(stopMovingMouse)
	.addFeature(playAnimation)
	.addFeature(mouseClick)
	.addFeature(mouseDoubleClick);

// ========== KEYBOARD CONTROL ==========

const type = new Feature("type", LanguageCode.EN_US)
	.addTranslation("Type", "Type a given content", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Digitar", "Digita o conteúdo informado", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(
		new Parameter("content")
			.addTranslation("Content", "The content to be typed", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Conteúdo", "O conteúdo a ser digitado", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	);

const tapKey = new Feature("tapKey", LanguageCode.EN_US)
	.addTranslation("Tap Key", "Tap a specific key on the keyboard", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Pressionar Tecla", "Pressiona uma tecla específica do teclado", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(
		new Parameter("key")
			.addTranslation("Key", "The key to be tapped", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Tecla", "A tecla a ser pressionada", [LanguageCode.PT_BR, LanguageCode.PT_PT]),

		new Parameter("modifiers", true)
			.addTranslation("Modifiers", "The keyboard modifiers to be applied (e.g., Shift, Ctrl, Alt)", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Modificadores", "Os modificadores do teclado a serem aplicados (por exemplo, Shift, Ctrl, Alt)", [LanguageCode.PT_BR, LanguageCode.PT_PT])
			.addAllowedValue(
				new ParameterValue("shift")
					.addTranslation("Shift", "Press Shift key", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Shift", "Pressiona a tecla Shift", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("control")
					.addTranslation("Ctrl", "Press Ctrl key", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Ctrl", "Pressiona a tecla Ctrl", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("alt")
					.addTranslation("Alt", "Press Alt key", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Alt", "Pressiona a tecla Alt", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("command")
					.addTranslation("Command", "Press Command or Windows key", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Comando", "Pressiona a tecla Comando ou Windows", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("control shift")
					.addTranslation("Ctrl + Shift", "Press Ctrl + Shift keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Ctrl + Shift", "Pressiona as teclas Ctrl + Shift", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("control alt")
					.addTranslation("Ctrl + Alt", "Press Ctrl + Alt keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Ctrl + Alt", "Pressiona as teclas Ctrl + Alt", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("control command")
					.addTranslation("Ctrl + Command", "Press Ctrl + Command or Windows keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Ctrl + Comando", "Pressiona as teclas Ctrl + Comando ou Windows", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("shift alt")
					.addTranslation("Shift + Alt", "Press Shift + Alt keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Shift + Alt", "Pressiona as teclas Shift + Alt", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("shift command")
					.addTranslation("Shift + Command", "Press Shift + Command or Windows keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Shift + Comando", "Pressiona as teclas Shift + Comando ou Windows", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("alt command")
					.addTranslation("Alt + Command", "Press Alt + Command or Windows keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Alt + Comando", "Pressiona as teclas Alt + Comando ou Windows", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("control shift alt")
					.addTranslation("Ctrl + Shift + Alt", "Press Ctrl + Shift + Alt keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Ctrl + Shift + Alt", "Pressiona as teclas Ctrl + Shift + Alt", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("control shift command")
					.addTranslation("Ctrl + Shift + Command", "Press Ctrl + Shift + Command or Windows keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Ctrl + Shift + Comando", "Pressiona as teclas Ctrl + Shift + Comando ou Windows", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("control alt command")
					.addTranslation("Ctrl + Alt + Command", "Press Ctrl + Alt + Command or Windows keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Ctrl + Alt + Comando", "Pressiona as teclas Ctrl + Alt + Comando ou Windows", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("shift alt command")
					.addTranslation("Shift + Alt + Command", "Press Shift + Alt + Command or Windows keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Shift + Alt + Comando", "Pressiona as teclas Shift + Alt + Comando ou Windows", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("control shift alt command")
					.addTranslation("Ctrl + Shift + Alt + Command", "Press Ctrl + Shift + Alt + Command or Windows keys", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Ctrl + Shift + Alt + Comando", "Pressiona as teclas Ctrl + Shift + Alt + Comando ou Windows", [LanguageCode.PT_BR, LanguageCode.PT_PT])
			)
	);

const tapKeys = new Feature("tapKeys", LanguageCode.EN_US)
	.addTranslation("Tap Keys", "Tap multiple keys on the keyboard", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Pressionar Teclas", "Pressiona várias teclas do teclado", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(
		new Parameter("keys")
			.addTranslation("Keys", "The keys to be tapped separated by a space", [LanguageCode.EN_US, LanguageCode.EN_GB])
			.addTranslation("Teclas", "As teclas a serem pressionadas separadas por espaço", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	);

mfb.addFeature(type)
	.addFeature(tapKey)
	.addFeature(tapKeys)
	.generateJSON();
