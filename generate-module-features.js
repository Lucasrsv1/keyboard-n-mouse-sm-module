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
					.addTranslation("Pra Cima", "Move o mouse pra cima", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("DOWN")
					.addTranslation("Down", "Move mouse downwards", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Pra Baixo", "Move o mouse pra baixo", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("LEFT")
					.addTranslation("Left", "Move mouse leftwards", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Esquerda", "Move o mouse esquerda", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
				new ParameterValue("RIGHT")
					.addTranslation("Right", "Move mouse rightwards", [LanguageCode.EN_US, LanguageCode.EN_GB])
					.addTranslation("Direita", "Move o mouse direita", [LanguageCode.PT_BR, LanguageCode.PT_PT])
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
					.addTranslation("Rápido", "Move o mouse devagar", [LanguageCode.PT_BR, LanguageCode.PT_PT]),
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

mfb.addFeature(moveMouse);
mfb.addFeature(increaseSpeed);
mfb.addFeature(decreaseSpeed);
mfb.addFeature(resetSpeed);
mfb.addFeature(setSpeed);

mfb.generateJSON();
