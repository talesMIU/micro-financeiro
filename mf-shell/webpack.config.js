const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const mfConfig = withModuleFederationPlugin({
  name: 'mf-shell', // Nome único para o shell
  remotes: {
    "micro1": "http://localhost:4201/remoteEntry.js",
    "micro2": "http://localhost:4202/remoteEntry.js",    
  },
  shared: {
    ...shareAll({ 
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }),
    // Tratamento especial para dependências críticas
    '@angular/core': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    },
    '@angular/common': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }
  }
});

module.exports = {
  ...mfConfig,
  output: {
    publicPath: 'auto',
    uniqueName: 'mf-shell'
  }
};
