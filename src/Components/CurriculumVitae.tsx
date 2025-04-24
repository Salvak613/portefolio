import React from "react";
import styles from "./CurriculumVitae.module.css";
import DraggableWindow from "./DraggableWindow";

interface CurriculumVitaeProps {
  isOpen: boolean;
  toggleWindow: () => void;
}

const CurriculumVitae: React.FC<CurriculumVitaeProps> = ({
  isOpen,
  toggleWindow,
}) => {
  if (!isOpen) return null;

  return (
    <div>
      <DraggableWindow id={styles.window}>
        <div className={styles["window-top"]}>
          Curriculum Vitae
          <button className={styles.titleButton} onClick={toggleWindow}>
            X
          </button>
        </div>
        <div className={styles.windowContent}>
          <h3>Mon Curriculum Vitae</h3>
          <p>Voici un résumé de mon parcours professionnel et académique.</p>
          <h3>Profil</h3>
          <p>
            Actuellement en formation de développeur web (front & back end), je
            suis à la recherche d'une alternance dès septembre 2025 afin de
            consolider mes compétences techniques et contribuer à des projets
            concrets en entreprise.
          </p>
          <h3>FORMATION Dev Web Front/Back-end</h3>
          <h4>Wild Code School, Lille | 03/2025 - En cours</h4>
          <p>
            Formation intensive axée sur les technologies web (HTML, CSS,
            JavaScript, React, Node.js, Git, API REST...). Réalisation de
            projets en équipe en méthodologie agile (SCRUM).
          </p>
          <h3>Compétences</h3>
          <ul>
            <li>HTML / CSS / JavaScript / Node.js / React</li>
            <li>Git / GitHub / API REST / SQL</li>
            <li>Méthodologie Agile (SCRUM)</li>
            <li>Anglais courant</li>
            <li>Logiciels de montage son et vidéo</li>
            <li>Réactivité aux imprévus</li>
            <li>Créativité dans la résolution de problèmes</li>
          </ul>
          <h3>OPERATEUR POLYVALENT, MS GAME (EVA Lille)</h3>{" "}
          <h4>Lille, France | 10/2022 - 10/2024</h4>{" "}
          <p>
            Accompagnement des clients lors des sessions de jeu VR.
            <br /> Gestion du bar et de l'accueil.
            <br /> Amélioration de l'expérience compétitif e-sport.
          </p>
          <h3> ASSISTANT RH, AUCHAN CENTRALE D'ACHAT</h3>
          <h4> Villeneuve d'Ascq, France | 03/2022 - 06/2022</h4>{" "}
          <p>
            Gestion des contrats et des RH intérimaires.
            <br />
            Rédaction des bons de commande à destination des agences d'intérim.
            <br />
            Traitement journalier de la boite mail du centre de gestion.
          </p>{" "}
          <h3> OPERATEUR DE SAISIE, GROUPE BERNARD</h3>{" "}
          <h4>Marcq en Baroeul, France | 05/2021 - 01/2022</h4>{" "}
          <p>
            Saisie informatique des dossiers de remboursement client. <br />
            Analyse des dossiers médicaux pour une prise en charge rapide.
            <br />
            Vérification des dossiers validés pour correction d'erreurs.
          </p>{" "}
          <h3>GESTIONNAIRE D'ARCHIVES ET SECRETARIAT, DIRECCTE</h3>{" "}
          <h4>Lille, France | 09/2020 - 12/2020</h4>{" "}
          <p>
            Mise en archive informatique des dossiers papier 2000-2015 de la
            DIRECCTE.
            <br /> Reception, suivi et envoi des dossiers des gestionnaires IAE.
            <br /> Reception et distribution des courriers.
          </p>{" "}
          <h3> ASSISTANT ADV, PROSERVIA</h3>{" "}
          <h4>Villeneuve d'Ascq, France | 10/2018 - 05/2020</h4>{" "}
          <p>
            Recevoir et gérer simultanément de multiples dossiers client
            confidentiels de façon autonome.
            <br /> Saisie administrative et technique des ventes commerciales.
            <br /> Mise en place informatique des projets clients.
          </p>
        </div>
      </DraggableWindow>
    </div>
  );
};

export default CurriculumVitae;
