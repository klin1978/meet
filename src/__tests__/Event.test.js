import Event from '../components/Event';
import '../mock-data';
import { getEvents } from '../api';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Event /> Component', () => {
    let EventComponent;
    let allEvents;

    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders event time', () => {
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('by default, event details are hidden', () => {
        const eventDetails = EventComponent.container.querySelector('.event-details');
        expect(eventDetails).not.toBeInTheDocument();
    });

    test('shows event details when user clicks on show details button', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByRole('button');
        await user.click(showDetailsButton);
        const eventDetails = EventComponent.container.querySelector('.event-details')
        expect(eventDetails).toBeInTheDocument();
    });

    test('hides event details when user clicks on hide details button', async () => {
        const user = userEvent.setup();
        const hideDetailsButton = EventComponent.queryByRole('button');
        await user.click(hideDetailsButton);
        const eventDetails = EventComponent.container.querySelector('.event-details')
        expect(eventDetails).not.toBeInTheDocument();
    });
})