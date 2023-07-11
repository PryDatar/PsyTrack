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
      <label>
        Emotion:
        <input
          type="text"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
        />
      </label>
      <label>
        Intensity:
        <input
          type="number"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        />
      </label>
      <label>
        Note:
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EmotionTracker;

