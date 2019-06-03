const nightwatch = require('nightwatch');

module.exports = formData => {
  try {

    const settings = {
      globals: formData
    };

    nightwatch.cli(function(argv) {
      const runner = nightwatch.CliRunner(argv);
      runner
        .setup(settings)
        .startWebDriver()
        .catch(err => {
            console.error(err);
            throw err;
        })
        .then(() => { return runner.runTests(); })
        .catch(err => {
            console.error(err);
            runner.processListener.setExitCode(10);
        })
        .then(() => { return runner.stopWebDriver(); })
        .catch(err => { console.error(err); });
    });
  } catch (err) {
      console.error(err);
  }
};
