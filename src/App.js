import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import CitySearch from './components/CitySearch';
import CityEventsChart from './components/CityEventsChart';
import EventGenreChart from './components/EventGenreChart';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("you are currently offline");
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert} />
      <NumberOfEvents 
        currentNOE={currentNOE} 
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert} />
      <div className='charts-container'>
        <EventGenreChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList 
        events={events}
        setWarningAlert={setWarningAlert}/>
    </div>
  );
}

export default App;