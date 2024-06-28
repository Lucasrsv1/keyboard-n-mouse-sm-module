const { LanguageCode } = require("speakmaster-module-builder");
const { ModulePreferencesBuilder, PreferenceGroup, EMPTY_PREFERENCE_SLOT } = require("speakmaster-module-builder/preferences-builder");

const { mouseSpeed } = require("../preferences");

const mouseSettings = new PreferenceGroup()
	.addPreferenceRow(mouseSpeed, EMPTY_PREFERENCE_SLOT)
	.addTranslation("Mouse Settings", [LanguageCode.EN_US, LanguageCode.EN_GB])
	.addTranslation("Configurações do Mouse", [LanguageCode.PT_BR, LanguageCode.PT_PT]);

new ModulePreferencesBuilder()
	.addPreferenceGroup(mouseSettings)
	.generateJSON();
