import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentCalendar.css';

const AppointmentButtonContainer = ({ appointmentHours, handleTimeSelection }) => {
  return (
    <div className="button-container">
      <div className="button-container-inner">
        {appointmentHours.map(time => (
          <button key={time} onClick={() => handleTimeSelection(time)}>
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelection = time => {
    setSelectedTime(time);
  };

  const generateAppointmentHours = () => {
    const startTime = 8; // Heure de début (8:00)
    const endTime = 20; // Heure de fin (20:00)
    const appointmentHours = [];

    for (let hour = startTime; hour <= endTime; hour++) {
      const formattedTime = hour.toString().padStart(2, '0') + ':00'; // Formatage de l'heure (ex: "08:00")
      appointmentHours.push(formattedTime);
    }

    return appointmentHours;
  };

  const formatFrenchDate = date => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    return date.toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="calendar-container">
      <div className="appointment-calendar-container">
        <h2>Calendrier de rendez-vous</h2>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          locale="fr-FR" // Définir la locale pour afficher les noms de mois et jours en français
        />
        {selectedTime && (
          <p className="selected-appointment">
            Rendez-vous le {formatFrenchDate(selectedDate)} à {selectedTime} réservé !
          </p>
        )}
        {!selectedTime && (
          <p>Sélectionnez une heure de rendez-vous</p>
        )}
        <AppointmentButtonContainer
          appointmentHours={generateAppointmentHours()}
          handleTimeSelection={handleTimeSelection}
        />
      </div>
    </div>
  );
};

export default AppointmentCalendar;
