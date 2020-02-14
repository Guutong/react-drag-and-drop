Feature: Drag and Drop
 
  I want to Drag and Drop

  Scenario: Opening page
    Given I go to home page
    When I can see item
    And  I swap item 1 to 3
    Then I should be see item 2 first