const nightwatch = require('nightwatch');
const settings = require('../lib/settings.js');

module.exports = formData => {
  try {
    const settings = {
      globals: formData,
    };

    nightwatch.cli(function(argv) {
      argv.retries = settings.retriesOnError;
      const runner = nightwatch.CliRunner(argv);
      runner
        .setup(settings)
        .startWebDriver()
        .catch(err => { throw err; })
        .then(() => runner.runTests())
        .catch(err => {
            console.error(err);
            runner.processListener.setExitCode(10);
        })
        .then(() => runner.stopWebDriver())
        .catch(err => { console.error(err); });
    });
  } catch (err) {
      console.error(err);
  }
};
