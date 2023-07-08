import React from 'react';
import PsychiatristList from '../components/SearchTool/SearchTool';

  const PsychiatristSearchPage = () => {
    return (
      <div>
        <h1 style={{ margin: '30px' }}>Recherche de psychiatres</h1>
        <p style={{ margin: '30px' }}>
            Bienvenue sur notre page de recherche de psychiatres. Ici, vous pouvez parcourir une liste de professionnels de la santé mentale qualifiés. Chaque entrée fournit une brève description du psychiatre, ainsi que des informations de contact détaillées. Utilisez cette page pour trouver un psychiatre qui répond à vos besoins spécifiques.
        </p>
        <PsychiatristList/>
      </div>
    );
  };

  export default PsychiatristSearchPage;
