const { resolve } = require("path");
const dotenv = require("dotenv");

function process(config) {
  dotenv.config();

  console.log(JSON.stringify(process.env));

  for (const k in process.env) {
    if (config.allowed.indexOf(k) === -1) {
      console.warn(`${k} is not in the allow list and is being removed.`);
      delete process.env[k];
    }
  }
}

module.exports = function parcelEnvVarAllowlist(bundler) {
  bundler.on("buildStart", (entryPoints) => {
    const configPath = resolve(process.cwd(), "envvar.config.js");

    let config = null;
    try {
      config = require(configPath);
    } catch (e) {
      console.error(
        "A envvar.config.js file is required when using envvar allowlist with Parcel"
      );
      process.exit(1);
    }

    if (!config.allowed || !config.allowed.length) {
      throw new Error(
        "'allowed' key required to specifiy vars allowlisted for client."
      );
    }

    process(config);
  });
};
