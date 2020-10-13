const { resolve } = require("path");
const dotenv = require("dotenv");

function process(config) {
  dotenv.config();

  console.log(JSON.stringify(process.env));

  for (const k in process.env) {
    if (config.permitted.indexOf(k) === -1) {
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

    if (!envkeyConfig.permitted || !envkeyConfig.permitted.length) {
      throw new Error(
        "'permitted' key required to specifiy vars allowlisted for client."
      );
    }

    process(config);
  });
};
