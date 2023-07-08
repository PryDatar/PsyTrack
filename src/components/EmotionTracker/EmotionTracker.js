import React, { useState } from 'react';
import './EmotionTracker.css';

const EmotionTracker = () => {
    const [emotion, setEmotion] = useState('');
    const [entries, setEntries] = useState([]);

    const handleEmotionChange = (event) => {
        setEmotion(event.target.value);
    }

    const handleEmotionSave = () => {
        const newEntry = {
            date: new Date(),
            text: emotion
        };
        setEntries([newEntry, ...entries]);
        setEmotion('');
    }

    const handleEntryDelete = (indexToDelete) => {
        setEntries(entries.filter((entry, index) => index !== indexToDelete));
    }

    return (
        <div className="emotion-tracker">
            <textarea value={emotion} onChange={handleEmotionChange} />
            <button onClick={handleEmotionSave}>Enregistrer</button>
            <h2>Journal de bord</h2>
            {entries.map((entry, index) => (
                <div key={index} className="entry">
                    <div className="entry-date">{entry.date.toLocaleString()}</div>
                    <div className="entry-text">{entry.text}</div>
                    <button className="entry-delete" onClick={() => handleEntryDelete(index)}>🗑️</button>
                </div>
            ))}
        </div>
    );
}

export default EmotionTracker;
