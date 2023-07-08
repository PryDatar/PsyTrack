import React from 'react';
import HealtCard from '../components/HealthCard/HealthCard';
import './HealthCardPage.css';

const HealtCardPage = () => {
    return (
        <div className="healt-card-page">
            <h1>Carnet de santé</h1>
            <p>Sur cette page, vous pouvez suivre l'évolution de votre santé mentale, enregistrer les traitements prescrits, les symptômes ressentis, les résultats d'examens médicaux et les notes de suivi.</p>
            <HealtCard />
        </div>
    );
}

export default HealtCardPage;
