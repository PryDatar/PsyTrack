import React from 'react';
import WebsiteList from '../components/EducationalResources/EducationalResources';
import './ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <div className="resources-page-container">
      <h1 className="resources-page-title">
        Bienvenue sur notre page dédiée à la compréhension des maladies mentales.
      </h1>
      <p className="resources-page-description">
        Nous comprenons à quel point il est important d'avoir accès à des ressources fiables pour mieux comprendre et faire face aux défis liés à la santé mentale. Cette page rassemble une collection de liens vers des sites web pertinents qui fournissent des informations éducatives, des ressources et un soutien pour diverses conditions de santé mentale. Que vous cherchiez à en savoir plus sur les troubles anxieux, le trouble bipolaire, la dépression ou d'autres problèmes de santé mentale, ces sites web sont là pour vous offrir des connaissances et des conseils précieux. Explorez les liens ci-dessous et trouvez les ressources qui vous aideront à mieux comprendre, à vous informer et à prendre soin de votre bien-être mental. Nous espérons que ces ressources vous seront utiles dans votre parcours vers une meilleure santé mentale.
      </p>
      <WebsiteList />
    </div>
  );
};

export default ResourcesPage;
