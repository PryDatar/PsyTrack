import React from "react";
import './EducationalResources.css';
const websites = [
  {
    site_web: "https://www.samhsa.gov/mental-health",
    titre:
      "Comprendre la santé mentale : émotionnelle, psychologique et sociale",
    image_link:
      "https://static.vecteezy.com/system/resources/previews/006/792/345/original/mental-health-blooming-human-brain-line-icon-mind-concept-love-life-new-page-illustration-free-vector.jpg",
  },
  {
    site_web: "https://www.cdc.gov/mentalhealth/learn/index.htm",
    titre:
      "Apprendre sur la santé mentale et comment elle affecte notre vie quotidienne",
    image_link:
      "https://media.istockphoto.com/id/1294477039/vector/metaphor-bipolar-disorder-mind-mental-double-face-split-personality-concept-mood-disorder-2.jpg?s=612x612&w=0&k=20&c=JtBxyFapXIA63hzZk_F5WNDF92J8fD2gIFNX3Ta4U3A=",
  },
  {
    site_web: "https://mhanational.org/",
    titre:
      "Éduquer des millions de personnes sur les conditions de santé mentale",
    image_link:
      "https://img.freepik.com/free-vector/mental-health-awareness-concept_52683-37916.jpg?w=2000",
  },
  {
    site_web:
      "https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response",
    titre: "Renforcer notre réponse à la santé mentale avec l'OMS",
    image_link:
      "https://www.planstreetinc.com/wp-content/uploads/2021/07/what-is-mental-health.png",
  },
  {
    site_web: "https://www.nimh.nih.gov/",
    titre:
      "Le rôle de l'Institut National de la Santé Mentale dans la recherche sur les troubles mentaux",
    image_link:
      "https://media.istockphoto.com/id/1270641282/vector/mental-health-or-psychology-concept-with-flowering-human-head.jpg?s=612x612&w=0&k=20&c=-ZycQUvWskTvH_BoF1LoGJ3XpfrN7jVs8Nu3-NHjDZE=",
  },
  {
    site_web:
      "https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health",
    titre:
      "Prendre soin de sa santé mentale : pensées, sentiments, choix et relations",
    image_link:
      "https://ca-times.brightspotcdn.com/dims4/default/bb60523/2147483647/strip/true/crop/2000x1333+0+0/resize/2000x1333!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8e%2Fb7%2F99beae9a4be0bbced1487b04b619%2Fla-hm-nyny-mental-health.jpg",
  },
  {
    site_web:
      "https://www.mind.org.uk/information-support/types-of-mental-health-problems/",
    titre:
      "Types de problèmes de santé mentale : colère, anxiété, trouble bipolaire et plus",
    image_link:
      "https://neurosciencenews.com/files/2023/05/iron-deficiency-mental-health-neurosicence.jpg",
  },
  {
    site_web: "https://uhs.umich.edu/tenthings",
    titre: "Dix choses que vous pouvez faire pour votre santé mentale",
    image_link:
      "https://www.uth.edu/contentAsset/image/2c2a1e2c-56de-48cf-9324-e34980fed4f4/fileAsset/filter/Jpeg/jpeg_q/85",
  },
  {
    site_web: "https://en.wikipedia.org/wiki/Mental_health",
    titre:
      "Santé mentale : comprendre son impact sur la cognition, la perception et le comportement",
    image_link:
      "http://www.marktechpost.com/wp-content/uploads/2023/04/7761089-scaled.jpg",
  },
  {
    site_web:
      "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions",
    titre:
      "Conditions de santé mentale : comprendre les troubles anxieux, le TDAH, le trouble bipolaire et plus",
    image_link:
      "https://pillarsofwellness.ca/wp-content/uploads/2021/03/mental-health-960x675.jpg.webp",
  },
  {
    site_web: "https://www.mentalhealthfirstaid.org/",
    titre:
      "Premiers secours en santé mentale : apprendre à répondre aux signes de maladie mentale et de consommation de substances",
    image_link:
      "https://static.vecteezy.com/system/resources/previews/006/792/345/original/mental-health-blooming-human-brain-line-icon-mind-concept-love-life-new-page-illustration-free-vector.jpg",
  },
  {
    site_web: "https://www.medicalnewstoday.com/articles/154543",
    titre:
      "Santé mentale : définition, troubles courants, premiers signes et plus",
    image_link:
      "https://media.istockphoto.com/id/1294477039/vector/metaphor-bipolar-disorder-mind-mental-double-face-split-personality-concept-mood-disorder-2.jpg?s=612x612&w=0&k=20&c=JtBxyFapXIA63hzZk_F5WNDF92J8fD2gIFNX3Ta4U3A=",
  },
  {
    site_web: "https://dmh.lacounty.gov/",
    titre:
      "Département de la santé mentale de Los Angeles : espoir, rétablissement, bien-être",
    image_link:
      "https://img.freepik.com/free-vector/mental-health-awareness-concept_52683-37916.jpg?w=2000",
  },
  {
    site_web: "https://mh.alabama.gov/",
    titre:
      "Département de la santé mentale de l'Alabama : connecter l'esprit et le bien-être",
    image_link:
      "https://www.planstreetinc.com/wp-content/uploads/2021/07/what-is-mental-health.png",
  },
  {
    site_web: "https://www.paho.org/en/topics/mental-health",
    titre:
      "Santé mentale : réaliser ses propres capacités avec l'Organisation Panaméricaine de la Santé",
    image_link:
      "https://media.istockphoto.com/id/1270641282/vector/mental-health-or-psychology-concept-with-flowering-human-head.jpg?s=612x612&w=0&k=20&c=-ZycQUvWskTvH_BoF1LoGJ3XpfrN7jVs8Nu3-NHjDZE=",
  },
];

const WebsiteList = () => {
    return (
      <div className="website-list-container">
        {websites.map((website, index) => (
          <div
            key={index}
            className="website-item"
          >
            <img
              src={website.image_link}
              alt={website.titre}
            />
            <div>
              <a href={website.site_web} target="_blank" rel="noopener noreferrer">{website.titre}</a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default WebsiteList;