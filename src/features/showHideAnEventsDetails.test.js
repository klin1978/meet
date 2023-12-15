import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the user opens the app and is viewing the list of events', () => {
            AppComponent = render(<App />);
        });

        when('the user takes no action on an event', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            })
        });

        then('the event details should be hidden by default', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.event-details');
            expect(details).not.toBeInTheDocument;
        });
    });

    test('User can expand an event to view its details', ({ given, when, then }) => {
        let AppComponent;
        given('the user opens the app and is viewing the list of events', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList.length).toBe(0);
            });
        });

        when('the user clicks on Show Details button of an event', async () => {
            const showButton = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(showButton);
        });

        then('the event details should be shown', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.event-details');
            expect(details).toBeInTheDocument;
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppComponent;
        let button;
        given('the user has expanded an events details', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList.length).toBe(0)
            });

            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.event-details');
            expect(details).toBeInTheDocument;

        });

        when('the user clicks the Hide Details button', async () => {
            await userEvent.click(button);
        });

        then('the event details should be hidden', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.event-details');
            expect(details).not.toBeInTheDocument;
        });
    });
});