// Configura variáveis de ambiente o mais cedo possível
require("dotenv").config();

// Configura estampa de tempo dos logs
require("console-stamp")(console, { format: ":date(yyyy-mm-dd HH:MM:ss.l).yellow :label" });

const { ModuleConnection } = require("speakmaster-module-connection");

const { registerMouseControl } = require("./mouse-control");

const connection = new ModuleConnection(process.env.API_KEY, process.env.API_SECRET, process.env.DEBUGGING === "true");
registerMouseControl(connection);
