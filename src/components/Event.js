import { useState } from 'react';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
      <li className='event'>
        <div className='event-wrapper'>
            <h2>{event.summary}</h2>
            <p>{event.location}</p>
            <p>{event.created}</p>
            <p>{new Date(event.start.dateTime).toString()}</p>
            {!showDetails && (
                <>
                    <div className='event-details'>
                        <h3>About Event</h3>
                        <p>{event.description}</p>
                    </div>
                </>
            )}
            <button className='showDetails-btn' onClick={() => toggleDetails()}>
                {showDetails ? 'show' : 'hide'} details
            </button>
        </div>
      </li>
    );
  }
  
export default Event;