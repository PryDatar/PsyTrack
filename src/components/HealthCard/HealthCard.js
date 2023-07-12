import React, { useState, useEffect } from 'react';
import Select, { components } from "react-select";
import { FaBeer } from 'react-icons/fa'
import axios from 'axios';
import './HealthCard.css';
import UserSelector from '../UserSelector/UserSelector';

const categories = [
    'Évolution de la santé mentale',
    'Traitements prescrits',
    'Symptômes ressentis',
    'Résultats d\'examens médicaux',
    'Notes de suivi'
];

const HealtCard = () => {
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [entries, setEntries] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/getAllPatients', config);
                setUserList(response.data.users);
                setSelectedUser(response.data.users[0]);
            } catch (error) {
                console.error("Erreur lors de la récupération des utilisateurs", error);
            }
        }

        fetchData();
    }, []);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
        // Autres actions à effectuer lors de la sélection d'un utilisateur
    };

    const handleEntrySave = () => {
        const newEntry = {
            date: new Date(),
            text: entries[selectedCategory]
        };

        setEntries({
            ...entries,
            [selectedCategory]: [newEntry, ...(entries[selectedCategory] || [])]
        });
    }

    const handleEntryDelete = (category, indexToDelete) => {
        setEntries({
            ...entries,
            [category]: entries[category].filter((entry, index) => index !== indexToDelete)
        });
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    return (
        <div className="healt-card">
            <div className="user-list">
                <div>
                    <h1>Selectionner un Patient</h1>
                    <div className="healt-card">
                        <UserSelector userList={userList} onSelectUser={handleUserSelect} />
                        {/* Le reste du code */}
                    </div>
                </div>
            </div>
            <div>
                <h2>Nom : {selectedUser?.profile.name}</h2>
                <h2>Email : {selectedUser?.profile.email}</h2>
                {categories.map(category => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <div className="entry">
                            <div className="entry-date">
                                <input
                                    type="text"
                                    value={entries[category]?.date || ''}
                                    onChange={(event) => {
                                        const updatedEntries = { ...entries };
                                        updatedEntries[category] = {
                                            ...updatedEntries[category],
                                            date: event.target.value
                                        };
                                        setEntries(updatedEntries);
                                    }}
                                    placeholder="Date"
                                />
                            </div>
                            <div className="entry-text">
                                <textarea
                                    value={entries[category]?.text || ''}
                                    onChange={(event) => {
                                        const updatedEntries = { ...entries };
                                        updatedEntries[category] = {
                                            ...updatedEntries[category],
                                            text: event.target.value
                                        };
                                        setEntries(updatedEntries);
                                    }}
                                    placeholder="Texte"
                                />
                            </div>
                            <button className="entry-delete" onClick={() => handleEntryDelete(category)}>
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
                <div>
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <button onClick={handleEntrySave}>Enregistrer</button>
                </div>
            </div>
        </div>
    );
}

export default HealtCard;
