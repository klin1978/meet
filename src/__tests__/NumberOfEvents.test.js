import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> components', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents setCurrentNOE={() => {}} currentNOE={32} setErrorAlert={() => {}} />
        );
    });

    test('renders text input', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
    });

    test('default value is 32', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toHaveValue('32');
    })
})