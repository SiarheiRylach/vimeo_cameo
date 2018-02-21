Feature: Main page
  I want to be able scroll and see the main elements on the screen

  Background:
    Given I am on "Home Page" page
    Then Page title should be "Cameo - Video Editor & Movie Maker for iOS"

  @scroll-start-page
  Scenario Outline: Scrolling page and check visible elements on the screen
    When I scroll down "<toVisibility>" times
    And I wait until element "<screen>" is visible
    Then Element "<screen>" should be visible on screen
    When I scroll down "<toInvisibility>" times
    Then Element "<screen>" should not be visible on screen

    Examples:
      | screen          | toVisibility | toInvisibility |
      | Join            | 0            | 3              |
      | Login           | 0            | 3              |
      | Download        | 0            | 3              |
      | Phone Animation | 5            | 3              |
      | Themes button   | 10           | 5              |
      | Soundtracks     | 17           | 4              |
      | Videos          | 22           | 4              |
      | Creators        | 26           | 4              |




