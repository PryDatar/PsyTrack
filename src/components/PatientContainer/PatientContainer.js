import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientContainer = () => {
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/getAllPatients', config);
        setPatientList(response.data.users);
      } catch (error) {
        console.error('Erreur lors de la récupération des patients :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="patientContainer">
      {patientList.map((patient, index) => (
        <div key={index} className="patientItem">
          <div className="patientName">{patient.name}</div>
          <div className="patientEmail">{patient.email}</div>
        </div>
      ))}
    </div>
  );
};

export default PatientContainer;