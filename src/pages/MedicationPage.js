import React from 'react';
import MedicationTracker from '../components/MedicationTracker/MedicationTracker';
import './MedicationPage.css';

const MedicationPage = () => {
  return (
    <div className="medication-page">
      <h1>Suivi des médicaments</h1>
      <p>Sur cette page, vous pouvez suivre les médicaments que vous prenez et la dose correspondante.</p>
      <MedicationTracker />
    </div>
  );
};

export default MedicationPage;
