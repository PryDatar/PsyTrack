import React from 'react';
import AppointmentCalendar from '../components/AppointmentCalendar/AppointmentCalendar';

const AppointmentPage = () => {
  return (
    <div>
      <h1 style={{ margin: '30px' }}>Calendrier de prise de rendez-vous</h1>
      <AppointmentCalendar />
    </div>
  );
};

export default AppointmentPage;
