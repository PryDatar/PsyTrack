import React, { useState, useEffect } from "react";
import axios from 'axios';

import './SearchTool.css';


let psys = [
  {
    profile: {
      name: "Dr. Jean Dupont",
      shortDescription:
        "Spécialiste en psychiatrie de l'enfant et de l'adolescent, Dr. Dupont est connu pour son approche empathique et patiente.",
      longDescription:
        "Dr. Dupont a obtenu son diplôme de l'Université de Paris, avant de se spécialiser en psychiatrie de l'enfant et de l'adolescent. Il a travaillé pendant 10 ans dans un hôpital pour enfants avant d'ouvrir son propre cabinet.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      phoneNumber: "+33 1 23 45 67 89",
      email: "jean.dupont@fakemail.com",
      address: "123 Rue de Paris, 75001 Paris",
    }
  },
  {
    profile: {
      name: "Dr. Marie Lefevre",
      shortDescription:
        "Psychiatre spécialisée dans les troubles anxieux, Dr. Lefevre est réputée pour son approche centrée sur le patient.",
      longDescription:
        "Dr. Lefevre a étudié à l'Université de Lyon et a ensuite travaillé dans une clinique spécialisée dans les troubles anxieux. Elle a plus de 15 ans d'expérience dans le domaine.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      phoneNumber: "+33 2 34 56 78 90",
      email: "marie.lefevre@fakemail.com",
      address: "456 Boulevard de Lyon, 69000 Lyon",
    }
  },
  {
    profile: {
      name: "Dr. Pierre Martin",
      shortDescription:
        "Dr. Martin est un psychiatre spécialisé dans les troubles du sommeil avec une approche holistique de la santé mentale.",
      longDescription:
        "Dr. Martin a obtenu son diplôme de l'Université de Strasbourg. Il a ensuite travaillé dans un centre de recherche sur le sommeil avant d'ouvrir son propre cabinet.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      phoneNumber: "+33 3 12 34 56 78",
      email: "pierre.martin@fakemail.com",
      address: "789 Rue de Strasbourg, 67000 Strasbourg",
    }
  },
];

const PsychiatristList = () => {
  const [psychiatrists, setPsychiatrists] = useState(psys);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleConnect = async (profile) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };



    try {

      const psyId = profile._id;

      const responseUser = await axios.get('http://localhost:5000/api/user/getUserId', config);
      const userId = responseUser.data.userId;

      console.log(psyId);
      console.log(userId)
      const data = {
        userId: userId,
        psyId: psyId
      };

      const response = await axios.post('http://localhost:5000/api/user/connect', data , config);
      console.log(response.data.message);


    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur :', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const fetchPsychiatrists = async () => {
      await axios.get('http://localhost:5000/api/user/psychiatrists', config)
        .then(response => {
          console.log(response.data[0].profile.avatar)
          setPsychiatrists(response.data);
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des psychiatres", error);
        });
    };
    fetchPsychiatrists();
  }, []);

  return (
    <div className="psychiatrist-list">
      {psychiatrists.map((psychiatrist, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          <img
            src={`http://localhost:5000/${psychiatrist.profile.avatar}`}
            alt="Avatar"
            style={{ width: "100px", height: "100px", marginRight: "20px" }}
          />
          <div style={{ flexDirection: "column" }}>
            <h3>{psychiatrist.profile.name}</h3>
            <p>{psychiatrist.profile.shortDescription}</p>
            {expandedIndex === index ? (
              <div>
                <p>{psychiatrist.profile.longDescription}</p>
                <hr style={{ width: "50%", marginLeft: 0 }} />{" "}
                {/* Ligne horizontale à gauche */}
                <p>{psychiatrist.profile.phoneNumber}</p>
                <p>{psychiatrist.profile.email}</p>
                <p>{psychiatrist.profile.address}</p>
                <button onClick={() => handleExpand(index)}>
                  Afficher moins
                </button>
              </div>
            ) : (
              <button onClick={() => handleExpand(index)}>Afficher plus</button>
            )
            }
          </div>
          <button onClick={() => handleConnect(psychiatrist)}>Se mettre en relation</button>
        </div>
      ))}
    </div>
  );
};

export default PsychiatristList;