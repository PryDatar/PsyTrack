# Se déplacer vers le dossier src
cd src

# Créer le dossier pages s'il n'existe pas déjà
mkdir -p pages

# Se déplacer dans le dossier pages
cd pages

# Créer les fichiers de page avec des composants React de base
for page in HomePage HealthCardPage PsychiatristSearchPage AppointmentPage EmotionTrackerPage ResourcesPage MedicationPage; do
  echo "import React from 'react';

  const $page = () => {
    return (
      <div>
        <h1>$page</h1>
      </div>
    );
  };

  export default $page;" > $page.js
done

# Revenir à la racine du projet
cd ../..
