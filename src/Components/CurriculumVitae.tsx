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
          <h2>Mon Curriculum Vitae</h2>
          <p>Voici un résumé de mon parcours professionnel et académique.</p>
          <hr />
          <section>
            <h3>Profil</h3>
            <p>
              Actuellement en formation de{" "}
              <strong>développeur web (front & back end)</strong>, je suis à la
              recherche d'une alternance dès septembre 2025 afin de consolider
              mes compétences techniques et contribuer à des projets concrets en
              entreprise.
            </p>
          </section>
          <hr />
          <section>
            <h3>Formation</h3>
            <div>
              <strong>Dev Web Front/Back-end</strong> — Wild Code School, Lille{" "}
              <span style={{ fontStyle: "italic" }}>| 03/2025 - En cours</span>
              <ul>
                <li>
                  Formation intensive axée sur les technologies web (HTML, CSS,
                  JavaScript, React, Node.js, Git, API REST...)
                </li>
                <li>
                  Réalisation de projets en équipe en méthodologie agile (SCRUM)
                </li>
              </ul>
            </div>
          </section>
          <hr />
          <section>
            <h3>Compétences</h3>
            <ul>
              <li>
                <strong>Technologies :</strong> HTML / CSS / JavaScript /
                Node.js / React
              </li>
              <li>
                <strong>Outils :</strong> Git / GitHub / API REST / SQL
              </li>
              <li>
                <strong>Méthodologie :</strong> Agile (SCRUM)
              </li>
              <li>
                <strong>Langues :</strong> Anglais courant
              </li>
              <li>
                <strong>Logiciels :</strong> Montage son et vidéo
              </li>
              <li>Réactivité aux imprévus</li>
              <li>Créativité dans la résolution de problèmes</li>
            </ul>
          </section>
          <hr />
          <section>
            <h3>Expériences professionnelles</h3>
            <div style={{ marginBottom: "1em" }}>
              <strong>OPERATEUR POLYVALENT</strong>, MS GAME (EVA Lille){" "}
              <span style={{ fontStyle: "italic" }}>
                | Lille, France | 10/2022 - 10/2024
              </span>
              <ul>
                <li>Accompagnement des clients lors des sessions de jeu VR</li>
                <li>Gestion du bar et de l'accueil</li>
                <li>Amélioration de l'expérience compétitive e-sport</li>
              </ul>
            </div>
            <div style={{ marginBottom: "1em" }}>
              <strong>ASSISTANT RH</strong>, AUCHAN CENTRALE D'ACHAT{" "}
              <span style={{ fontStyle: "italic" }}>
                | Villeneuve d'Ascq, France | 03/2022 - 06/2022
              </span>
              <ul>
                <li>Gestion des contrats et des RH intérimaires</li>
                <li>
                  Rédaction des bons de commande à destination des agences
                  d'intérim
                </li>
                <li>
                  Traitement journalier de la boite mail du centre de gestion
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: "1em" }}>
              <strong>OPERATEUR DE SAISIE</strong>, GROUPE BERNARD{" "}
              <span style={{ fontStyle: "italic" }}>
                | Marcq en Baroeul, France | 05/2021 - 01/2022
              </span>
              <ul>
                <li>
                  Saisie informatique des dossiers de remboursement client
                </li>
                <li>
                  Analyse des dossiers médicaux pour une prise en charge rapide
                </li>
                <li>
                  Vérification des dossiers validés pour correction d'erreurs
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: "1em" }}>
              <strong>GESTIONNAIRE D'ARCHIVES ET SECRETARIAT</strong>, DIRECCTE{" "}
              <span style={{ fontStyle: "italic" }}>
                | Lille, France | 09/2020 - 12/2020
              </span>
              <ul>
                <li>
                  Mise en archive informatique des dossiers papier 2000-2015 de
                  la DIRECCTE
                </li>
                <li>
                  Réception, suivi et envoi des dossiers des gestionnaires IAE
                </li>
                <li>Réception et distribution des courriers</li>
              </ul>
            </div>
            <div style={{ marginBottom: "1em" }}>
              <strong>ASSISTANT ADV</strong>, PROSERVIA{" "}
              <span style={{ fontStyle: "italic" }}>
                | Villeneuve d'Ascq, France | 10/2018 - 05/2020
              </span>
              <ul>
                <li>
                  Recevoir et gérer simultanément de multiples dossiers client
                  confidentiels de façon autonome
                </li>
                <li>
                  Saisie administrative et technique des ventes commerciales
                </li>
                <li>Mise en place informatique des projets clients</li>
              </ul>
            </div>
          </section>
        </div>
      </DraggableWindow>
    </div>
  );
};

export default CurriculumVitae;
