module.exports = {
  packages: {
    'ng2-charts': {
      entryPoints: {
        '.': {
          override: {
            main: './bundles/ng2-charts.umd.js',
            module: './fesm2015/ng2-charts.js',
          },
          ignoreMissingDependencies: true,
        }
      }
    }
  }
};
