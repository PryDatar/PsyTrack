import React, { useState } from "react";
import './SearchTool.css';


let psychiatrists = [
  {
    name: "Dr. Jean Dupont",
    shortDescription:
      "Spécialiste en psychiatrie de l'enfant et de l'adolescent, Dr. Dupont est connu pour son approche empathique et patiente.",
    longDescription:
      "Dr. Dupont a obtenu son diplôme de l'Université de Paris, avant de se spécialiser en psychiatrie de l'enfant et de l'adolescent. Il a travaillé pendant 10 ans dans un hôpital pour enfants avant d'ouvrir son propre cabinet.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    phoneNumber: "+33 1 23 45 67 89",
    email: "jean.dupont@fakemail.com",
    address: "123 Rue de Paris, 75001 Paris",
  },
  {
    name: "Dr. Marie Lefevre",
    shortDescription:
      "Psychiatre spécialisée dans les troubles anxieux, Dr. Lefevre est réputée pour son approche centrée sur le patient.",
    longDescription:
      "Dr. Lefevre a étudié à l'Université de Lyon et a ensuite travaillé dans une clinique spécialisée dans les troubles anxieux. Elle a plus de 15 ans d'expérience dans le domaine.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    phoneNumber: "+33 2 34 56 78 90",
    email: "marie.lefevre@fakemail.com",
    address: "456 Boulevard de Lyon, 69000 Lyon",
  },
  {
    name: "Dr. Pierre Martin",
    shortDescription:
      "Dr. Martin est un psychiatre spécialisé dans les troubles du sommeil avec une approche holistique de la santé mentale.",
    longDescription:
      "Dr. Martin a obtenu son diplôme de l'Université de Strasbourg. Il a ensuite travaillé dans un centre de recherche sur le sommeil avant d'ouvrir son propre cabinet.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    phoneNumber: "+33 3 12 34 56 78",
    email: "pierre.martin@fakemail.com",
    address: "789 Rue de Strasbourg, 67000 Strasbourg",
  },
  {
    name: "Dr. Sophie Bernard",
    shortDescription:
      "Spécialisée en thérapie cognitivo-comportementale, Dr. Bernard est connue pour son approche pragmatique et orientée vers les solutions.",
    longDescription:
      "Dr. Bernard a étudié à l'Université de Toulouse et a travaillé dans une clinique spécialisée en TCC. Elle a plus de 20 ans d'expérience dans le domaine.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    phoneNumber: "+33 4 23 45 67 89",
    email: "sophie.bernard@fakemail.com",
    address: "1011 Avenue de Toulouse, 31000 Toulouse",
  },
  {
    name: "Dr. François Petit",
    shortDescription:
      "Dr. Petit est un psychiatre spécialisé dans les troubles de l'humeur, connu pour son approche empathique et son écoute active.",
    longDescription:
      "Dr. Petit a obtenu son diplôme de l'Université de Nantes. Il a travaillé dans un hôpital psychiatrique avant d'ouvrir son propre cabinet.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    phoneNumber: "+33 5 34 56 78 90",
    email: "francois.petit@fakemail.com",
    address: "1213 Rue de Nantes, 44000 Nantes",
  },
  {
    name: "Dr. Claire Dubois",
    shortDescription:
      "Dr. Dubois est une psychiatre spécialisée dans les troubles de l'alimentation, connue pour son approche centrée sur le patient et son empathie.",
    longDescription:
      "Dr. Dubois a obtenu son diplôme de l'Université de Bordeaux. Elle a travaillé dans un centre spécialisé dans les troubles de l'alimentation avant d'ouvrir son propre cabinet.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    phoneNumber: "+33 6 12 34 56 78",
    email: "claire.dubois@fakemail.com",
    address: "1415 Rue de Bordeaux, 33000 Bordeaux",
  },
  {
    name: "Dr. Nicolas Roux",
    shortDescription:
      "Spécialisé en psychiatrie gériatrique, Dr. Roux est connu pour son approche patiente et respectueuse.",
    longDescription:
      "Dr. Roux a étudié à l'Université de Lille et a travaillé dans un hôpital gériatrique avant d'ouvrir son propre cabinet.",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    phoneNumber: "+33 7 23 45 67 89",
    email: "nicolas.roux@fakemail.com",
    address: "1617 Rue de Lille, 59000 Lille",
  },
  {
    name: "Dr. Isabelle Moreau",
    shortDescription:
      "Dr. Moreau est une psychiatre spécialisée dans la thérapie cognitivo-comportementale, connue pour son approche pragmatique et orientée vers les solutions.",
    longDescription:
      "Dr. Moreau a obtenu son diplôme de l'Université de Rennes. Elle a travaillé dans une clinique spécialisée en TCC avant d'ouvrir son propre cabinet.",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phoneNumber: "+33 8 34 56 78 90",
    email: "isabelle.moreau@fakemail.com",
    address: "1819 Rue de Rennes, 35000 Rennes",
  },
  {
    name: "Dr. Michel Leclerc",
    shortDescription:
      "Dr. Leclerc est un psychiatre spécialisé dans les troubles de l'humeur, connu pour son approche empathique et son écoute active.",
    longDescription:
      "Dr. Leclerc a obtenu son diplôme de l'Université de Reims. Il a travaillé dans un hôpital psychiatrique avant d'ouvrir son propre cabinet.",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    phoneNumber: "+33 9 12 34 56 78",
    email: "michel.leclerc@fakemail.com",
    address: "2021 Rue de Reims, 51100 Reims",
  },
  {
    name: "Dr. Anne Leroy",
    shortDescription:
      "Spécialisée en psychiatrie de l'adulte, Dr. Leroy est connue pour son approche centrée sur le patient et son empathie.",
    longDescription:
      "Dr. Leroy a étudié à l'Université de Cergy-Pontoise et a travaillé dans un hôpital pour adultes avant d'ouvrir son propre cabinet.",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    phoneNumber: "+33 10 23 45 67 89",
    email: "anne.leroy@fakemail.com",
    address: "2223 Rue de Cergy, 95000 Cergy",
  },
];

const PsychiatristList = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

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
            src={psychiatrist.avatar}
            alt="Avatar"
            style={{ width: "100px", height: "100px", marginRight: "20px" }}
          />
          <div style={{ flexDirection: "column" }}>
            <h3>{psychiatrist.name}</h3>
            <p>{psychiatrist.shortDescription}</p>
            {expandedIndex === index ? (
              <div>
                <p>{psychiatrist.longDescription}</p>
                <hr style={{ width: "50%", marginLeft: 0 }} />{" "}
                {/* Ligne horizontale à gauche */}
                <p>{psychiatrist.phoneNumber}</p>
                <p>{psychiatrist.email}</p>
                <p>{psychiatrist.address}</p>
                <button onClick={() => handleExpand(index)}>
                  Afficher moins
                </button>
              </div>
            ) : (
              <button onClick={() => handleExpand(index)}>Afficher plus</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PsychiatristList;