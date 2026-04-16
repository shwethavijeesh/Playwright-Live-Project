//import {test:base} from "playwright/test";
const {test:base} = require('@playwright/test'); //renaming playwright default test to base
//const { use } = require('react');
const data = JSON.parse(JSON.stringify(require('../utils/testdata.json')))
const Loginscenarios = require('../pages/logincases.js');


exports.test = base.extend({ //base.extend creates a custom test setup , exports.test makes it resuable in other files
login:async({page},use)=>{ //defines a fixture named login, by using page parameter, playwright provides browser page, use- for defining a fixture
await page.goto("https://demoblaze.com/");
 const loginobj=new Loginscenarios(page);
 await loginobj.clickLogin()
 await loginobj.enterCredentials(data.username,data.password)
 await loginobj.validloginButton()
await use(page); // we can use this as test
}
})