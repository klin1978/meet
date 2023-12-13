import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        let AppComponent;
        let eventList;
        given('the user is viewing a list of events', () => {
            AppComponent = render(<App />);
        });

        when('the user hasn\'t specified or filtered the number of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList.length).toBe(32);
            })
        });

        then('the default number of displayed events will be 32', () => {
            expect(eventList.length).toEqual(32);
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent;
        given('the user is viewing a list of events', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList.length).toBe(32);
            })
        });

        when('the user changes the number of events displayed', async () => {
            const button = AppComponent.queryByTestId('numberOfEventsInput');
            await userEvent.type(button, '{backspace}{backspace}10');
        });

        then('the number of events displayed will be updated the the number selected', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toEqual(10);
        });
    });
})