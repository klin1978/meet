Feature: Specify number of events
    Scenario: When user hasn't specified a number, 32 events are shown by default
        Given the user is viewing a list of events
        When the user hasn't specified or filtered the number of events
        Then the default number of displayed events will be 32

    Scenario: User can change the number of events displayed
        Given the user is viewing a list of events
        When the user changes the number of events displayed
        Then the number of events displayed will be updated the the number selected