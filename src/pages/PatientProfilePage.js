import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./PsychiatristProfilePage.css"
import UserProfile from "../components/UserProfile/UserProfile"

const PatientProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    shortDescription: "",
    longDescription: "",
    avatar: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    console.log(config)
    // Récupérer le profil lors du chargement de la page
    axios.get('http://localhost:5000/api/user/profile', config)
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération du profil", error);
        setLoading(false);
      });
  }, []);


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('shortDescription', profile.shortDescription);
    formData.append('longDescription', profile.longDescription);
    formData.append('phoneNumber', profile.phoneNumber);
    formData.append('email', profile.email);
    formData.append('address', profile.address);
    formData.append('isVisibleToPatients', false);
  
    if (file) {
      formData.append('avatar', file);
    }
  
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
  
    axios.post('http://localhost:5000/api/user/profile', formData, config)
      .then(response => {
        setProfile(prevProfile => ({ ...prevProfile, avatar: response.data.avatar }));
        console.log("Profil mis à jour avec succès", response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la mise à jour du profil", error);
      });
  };

  if (loading) {
    return <div className={styles.loading}>Chargement...</div>;
  }
  
  return (
    <div className={styles.container}>
      <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '2em' }}>Votre profil</h1>
      <UserProfile user={profile} />
      <div style={{ marginLeft: '50px' }}>
        <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '2em' }}>Mise à jour du profil</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span style={{ fontWeight: 'bold' }}>Nom:</span>
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
          </label>
          <label>
            <span style={{ fontWeight: 'bold' }}>Avatar:</span>
            <input type="file" name="avatar" onChange={handleFileChange} />
          </label>
          <label>
            <span style={{ fontWeight: 'bold' }}>Téléphone:</span>
            <input type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
          </label>
          <label>
            <span style={{ fontWeight: 'bold' }}>Email:</span>
            <input type="text" name="email" value={profile.email} onChange={handleChange} />
          </label>
          <label>
            <span style={{ fontWeight: 'bold' }}>Adresse:</span>
            <input type="text" name="address" value={profile.address} onChange={handleChange} />
          </label>
          <input type="submit" value="Mettre à jour le profil" style={{ backgroundColor: '#D3C0FF', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1em', transition: 'background-color 0.2s ease', marginTop: '1em', width: '200px' }} />
        </form>
      </div>
    </div>
  );
};

export default PatientProfilePage;
