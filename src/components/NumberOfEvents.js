import { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
    const handleChange = (event) => {
        const value = event.target.value;

        let errorText;
        if (isNaN(value) || value <= 0) {
            errorText = 'Enter a number';
        } else if (value > 32 || value <= 0) {
            errorText = 'Enter a number greater than 0 and less than 32';
        } else {
            errorText = '';
        }
        setErrorAlert(errorText);
        setCurrentNOE(value);
    }

    return (
        <div id='number-of-events'>
            <input 
                type='text' 
                value={currentNOE} 
                onChange={handleChange}
                data-testid='event-number-input'
                />
        </div>
    );
};

export default NumberOfEvents;