package com.uitest.steps;

import org.junit.Assert;

import com.uitest.pages.TestPage;
import com.uitest.utils.CommonMethods;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps extends CommonMethods {

	TestPage page = new TestPage();

	@When("I enter valid username and password")
	public void i_enter_valid_username_and_password() {
		sendText(page.userName, "standard_user");
		sendText(page.password, "secret_sauce");
	}

	@When("I click login button")
	public void i_click_login_button() {
		click(page.button);
	}

	@Then("I successfully loged in")
	public void i_successfully_loged_in() {
		boolean isDisplayed = page.productLabel.isDisplayed();
		Assert.assertTrue(isDisplayed);
	}

	@When("I entered invalid username and password")
	public void i_entered_invalid_username_and_password() {
		sendText(page.userName, "locked_out_user");
		sendText(page.password, "secret_sauce");
	}

	@Then("I see error message is dispalyed")
	public void i_see_error_message_is_dispalyed() {
		boolean isDisplayed = page.erroMessage.isDisplayed();
		Assert.assertTrue(isDisplayed);
	}

}
