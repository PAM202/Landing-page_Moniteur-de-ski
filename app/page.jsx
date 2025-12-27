import AnnotatedCircle from "./components/AnnotatedCircle";
import CountdownTimer from "./components/CountdownTimer";
import CouponPopup from "./components/CouponPopup";
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
              <span className="hero__title-top">Parler anglais, c’est</span>
              <span className="hero__title-line">
                <span className="hero__title-nowrap">
                  remplir son <AnnotatedCircle>planning</AnnotatedCircle>
                </span>
              </span>
            </h1>
            <p className="hero__subtitle">
              Formation dédiée aux moniteurs de ski qui souhaitent développer
              leur activité grâce à l’anglais sur les{"\u00A0"}pistes.
            </p>
            <a className="hero__cta" href="#" data-open-modal>
              Je deviens moniteur bilingue
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </section>

      <section className="testimonials" id="temoignages" data-scroll-theme="light">
        <div className="testimonials__inner">
          <h2 className="testimonials__title">
            Ils ont suivi la formation, ils racontent
          </h2>
          <div className="testimonials__grid">
            <figure className="testimonial">
              <div className="testimonial__bubble">
                <p className="testimonial__quote">
                  En deux semaines j’étais capable d’accueillir et briefer mes groupes en anglais sans chercher mes mots.
                </p>
              </div>
              <figcaption className="testimonial__meta">
                <span className="testimonial__avatar" aria-hidden="true">C</span>
                <div className="testimonial__person">
                  <span className="testimonial__name">Claire, ESF Les Arcs</span>
                  <span className="testimonial__role">Monitrice depuis 6 ans</span>
                </div>
              </figcaption>
            </figure>

            <figure className="testimonial">
              <div className="testimonial__bubble">
                <p className="testimonial__quote">
                  Les scripts terrain sont prêts à l’emploi : check matériel, sécurité, corrections. Ça m’a fait gagner en confiance directe.
                </p>
              </div>
              <figcaption className="testimonial__meta">
                <span className="testimonial__avatar" aria-hidden="true">J</span>
                <div className="testimonial__person">
                  <span className="testimonial__name">Julien, Chamrousse</span>
                  <span className="testimonial__role">Coach freeride</span>
                </div>
              </figcaption>
            </figure>

            <figure className="testimonial">
              <div className="testimonial__bubble">
                <p className="testimonial__quote">
                  Je vends plus de cours privés grâce à l’anglais. Les parents me demandent spontanément d’accompagner leurs enfants toute la semaine.
                </p>
              </div>
              <figcaption className="testimonial__meta">
                <span className="testimonial__avatar" aria-hidden="true">S</span>
                <div className="testimonial__person">
                  <span className="testimonial__name">Sophie, Serre Che</span>
                  <span className="testimonial__role">Spécialiste enfants</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="insight" data-scroll-theme="light">
        <div className="insight__inner">
          <div className="insight__media">
            <img src="/Olympic.jpg" alt="Moniteurs de ski souriants en station" />
          </div>
          <div className="insight__content">
            <h3 className="insight__title">
              La maîtrise de l’anglais n&apos;est plus une option.
            </h3>
            <p className="insight__text">
              1 client sur 3 ne parle pas français.
              L’anglais est aujourd’hui le levier n°1 pour remplir son planning et fidéliser une clientèle internationale.
            </p>
            <p className="insight__text">
              &nbsp;
            </p>
            <p className="insight__text">
              Et avec l’arrivée des JO 2030, cette dynamique internationale ne fera que s’accélérer dans les années à venir.
            </p>
          </div>
        </div>
      </section>

      <PanelSlider />

      <section className="human" data-scroll-theme="dark">
        <div className="human__inner">
          <div className="human__content">
            <h2 className="human__title">
              Découvrez la formation 100% dédiée aux{" "}
              <AnnotatedCircle>moniteurs de ski</AnnotatedCircle>
            </h2>
          </div>
          <div className="human__media">
            <img src="/skieur-action.png" alt="Moniteur de ski en action" />
          </div>
        </div>
      </section>

      <section className="program" id="programme" data-scroll-theme="light">
        <div className="program__inner">
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
          <h2 className="program__title">PROGRAMME</h2>

          <div className="program__list">
            <div className="program__row">
              <span className="program__module">Module 1</span>
              <span className="program__topic">L’anglais : le nouveau standard du moniteur</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 2</span>
              <span className="program__topic">Enseigner le ski aux enfants</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 3</span>
              <span className="program__topic">Adolescents & adultes : coacher l’état d’esprit</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 4</span>
              <span className="program__topic">Langage de la montagne : sécurité & environnement</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 5</span>
              <span className="program__topic">Progression technique & gestion de groupe</span>
            </div>
            <div className="program__row">
              <span className="program__module">Module 6</span>
              <span className="program__topic">Conclusion, jeux de rôle & certification</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bootcamp" data-scroll-theme="dark">
        <div className="bootcamp__inner">
          <h2 className="bootcamp__title">Prochaines dates</h2>
          <div className="bootcamp__grid">
            <div className="bootcamp__dates">
              <div className="bootcamp__card bootcamp__card--date">
                <span className="bootcamp__badge">-10%</span>
                <p className="bootcamp__date">lundi 19 janvier 2026</p>
                <div className="bootcamp__cta-row">
                  <a className="bootcamp__cta bootcamp__cta--small" href="#" data-open-modal>
                    S&apos;inscrire
                  </a>
                  <CountdownTimer />
                </div>
              </div>
              <div className="bootcamp__card bootcamp__card--date">
                <p className="bootcamp__date">lundi 2 février 2026</p>
                <div className="bootcamp__cta-row">
                  <a className="bootcamp__cta bootcamp__cta--small" href="#" data-open-modal>
                    S&apos;inscrire
                  </a>
                </div>
              </div>
            </div>
            <div className="bootcamp__card bootcamp__card--price">
              <p className="bootcamp__price">
                <span className="bootcamp__price-value">1050€</span>
                <span className="bootcamp__price-unit">HT</span>
              </p>
              <p className="bootcamp__contact">
                06 07 34 96 92
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
                <p className="faq__lead">
                  Cette formation a été conçue pour s&apos;adapter à un rythme saisonnier intense. Elle se compose de modules courts faciles à intégrer dans votre agenda. L&apos;apprentissage privilégie la mise en pratique immédiate sur le terrain sans avoir de &quot;devoirs&quot; à faire le soir.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Quel niveau d’anglais faut-il avoir ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">
                  Non, la formation est accessible dès le niveau A1/A2, avec un apprentissage basé sur des phrases simples et ciblées.
                </p>
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
                  <li>Questions ? 06 07 34 96 92.</li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Quels résultats concrets la formation permet-elle d’obtenir ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">
                  À l&apos;issue de la formation, l&apos;apprenant sera en mesure de :
                </p>
                <ul className="faq__bullets">
                  <li>Dispenser une leçon en anglais dans son intégralité (accueil, consignes de sécurité, corrections).</li>
                  <li>Encadrer un groupe et apaiser les clients stressés.</li>
                  <li>Vulgariser la technique pour la rendre compréhensible par tous.</li>
                  <li>Conseiller et vendre la suite de la progression (cours privés, réservation future).</li>
                </ul>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Comment intégrer la formation à mon emploi du temps ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">
                  Le programme est spécifiquement conçu pour s&apos;adapter au rythme intense d&apos;une saison. Tout est accessible en ligne 24h/24 : vous pouvez avancer en soirée, entre deux cours ou lors de vos jours de repos. La plateforme sauvegarde votre progression automatiquement, vous permettant de reprendre exactement là où vous vous êtes arrêté.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Comment la formation peut-elle être valorisée sur un CV ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">
                  Vous pouvez présenter cette compétence sous l&apos;intitulé : &quot;Anglais professionnel appliqué à l&apos;enseignement du ski (communication client, sécurité, pédagogie, vente)&quot;. Si vous validez l&apos;évaluation finale, n&apos;oubliez pas de mentionner l&apos;attestation ou la certification obtenue.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>Comment l’appliquer dès mes cours actuels ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">
                  Oui, dès votre prochain cours. Vous disposez de scripts et de phrases clés prêts à l&apos;emploi, adaptés aux cours collectifs comme aux leçons particulières. L&apos;entraînement se base exclusivement sur des situations réelles d&apos;enseignement, sans théorie superflue.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary>
                <span>En quoi cette formation se distingue-t-elle d’une formation d’anglais classique ?</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq__answer">
                <p className="faq__lead">
                  Cette formation est 100% dédiée au &quot;terrain&quot;. Elle cible spécifiquement les consignes techniques, la sécurité, et la psychologie du client (gestion de la peur, motivation). Grâce à cette approche pragmatique, vous progressez plus vite car chaque notion apprise est immédiatement utile dans votre quotidien professionnel.
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
              <span className="action__title-nowrap">
                <span className="action__title-mark">CARRIÈRE</span>{" "}
                <span className="action__title-tail">GRÂCE À L’ANGLAIS</span>
              </span>
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
                  <a href="/cgv">CGV</a>
                </li>
                <li>
                  <a href="#">CGU</a>
                </li>
                <li>
                  <a href="/mentions-legales">Mentions Légales</a>
                </li>
                <li>
                  <a href="#">Certification Qualiopi</a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <p className="footer__heading">Contact</p>
              <ul className="footer__list">
                <li>06 07 34 96 92</li>
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
              <div className="footer__socials">
                <a
                  className="footer__social-link"
                  href="https://www.instagram.com/educaltitudes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/Instagram_Glyph_White.svg" alt="Instagram EducAltitudes" />
                </a>
                <a
                  className="footer__social-link"
                  href="https://www.facebook.com/educaltitudes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/Facebook_Logo_Secondary.png" alt="Facebook EducAltitudes" />
                </a>
                <a
                  className="footer__social-link"
                  href="https://www.linkedin.com/company/educ-altitudes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/LinkedIn-Icon-Logo.wine.svg" alt="LinkedIn EducAltitudes" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__cert">
            <img src="/logo-qualiopi.png" alt="Certification Qualiopi" />
          </div>
        </div>
      </footer>

      <CouponPopup />
      <LeadCaptureModal />
      <ScrollControls />
    </main>
  );
}
