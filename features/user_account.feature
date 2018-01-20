Feature: User account
  As user I should be able to sign in and sign up

  Background:
    Given I am on "Home Page" page
    Then Page title should be "Cameo - Video Editor & Movie Maker for iOS"

  Scenario: Login
    When I click on "Login"
    When I wait until element "Form in Sign" is visible
    When I type "qwerty12345678910@tut.by" in "Email in Sign"
    When I type "1234test" in "Login Password in Sign"
    When I click on "Sign By Email in Sign"
    When I wait until element "Profile" is visible
    When I click on "Profile"
    Then I should be on "User Page" page
    Then Page title should be "Test on Vimeo"
    When I move mouse to "Profile"
    When I wait until element "Logout in Profile Menu" is visible
    When I move mouse to "Logout in Profile Menu"
    When I click on "Logout in Profile Menu"
    Then Page title should be "Vimeo | The high-quality home for video hosting and watching"

  Scenario: Registration
    When I click on "Join"
    When I wait until element "Form in Sign" is visible
    When I type "ForDeleting" in "Name in Sign"
    When I type "qwerty@tut.by" in "Email in Sign"
    When I type "1234test" in "Join Password in Sign"
    When I click on "Sign By Email in Sign"
    When I wait browser title contains "Vimeo"
    Then I should be on "SignUp Page" page
    When I wait until element "No thanks" is visible
    When I click on "No thanks"
    When I move mouse to "Profile"
    When I wait until element "Settings in Profile Menu" is visible
    When I move mouse to "Settings in Profile Menu"
    When I click on "Settings in Profile Menu"
    Then I should be on "Settings Page" page
    When I wait until element "Delete Account" is visible
    When I click on "Delete Account"
    When I wait browser title contains "We'll miss you"
    Then I should be on "DeletingAcc Page" page
    When I type "1234test" in "Password"
    When I click on "Delete Account"
    Then Page title should be "We'll miss you : ("