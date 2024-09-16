Feature: Login to my account

    Scenario: Successfully logging into my account and logging out
        Given I am on the Landing page
        When I click on the Login button in the Navbar
        Then I should be redirected to the Login page
        And I enter my username and password
        When I click on the Login button
        Then I should be logged into my account
        And I should see the account information
        When I Click on the Log out button
        Then I should logged out
