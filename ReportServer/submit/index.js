const { pothole } = require('../lib/serviceList.js');

module.exports = {
  'submit' : function (browser) {

    const {
      location: loc,
      service,
      fname,
      lname,
      email,
      phone,
      desc,
    } = browser.globals;

    browser
      .url('https://myla311.lacity.org/portal/faces/home/service/create-sr')
      .waitForElementVisible('body', 6000)
      .elements('css selector', '.af_selectBooleanRadio_native-input', (result) => {
        const element = result.value[pothole.step1].ELEMENT;
        browser
          .pause(2000)
          .elementIdClick(element)
          .pause(2000)
          .elements('css selector', '.af_selectBooleanRadio_native-input', (result) => {
            const element = result.value[pothole.step2].ELEMENT;
            browser
              .elementIdClick(element)
              .pause(1000)
              .click('.blueButton.commonButton.af_commandLink')

          })
      })
      .pause(5000)
      .waitForElementVisible('body', 6000)
      .execute(function(loc){
        document.getElementById('pt1:r1:0:r1:0:r1:1:it5::content').value = loc;
      }, [loc])
      .click('a[title="Verify Location"]')
      .pause(2000)
      .execute(function(email){ document.getElementById('pt1:r1:0:r1:0:r1:1:it1::content').value = email }, [email])
      .execute(function(fname){ document.getElementById('pt1:r1:0:r1:0:r1:1:it2::content').value = fname }, [fname])
      .execute(function(lname){ document.getElementById('pt1:r1:0:r1:0:r1:1:it3::content').value = lname }, [lname])
      .execute(function(phone){ document.getElementById('pt1:r1:0:r1:0:r1:1:it4::content').value = phone }, [phone])
      .click('a[title="Next"]')
      .pause(5000)
      .waitForElementVisible('body', 6000)
      .elements('css selector', '.af_selectOneRadio_native-input', (result) => {
        const element = result.value[pothole.step3].ELEMENT;
        browser
          .elementIdClick(element)
          .pause(1000)
      })
      .click('a[title="Next Button"]')
      .pause(5000)
      .waitForElementVisible('body', 6000)
      .execute(function(desc){ document.getElementById('pt1:r1:0:r1:0:r1:3:it1::content').value = desc }, [desc])
      .click('a[title="Next button"]')
      .pause(5000)
      .end();
  }
};
