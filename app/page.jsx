import AnnotatedCircle from "./components/AnnotatedCircle";
import HeroMenu from "./components/HeroMenu";
import LeadCaptureModal from "./components/LeadCaptureModal";
import PanelSlider from "./components/PanelSlider";
import ScrollControls from "./components/ScrollControls";

export default function Home() {
  return (
    <main className="page">
      <section className="hero" data-scroll-theme="dark">
        <HeroMenu />

        <div className="hero__body">
          <div className="hero__content">
            <h1 className="hero__title">
              <span>Obtenez plus</span>
              <span className="hero__title-line">de cours de ski</span>
            </h1>
            <p className="hero__subtitle">
              Une formation pensée pour les moniteurs de ski qui veulent accélérer
              leurs carrières grâce à la maîtrise de l’anglais sur les pistes.
            </p>
            <a className="hero__cta" href="#" data-open-modal>
              Commencez à parler anglais
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <img className="hero__waves" src="/waves_01.svg" alt="" aria-hidden="true" />
      </section>

      <PanelSlider />

      <section className="human" data-scroll-theme="dark">
        <div className="human__inner">
          <div className="human__content">
            <h2 className="human__title">
              ACCOMPAGNEMENT{" "}
              <AnnotatedCircle>HUMAIN</AnnotatedCircle>, SUR-MESURE, CENTRÉ SUR
              VOS OBJECTIFS
            </h2>
            <p className="human__text">
              Un parcours pragmatique pensé pour les moniteurs qui veulent
              progresser vite. Une pédagogie claire, des exercices appliqués à
              vos projets et un suivi personnalisé jusqu’à vos résultats.
            </p>
            <a className="human__link" href="#" data-open-modal>
              Réserver un rendez-vous
            </a>
          </div>
          <div className="human__media">
            <img src="/skieur-action.png" alt="Moniteur de ski en action" />
          </div>
        </div>
      </section>

      <section className="program" id="programme" data-scroll-theme="light">
        <div className="program__inner">
          <h2 className="program__title">PROGRAMME</h2>
          <div className="program__stats">
            <div className="program__stat program__stat--workshops">
              <span className="program__icon" aria-hidden="true">
                <img src="/cam.svg" alt="" />
              </span>
              <span>18 workshops live</span>
            </div>
            <div className="program__stat program__stat--cases">
              <span className="program__icon" aria-hidden="true">
                <img src="/flag.svg" alt="" />
              </span>
              <span>+30 cas pratiques</span>
            </div>
            <div className="program__stat program__stat--duration">
              <span className="program__icon" aria-hidden="true">
                <img src="/people.svg" alt="" />
              </span>
              <span>Durée totale 24h</span>
            </div>
          </div>

          <div className="program__list">
            <div className="program__row">
              <span className="program__module">Module 1</span>
              <span className="program__topic">The International Instructor Era</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 2</span>
              <span className="program__topic">Teaching Kids to Ski</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 3</span>
              <span className="program__topic">Teens & Adults: Coaching the Mindset</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 4</span>
              <span className="program__topic">Mountain Language: Safety & Environment</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 5</span>
              <span className="program__topic">Technical Progression & Group Management</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 6</span>
              <span className="program__topic">Wrap-up, Role Plays & Certification</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq" data-scroll-theme="dark">
        <div className="faq__inner">
          <h2 className="faq__title">QUESTIONS FRÉQUEMMENT POSÉES</h2>
          <div className="faq__list">
            <details className="faq__item">
              <summary>
                <span>Est-ce que ça prend beaucoup de temps ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p>
                  Non. La formation est pensée pour un planning de saison. Tu avances
                  avec des modules courts (10-20 min) + des exercices terrain.
                  Objectif : progresser régulièrement, sans &quot;devoirs
                  scolaires&quot;.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Faut-il déjà être bon en anglais ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p>
                  Pas besoin d’être bilingue. Un niveau A1/A2 suffit pour démarrer :
                  on part de phrases simples, claires, répétées, et adaptées au ski.
                  Si tu es déjà B1/B2, tu iras plus vite et tu gagneras en fluidité
                  + vocabulaire pro.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Combien coûte la formation ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p>
                  La formation coûte 1 180 €. Bonne nouvelle : la formation peut être
                  financée via ton OPCO selon ton statut et ta situation. Des
                  questions ? 07 XX XX XX XX
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Quels résultats concrets puis-je attendre ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p>
                  Concrètement, tu seras capable de : donner un cours en anglais du
                  début à la fin (accueil, consignes, corrections) ; gérer un groupe
                  + rassurer un client stressé ; expliquer la technique avec des mots
                  simples (sans jargon) ; proposer la suite naturellement (cours
                  privé, progression, planning). Le résultat attendu : plus de
                  confiance, plus de fluidité, et plus d’opportunités de privé.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Je peux faire ça en parallèle du travail ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p>
                  Oui. C’est fait pour ça. Tu peux avancer le soir, entre deux
                  journées, ou sur tes jours off. Tout est accessible en ligne, et
                  tu peux reprendre exactement où tu t’es arrêté.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Est-ce valorisable sur un CV ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p>
                  Oui. Tu peux le valoriser comme : &quot;Anglais professionnel –
                  Moniteur de ski (communication client, sécurité, coaching, vente
                  de prestations)&quot;. Et si tu passes l’évaluation finale, tu
                  peux mentionner la certification/attestation associée (selon ton
                  dispositif).
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Je peux l’appliquer avec mes cours actuels ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p>
                  Oui, immédiatement. Chaque module te donne des &quot;scripts&quot;
                  et phrases prêtes à l’emploi à utiliser dès ton prochain cours
                  (collectif ou privé). Tu n’apprends pas de la théorie : tu
                  t’entraînes sur des situations réelles de moniteur.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Différence avec une formation d’anglais classique ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p>
                  Une formation classique te fait travailler la grammaire et des
                  sujets généraux. Ici, c’est 100% ski + terrain : consignes,
                  sécurité, corrections, gestion de groupe ; psychologie client
                  (peur, confiance, motivation) ; scripts &quot;client-ready&quot;
                  pour accueillir et proposer la suite. Résultat : tu progresses
                  plus vite parce que tu utilises tout dans la vraie vie.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="action" data-scroll-theme="dark">
        <div className="action__inner">
          <p className="action__eyebrow">Passez à l’action</p>
          <h2 className="action__title">
            <span className="action__title-line">TRANSFORMEZ VOTRE</span>
            <span className="action__title-line">
              <AnnotatedCircle
                className="action__title-mark"
                color="#ffbd00"
                padding={8}
                strokeWidth={2.5}
                animationDuration={900}
                delay={450}
              >
                CARRIÈRE
              </AnnotatedCircle>
              <span className="action__title-tail">GRÂCE À L’ANGLAIS</span>
            </span>
          </h2>
          <p className="action__text">
            Avec Educaltitudes, suivez une méthode structurée et un
            accompagnement personnalisé.
          </p>
          <a className="action__cta" href="#" data-open-modal>
            Rejoindre la formation
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="action__wave" aria-hidden="true">
          <img src="/wave-2.svg" alt="" />
        </div>
      </section>
      <footer className="footer" id="contact" data-scroll-theme="light">
        <div className="footer__inner">
          <div className="footer__brand">
            <img className="footer__logo" src="/logo-color-trimmed.png" alt="EducAltitudes" />
          </div>
          <div className="footer__grid">
            <div className="footer__col">
              <p className="footer__heading">Informations</p>
              <ul className="footer__list">
                <li>
                  <a href="#">CGV</a>
                </li>
                <li>
                  <a href="#">CGU</a>
                </li>
                <li>
                  <a href="#">Mentions Légales</a>
                </li>
                <li>
                  <a href="#">Certification Qualiopi</a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <p className="footer__heading">Contact</p>
              <ul className="footer__list">
                <li>07 XX XX XX XX</li>
              </ul>
              <a className="footer__cta" href="#" data-open-modal>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M16 3v4M8 3v4M3 10h18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Réserver un appel
              </a>
            </div>
          </div>
          <div className="footer__cert">
            <img src="/logo-qualiopi.png" alt="Certification Qualiopi" />
          </div>
        </div>
      </footer>

      <LeadCaptureModal />
      <ScrollControls />
    </main>
  );
}
