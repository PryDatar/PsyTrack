import React from 'react';
import './HomePage.css';
import logo from '../psytrack.png'; // Assurez-vous que le chemin vers le fichier logo est correct
import { motion } from 'framer-motion';


const HomePage = () => {
  const logoVariants = {
    initial: {
      scale: 5,
      opacity: 0,
      position: 'fixed',
      top: '50%',
      left: '50%',
      x: '-50%',
      y: '-50%'
    },
    animate: {
      scale: 1,
      opacity: 1,
      position: 'static',
      top: '0%',
      left: '0%',
      x: '0%',
      y: '0%',
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const listItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  };

  const listFeatures = [
    "Suivi de l'évolution de la santé mentale des patients",
    "Enregistrement des traitements prescrits",
    "Suivi des symptômes ressentis",
    "Enregistrement des résultats d'examens médicaux",
    "Notes de suivi détaillées",
    "Recherche de psychiatres",
    "Prise de rendez-vous en ligne",
    "Suivi des émotions",
    "Ressources éducatives",
    "Suivi des médicaments",
  ];

  return (
    <div className="home-page">
      <motion.img
        src={logo}
        alt="PsyTrack Logo"
        className="logo"
        variants={logoVariants}
        initial="initial"
        animate="animate"
      />
      <h1>Bienvenue sur PsyTrack</h1>
      <p>
        PsyTrack est une plateforme dédiée au suivi de la santé mentale. Voici quelques-unes de nos principales fonctionnalités :
      </p>
      <ul>
        {listFeatures.map((feature, index) => (
          <motion.li
            key={index}
            variants={listItemVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 + 0.2 * index }}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;