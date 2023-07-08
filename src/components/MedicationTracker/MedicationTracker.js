import React from 'react';
import './MedicationTracker.css';

const MedicationTracker = () => {
  const medications = [
    { name: 'Antidépresseurs ', dose: '2 comprimés par jour' },
    { name: 'Antipsychotiques ', dose: '1 comprimé par jour' },
    { name: 'Anxiolytiques', dose: '3 comprimés par jour' },
    // Ajoutez plus de médicaments ici
  ];

  return (
    <div className="medication-tracker">
      {medications.map((medication, index) => (
        <div key={index} className="medication-item">
          <h2>{medication.name}</h2>
          <p>{medication.dose}</p>
        </div>
      ))}
    </div>
  );
};

export default MedicationTracker;
