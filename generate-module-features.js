const { LanguageCode } = require("speakmaster-module-builder");
const { Feature, ModuleFeaturesBuilder, Parameter, ParameterValue } = require("speakmaster-module-builder/features-builder");

const mfb = new ModuleFeaturesBuilder();

const moveMouse = new Feature("moveMouse", LanguageCode.EN_US)
	.addTranslation("Move Mouse", "Moves the mouse in the given direction", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Mover o Mouse", "Move o mouse na direção informada", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(
		new Parameter("direction")
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
			)
	);

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
	.addParameter(
		new Parameter("direction")
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
			)
	);

const stopMovingMouse = new Feature("stopMovingMouse", LanguageCode.EN_US)
	.addTranslation("Stop Moving Mouse", "Stop moving the mouse", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Parar de Mover o Mouse", "Para de mover o mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]);

const playAnimation = new Feature("playAnimation", LanguageCode.EN_US)
	.addTranslation("Play Mouse Animation", "Continuously move the mouse according to an animation", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Animar o Mouse", "Move o mouse continuamente de acordo com uma animação", [LanguageCode.PT_BR, LanguageCode.PT_PT])
	.addParameter(
		new Parameter("animation")
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

mfb.addFeature(moveMouse);
mfb.addFeature(increaseSpeed);
mfb.addFeature(decreaseSpeed);
mfb.addFeature(resetSpeed);
mfb.addFeature(setSpeed);
mfb.addFeature(startMovingMouse);
mfb.addFeature(stopMovingMouse);
mfb.addFeature(playAnimation);

mfb.generateJSON();
