$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@texas"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.i_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully loged in",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.i_successfully_loged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@texas"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I entered invalid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.i_entered_invalid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see error message is dispalyed",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.i_see_error_message_is_dispalyed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});