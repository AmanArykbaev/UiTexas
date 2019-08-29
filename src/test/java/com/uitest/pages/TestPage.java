package com.uitest.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.uitest.utils.BaseClass;

public class TestPage extends BaseClass {

	@FindBy(id = "user-name")
	public WebElement userName;

	@FindBy(id = "password")
	public WebElement password;

	@FindBy(css = "input.btn_action")
	public WebElement button;

	@FindBy(css = "div.product_label")
	public WebElement productLabel;
	
	@FindBy(css = "button.error-button")
	public WebElement erroMessage;

	public TestPage() {
		PageFactory.initElements(driver, this);
	}

}
