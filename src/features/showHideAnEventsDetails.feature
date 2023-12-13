Feature: Show/hide an events details
    Scenario: An event element is collapsed by default
        Given the user opens the app and is viewing the list of events
        When the user takes no action on an event
        Then the event details should be hidden by default

    Scenario: User can expand an event to view its details
        Given the user opens the app and is viewing the list of events
        When the user clicks on Show Details button of an event
        Then the event details should be shown

    Scenario: User can collapse an event to hide its details
        Given the user has expanded an events details
        When the user clicks the Hide Details button
        Then the event details should be hidden