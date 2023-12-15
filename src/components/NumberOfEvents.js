import React from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);
    };

    return (
        <div id='number-of-events'>
            <input 
                type='text' 
                defaultValue={'32'} 
                onChange={handleInputChanged} 
                data-testid='numberOfEvents-input'
            />
        </div>
    )
}

export default NumberOfEvents;