![](https://cdn.auth0.com/resources/oss-source-large-2x.png)

# Parcel Plugin EnvVar Allowlist

A plugin for the [Parcel](https://parceljs.org/) bundler to subsitute environment variables based on an explicit allow list of keys in [vanilla javascript](http://vanilla-js.com/) files.

## Install

From [npm](https://npmjs.org):

```sh
npm install auth0/parcel-plugin-envvar-allowlist
```
## Configuration
This plugin will load a config file located in the root directory of your project named `envvar.config.js`.

The config file must export and object with and explicit allowed list of environment variable keys.

```
module.exports = {
  allowed: [
    "DOMAIN",
    "CLIENT_ID"
  ]
}
```
## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

For auth0 related questions/support please use the [Support Center](https://support.auth0.com).

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
