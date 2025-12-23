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
              <span>Durée totale 35h</span>
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

      <section className="bootcamp" data-scroll-theme="dark">
        <div className="bootcamp__inner">
          <h2 className="bootcamp__title">Prochains Batch</h2>
          <div className="bootcamp__grid">
            <div className="bootcamp__card bootcamp__card--date">
              <p className="bootcamp__date">lundi 19 janvier 2026</p>
              <a className="bootcamp__cta" href="#" data-open-modal>
                S&apos;inscrire
              </a>
            </div>
            <div className="bootcamp__card bootcamp__card--price">
              <p className="bootcamp__price">
                <span className="bootcamp__price-value">1050€</span>
                <span className="bootcamp__price-unit">HT</span>
              </p>
              <p className="bootcamp__contact">
                07 XX XX XX XX
              </p>
              <ul className="bootcamp__list">
                <li>6 modules e-learning “anglais moniteur”</li>
                <li>Accès à la plateforme + mises à jour</li>
                <li>Ateliers live (Q&amp;A + mises en situation)</li>
                <li>Communauté moniteurs + ressources</li>
                <li>Vocabulaire technique + psychologie client</li>
                <li>Financement possible (OPCO / employeur)</li>
              </ul>
              <a className="bootcamp__reserve" href="#" data-open-modal>
                Je réserve ma place
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq" data-scroll-theme="dark">
        <div className="faq__inner">
          <h2 className="faq__title">
            QUESTIONS
            <br />
            FRÉQUEMMENT&nbsp;POSÉES
          </h2>
          <div className="faq__list">
            <details className="faq__item">
              <summary>
                <span>Quel temps faut-il prévoir pour suivre la formation ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">Pensée pour un planning de saison :</p>
                <ul className="faq__bullets">
                  <li>Modules courts (10-20 min) faciles à caler.</li>
                  <li>Exercices terrain entre deux cours.</li>
                  <li>Progression régulière, sans &quot;devoirs scolaires&quot;.</li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Quel niveau d’anglais faut-il avoir ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">Pas besoin d’être bilingue :</p>
                <ul className="faq__bullets">
                  <li>
                    Un niveau A1/A2 suffit pour démarrer, avec des phrases simples
                    et adaptées au ski.
                  </li>
                  <li>
                    Si tu es déjà B1/B2, tu progresses plus vite et tu gagnes en
                    fluidité + vocabulaire pro.
                  </li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Quel est le tarif de la formation ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">Tarif et financement :</p>
                <ul className="faq__bullets">
                  <li>La formation coûte 1 050 €.</li>
                  <li>Financement possible via ton OPCO selon ton statut et ta situation.</li>
                  <li>Questions ? 07 XX XX XX XX.</li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Quels résultats concrets la formation permet-elle d’obtenir ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">Concrètement, tu seras capable de :</p>
                <ul className="faq__bullets">
                  <li>Donner un cours en anglais du début à la fin (accueil, consignes, corrections).</li>
                  <li>Gérer un groupe + rassurer un client stressé.</li>
                  <li>Expliquer la technique avec des mots simples, sans jargon.</li>
                  <li>Proposer la suite naturellement (cours privé, progression, planning).</li>
                  <li>Résultat attendu : plus de confiance, plus de fluidité, et plus d’opportunités de privé.</li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Comment intégrer la formation à mon emploi du temps ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">C’est fait pour un planning de saison :</p>
                <ul className="faq__bullets">
                  <li>Tu avances le soir, entre deux journées, ou sur tes jours off.</li>
                  <li>Tout est accessible en ligne.</li>
                  <li>Tu reprends exactement où tu t’es arrêté.</li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Comment la formation peut-elle être valorisée sur un CV ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">Tu peux la valoriser comme :</p>
                <ul className="faq__bullets">
                  <li>
                    &quot;Anglais professionnel – Moniteur de ski (communication
                    client, sécurité, coaching, vente de prestations)&quot;.
                  </li>
                  <li>
                    Si tu passes l’évaluation finale, tu peux mentionner la
                    certification/attestation associée (selon ton dispositif).
                  </li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Comment l’appliquer dès mes cours actuels ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">Dès le prochain cours :</p>
                <ul className="faq__bullets">
                  <li>Scripts et phrases prêtes à l’emploi pour collectif ou privé.</li>
                  <li>Tu t’entraînes sur des situations réelles de moniteur, pas de théorie.</li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>En quoi cette formation se distingue d’une formation d’anglais ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">Ici, c’est 100% ski + terrain :</p>
                <ul className="faq__bullets">
                  <li>Consignes, sécurité, corrections, gestion de groupe.</li>
                  <li>Psychologie client (peur, confiance, motivation).</li>
                  <li>Scripts &quot;client-ready&quot; pour accueillir et proposer la suite.</li>
                  <li>Tu progresses plus vite parce que tu utilises tout dans la vraie vie.</li>
                </ul>
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
