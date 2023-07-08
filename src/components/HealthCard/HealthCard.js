import React, { useState } from 'react';
import './HealthCard.css';

const categories = [
    'Évolution de la santé mentale',
    'Traitements prescrits',
    'Symptômes ressentis',
    'Résultats d\'examens médicaux',
    'Notes de suivi'
];

const HealtCard = () => {
    const [entry, setEntry] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [entries, setEntries] = useState({});

    const handleEntryChange = (event) => {
        setEntry(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    const handleEntrySave = () => {
        const newEntry = {
            date: new Date(),
            text: entry
        };
        setEntries({
            ...entries,
            [selectedCategory]: [newEntry, ...(entries[selectedCategory] || [])]
        });
        setEntry('');
    }

    const handleEntryDelete = (category, indexToDelete) => {
        setEntries({
            ...entries,
            [category]: entries[category].filter((entry, index) => index !== indexToDelete)
        });
    }

    return (
        <div className="healt-card">
            <select value={selectedCategory} onChange={handleCategoryChange}>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <textarea value={entry} onChange={handleEntryChange} />
            <button onClick={handleEntrySave}>Enregistrer</button>
            {categories.map(category => (
                <div key={category}>
                    <h2>{category}</h2>
                    {(entries[category] || []).map((entry, index) => (
                        <div key={index} className="entry">
                            <div className="entry-date">{entry.date.toLocaleString()}</div>
                            <div className="entry-text">{entry.text}</div>
                            <button className="entry-delete" onClick={() => handleEntryDelete(category, index)}>🗑️</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default HealtCard;
