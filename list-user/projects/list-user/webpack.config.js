const {
  withModuleFederationPlugin,
  share,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "list-user",

  exposes: {
    "./Module": "./projects/list-user/src/app/app.module.ts",
  },

  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/material": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    primeng: {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    rxjs: {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  }),
});