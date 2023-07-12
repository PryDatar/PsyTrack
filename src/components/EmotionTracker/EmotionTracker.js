import React, { useState } from "react";

const EmotionTracker = ({ onCreateEntry }) => {
  const [emotion, setEmotion] = useState("");
  const [intensity, setIntensity] = useState(0);
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateEntry(emotion, intensity, note);
    setEmotion("");
    setIntensity(0);
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="emotion" style={{ fontWeight: 'bold', fontFamily: 'Cabin, sans-serif' }}>Emotion:</label>
        <br/>
        <input
          id="emotion"
          type="text"
          value={emotion}
          style={{ marginLeft: '10px', width: '400px' }}
          onChange={(e) => setEmotion(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="intensity" style={{ fontWeight: 'bold', fontFamily: 'Cabin, sans-serif' }}>Intensity:</label>
        <br/>
        <input
          id="intensity"
          type="range"
          value={intensity}
          min="0"
          max="10"
          style={{ marginLeft: '10px', width: '400px' }}
          onChange={(e) => setIntensity(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="note" style={{ fontWeight: 'bold', fontFamily: 'Cabin, sans-serif' }}>Note:</label>
        <br/>
        <textarea
          id="note"
          value={note}
          style={{ height: '150px', width: '400px', marginLeft: '10px' }}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button type="submit" style={{ 
          backgroundColor: '#4CAF50', 
          border: 'none', 
          color: 'white', 
          padding: '15px 32px', 
          textAlign: 'center', 
          textDecoration: 'none', 
          display: 'inline-block', 
          fontSize: '16px', 
          margin: '4px 2px', 
          cursor: 'pointer' 
        }}>
        Add Entry
      </button>
      <br/>
      <br/>
    </form>
  );
};

export default EmotionTracker;
