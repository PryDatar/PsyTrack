import React from 'react';
import EmotionTracker from '../components/EmotionTracker/EmotionTracker';
import './EmotionTrackerPage.css';

const EmotionTrackerPage = () => {
    return (
        <div className="emotion-tracker-page">
            <h1>Suivi des émotions</h1>
            <p>Sur cette page, vous pouvez noter vos émotions jour après jour. Cela aidera votre médecin à comprendre comment vous êtes sentis entre deux séances.</p>
            <EmotionTracker />
        </div>
    );
}

export default EmotionTrackerPage;
