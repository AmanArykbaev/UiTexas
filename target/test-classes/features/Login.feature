#Author: aman.arykbaev.t@gmail.com
Feature: Login

  @texas
  Scenario: Valid login
    When I enter valid username and password
    And I click login button
    Then I successfully loged in

  @texas
  Scenario: Invalid Login
    When I entered invalid username and password
    And I click login button
    Then I see error message is dispalyed
