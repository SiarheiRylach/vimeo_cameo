Feature: Download page
  I want be able to click download and get info about app

  Background:
    Given I am on "Home Page" page
    Then Page title should be "Cameo - Video Editor & Movie Maker for iOS"

  Scenario: Download page validation details
    When I wait until element "Download" is visible
    And I click on "Download"
    And I wait browser title contains "Cameo"
    Then Page title should be "Cameo - Video Editor and Movie Maker on the App Store"
    And I should be on "Download Page" page
    And Text of element "Seller" should be "Vimeo"
    And Text of element "Size" should be "120.2 MB"
    And Text of element "Category" should be "Photo & Video"
    And Text of element "Compatibility" should be "Requires iOS 8.0 or later. Compatible with iPhone, iPad, and iPod touch."
    And Text of element "Languages" should be "English, Spanish"
    And Text of element "Age Rating" should be "Rated 4+"
    And Text of element "Copyright" should be "© 2016 Vimeo, Inc."
    And Text of element "Price" should be "Free"
    And Text of element "Version" should be "Version 2.3.1"

