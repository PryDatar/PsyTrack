import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmotionTracker from '../components/EmotionTracker/EmotionTracker';

const EmotionTrackerPage = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      };

    axios.get('http://localhost:5000/api/emotion/entries', config)
    .then(response => {
        setEntries(response.data);
        setLoading(false);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des entrées:', error);
        setLoading(false);
      });
    };

    fetchEntries();
  }, []);

  const handleCreateEntry = (emotion, intensity, note) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    var options = {
        timeZone: "Europe/Paris",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };

    var date_ = new Date().toLocaleString("fr-FR", options);
    var date = date_.charAt(0).toUpperCase() + date_.slice(1);

    console.log("Voici la date:" + date);
    axios.post('http://localhost:5000/api/emotion/entry', { date, emotion, intensity, note }, config)
    .then(response => {
        setEntries(prevEntries => [response.data, ...prevEntries]);
    })
    .catch(error => {
        console.error('Erreur lors de la création de l\'entrée:', error);
    });
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <EmotionTracker onCreateEntry={handleCreateEntry} />
      {entries.map((entry, index) => (
        <div key={index}>
          <p>Date: {entry.date}</p>
          <p>Emotion: {entry.emotion}</p>
          <p>Intensity: {Number(entry.intensity)}</p>
          <p>Note: {entry.note}</p>
        </div>
      ))}
    </div>
  );
};

export default EmotionTrackerPage;
