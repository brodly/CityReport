const services = require('../lib/serviceList.js');

module.exports = {
  services,
  'submit' : function (browser) {
    const services = this.services;

    const {
      location: loc,
      serviceType,
      requestType,
      serviceLocation,
      fname,
      lname,
      email,
      phone,
      desc,
    } = browser.globals;

    const step1 = services[requestType].select;
    const step2 = services[requestType][serviceType];
    const step3 = services[requestType].location[serviceLocation];

    browser
      .url('https://myla311.lacity.org/portal/faces/home/service/create-sr')
      .waitForElementVisible('body', 5000)
      .click('id', step1)
      .pause(1000)
      .click('id', step2)
      .pause(1000)
      .click('.blueButton.commonButton.af_commandLink')
      .pause(5000)
      .waitForElementVisible('body', 5000)
      .execute(function(loc){ document.getElementById('pt1:r1:0:r1:0:r1:1:it5::content').value = loc }, [loc])
      .pause(1000)
      .click('a[title="Verify Location"]')
      .pause(2000)
      .execute(function(email){ document.getElementById('pt1:r1:0:r1:0:r1:1:it1::content').value = email }, [email])
      .execute(function(fname){ document.getElementById('pt1:r1:0:r1:0:r1:1:it2::content').value = fname }, [fname])
      .execute(function(lname){ document.getElementById('pt1:r1:0:r1:0:r1:1:it3::content').value = lname }, [lname])
      .execute(function(phone){ document.getElementById('pt1:r1:0:r1:0:r1:1:it4::content').value = phone }, [phone])
      .pause(1000)
      .click('a[title="Next"]')
      .pause(5000)
      .waitForElementVisible('body', 5000)
      .click('id', step3)
      .pause(1000)
      .click('a[title="Next Button"]')
      .pause(5000)
      .waitForElementVisible('body', 6000)
      .execute(function(desc){ document.getElementById('pt1:r1:0:r1:0:r1:3:it1::content').value = desc }, [desc])
      .click('a[title="Next button"]')
      .pause(5000)
      .end();
  }
};
