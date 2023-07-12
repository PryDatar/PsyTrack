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
    const [entry, setEntry] = useState('');
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
                await axios.get('http://localhost:5000/api/user/getAllPatients', config)
                    .then(response => {
                        setUserList(response.data.users);
                        setSelectedUser(response.data.users[0]);
                    })
                    .catch(error => {
                        console.error("Erreur lors de la récupération des utilisateurs", error);
                    });
            }
            catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs :', error);
            }
        }

        fetchData();


    }, []);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
        console.log(user)
        // Autres actions à effectuer lors de la sélection d'un utilisateur
    };


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

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            <img
                src={`http://localhost:5000/${selectedUser.avatar}`}
                alt="Avatar"
                style={{ width: "100px", height: "100px", marginRight: "20px" }}
                className="selected-logo"
            />
            {children}
        </components.SingleValue>
    );

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
                <h2>Évolution de la santé mentale</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                        doloremque. Quaerat provident commodi consectetur veniam similique ad
                        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                        quasi aliquam eligendi, placeat qui corporis!</p>
                </div>
                <h2>Traitements prescrits</h2>
                <div className="entry">
                    <div className="entry-date">{""}</div>
                    <div className="entry-text">{""}</div>
                    <button className="entry-delete" onClick={() => {}}>🗑️</button>
                </div>
                <h2>Symptômes ressentis</h2>
                <div className="entry">
                    <div className="entry-date">{""}</div>
                    <div className="entry-text">{""}</div>
                    <button className="entry-delete" onClick={() => {}}>🗑️</button>
                </div>
                <h2>Résultats d'examens médicaux</h2>
                <div className="entry">
                    <div className="entry-date">{""}</div>
                    <div className="entry-text">{""}</div>
                    <button className="entry-delete" onClick={() => {}}>🗑️</button>
                </div>
                <h2>Notes de suivi</h2>
                <div className="entry">
                    <div className="entry-date">{""}</div>
                    <div className="entry-text">{""}</div>
                    <button className="entry-delete" onClick={() => {}}>🗑️</button>
                </div>
                {/* Ajoutez d'autres champs en fonction des variables de l'utilisateur */}
            </div>

        </div>
    );
}

export default HealtCard;
