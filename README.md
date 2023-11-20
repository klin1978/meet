# Meet App
This is a severless, progressive web application (PWA) built with React. It will utilize test-driven development (TDD) technique and integrate Google Calendar API to fetch upcoming events.

## Key Features
- Filter events by city
- Show/hide event details
- Specify number of events
- Use the app when offline
- Add an app shortcut to the Home screen
- Display charts visualizing event details

## User Stories
FILTER EVENTS BY CITY <br>

As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.

**Scenario 1:** When user hasn't searched for a city, show upcoming events from all cities.
- Given user hasn't searched for any city
- When the user opens the app
- Then all upcoming events from all cities are shown

**Scenario 2:** User should see a list of suggestions when they search for a city
- Given page with search options has been opened
- When the user types in the city
- Then events for that city should be shown

**Scenario 3:** User can select a city from the suggested list
- Given the user was typing in a city and a list of suggested cities shows
- When the user selects a city from the suggested list
- Then events for that city should be shown

SHOW/HIDE AN EVENT'S DETAILS <br>

As a user, I should be able to show or hide event details after I have selected a city, so that I can choose what event details I want to see.

**Scenario 1:** An event element is collapsed by default
- Given the user opens the app and is viewing the list of events
- When the user takes no action on an event
- Then the event details should be hidden by default

**Scenario 2:** User can expand an event to view its details
- Given the user opens the app and is viewing the list of events
- When the user clicks on "Show Details" button of an event
- Then the event details should be shown

**Scenario 3:** User can collapse an event to hide its details
- Given the user has expanded an events details
- When the user clicks the "Hide Details" button
- Then the event details should be hidden

SPECIFY NUMBER OF EVENTS <br>

As a user, I should be able to specify the number of events shown, so that I can choose the number of events I am shown.

**Scenario 1:** When user hasn't specified a number, 32 events are shown by default
- Given the user is viewing a list of events
- When the user hasn't specified or filtered the number of events
- Then the default number of displayed events will be 32

**Scenario 2:** User can change the number of events displayed
- Given the user is viewing a list of events
- When the user changes the number of events displayed
- Then the number of events displayed will be updated the the number selected

USE THE APP WHEN OFFLINE <br>

As a user, I should be able to use the app when offline, so that it is always accessible.

**Scenario 1:** Show cached data when there's no internet connection
- Given the user has no internet connection
- When the user is accessing the app
- Then the cached data will be given to the user

**Scenario 2:** Show error when user changes search settings (city, number of events)
- Given the user has no internet connection
- When the user is trying to change search settings
- Then the app will show an error

ADD AN APP SHORTCUT TO THE HOME SCREEN <br>

As a user, I should be able to add a shortcut of the app to the home screen, so I can access the app quicker.

**Scenario 1:** User can install the meet app as a shortcut on their device home screen.
- Given the user has installed the meet app
- When the user chooses to install the app as a shortcut
- Then a shortcut is added on the users homescreen

DISPLAY CHARTS VISUALIZING EVENT DETAILS <br>

As a user, I should see a chart showing upcoming events in each city, so that the events are easier to see based on the city.

**Scenario 1:** Show a chart with the number of upcoming events in each city
- Given the user is in the event details page
- When the user clicks the button to see a chart showing upcoming events in each city
- Then a chart with the number of upcoming events for each city will be shown

## Serverless Functions
This Meet App will utilize serverless functions in the backend, server logic side to handle the authorization for accessing public calendar events from the Google Calendar API. It will also be able to handle data processing and filtering, event recommendations, and event notifications. Doing so will allow for flexibility, scalability, cost-efficiency, smooth user experience, and optimal performance without needing to manage a complex server infrastructure. 
