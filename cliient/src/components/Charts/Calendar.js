import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    function handleDateChange(date) {
      setSelectedDate(date);
    }
  
    return (
        // <Calendar onChange={handleDateChange} value={selectedDate} style={{ width: '900px', height: '900px' }}/>
        <div style={{ width: '350px', height: '350px' }}>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        );
}
  
export default MyCalendar;