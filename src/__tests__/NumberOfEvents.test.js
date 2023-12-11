import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() =>{}} />)
    });

    test('contains an element with role of textbox', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument()
    });

    test('default number of events is 32', () => {
        const textbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(textbox).toHaveValue('32');
    });

    test('updates number of events when user types in textbox', async () => {
        const textbox = NumberOfEventsComponent.queryByRole('textbox');
        await userEvent.type(textbox, '{backspace}{backspace}10');
        expect(textbox).toHaveValue('10');
    });
})