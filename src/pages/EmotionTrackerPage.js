import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./EmotionTrackerPage.css"
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
    return <div className="loading">Chargement...</div>;
  }

  return (
    <div className="emotion-tracker-page">
      <EmotionTracker onCreateEntry={handleCreateEntry} />
      <TransitionGroup className="entries-container">
        {entries.map((entry, index) => (
            <CSSTransition key={index} timeout={500} classNames="item">
              <div className="entry">
                <p><b>Date:</b> {entry.date}</p>
                <p><b>Emotion:</b> {entry.emotion}</p>
                <p><b>Intensité:</b> {Number(entry.intensity)}</p>
                <p><b>Note:</b> {entry.note}</p>
              </div>
            </CSSTransition>
        ))}
      </TransitionGroup>
      <br/>
      <br/>
    </div>
);

};

export default EmotionTrackerPage;
