const { LanguageCode } = require("speakmaster-module-builder");
const { NumberPreference, PreferenceType } = require("speakmaster-module-builder/preferences-builder");

const mouseSpeed = NumberPreference.create({
	identifier: "mouseSpeed",
	type: PreferenceType.INTEGER,
	min: 1,
	max: 15,
	defaultValue: 6,
	dynamicValue: true
})
	.addTranslation("Mouse Speed", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Velocidade do Mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]);

module.exports = { mouseSpeed };
