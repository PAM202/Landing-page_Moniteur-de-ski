export const metadata = {
  title: "Mentions légales | Educ’Altitudes",
  description:
    "Mentions légales et informations juridiques d’Educ’Altitudes : entreprise, propriété intellectuelle, données personnelles, cookies et liens externes."
};

export default function MentionsLegalesPage() {
  return (
    <main className="legal">
      <div className="legal__inner">
        <h1 className="legal__title">Mentions légales</h1>

        <section className="legal__section">
          <h2 className="legal__heading">Avis juridiques</h2>
          <ul className="legal__list">
            <li>
              <strong>Nom de l’entreprise :</strong> EDUC’ALTITUDES
            </li>
            <li>
              <strong>Forme Juridique :</strong> SARL au capital de 5000 € enregistrée au RCS de Gap
            </li>
            <li>
              <strong>Représentante légale :</strong> Directrice générale : Myriam PICQ
            </li>
            <li>
              <strong>Siège social :</strong> 51 Route des Eyssagnières 05000 GAP
            </li>
            <li>
              <strong>Coordonnées mail :</strong> educ.altitudes@gmail.com
            </li>
            <li>
              <strong>SIRET :</strong> 901 761 312 000 23
            </li>
            <li>
              <strong>Code APE :</strong> 85 59 A
            </li>
            <li>
              <strong>N° Déclaration d’Activité de Formation :</strong> 93050103605 déclaré auprès de la
              DREETS PACA
            </li>
            <li>
              <strong>N° TVA :</strong> FR23 901 761 312
            </li>
            <li>
              <strong>N° Habilitation INRS :</strong> H32091/2023/SST-1/O/06
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2 className="legal__heading">Droits d’auteur</h2>
          <p className="legal__text">
            En application du Code français de la propriété intellectuelle et plus généralement des traités et
            accords internationaux comportant des dispositions relatives à la protection des droits d’auteurs,
            il est interdit pour un usage autre que privé de reproduire, vendre, diffuser, modifier, publier
            intégralement ou partiellement, sous quelque forme que ce soit les données, la présentation ou
            l’organisation du site ainsi que les œuvres protégées par les droits d’auteur qui y figurent, sans
            autorisation écrite particulière et préalable de la direction d’Educ’Altitudes.
          </p>
          <p className="legal__text">
            De façon générale, toute reproduction ou représentation non autorisée de marques, logos, dessins,
            modèles, d’œuvres littéraires, musicales, audiovisuelles, photographiques et plus généralement de
            tout élément susceptible d’être protégé par un droit de propriété intellectuelle accessibles sur le
            site est interdite et constituerait une contrefaçon au sens des articles L335-2 et suivants du Code
            de la Propriété Intellectuelle, à moins que cette reproduction ou représentation ne soit
            exclusivement réservée à un usage strictement personnel et privé.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__heading">Sécurité, confidentialité et sauvegarde de vos données</h2>
          <p className="legal__text">
            Educ’Altitudes s’assure que les traitements de données à caractère personnel bénéficient du
            meilleur niveau de sécurité. Vos données sont ainsi stockées sur un serveur dont le data center est
            situé dans l’Union Européenne. Notre site internet est également sécurisé par un protocole https
            (SSL), un protocole de communication Internet qui protège l’intégrité ainsi que la confidentialité
            des données lors du transfert d’informations entre l’ordinateur de l’internaute et le site.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__heading">Cookies</h2>
          <p className="legal__text">
            Le terme « cookie » recouvre les différents traceurs qui sont déposés ou lus sur votre terminal
            (ordinateur, tablette, smartphone…) lors de votre navigation sur des pages internet.
          </p>
          <p className="legal__text">
            Notre association n’a développé aucun cookie d’analyse comportementale, mais pour pouvoir
            fonctionner le site https://educ-altitudes.com utilise des cookies, dont vous trouverez la liste
            ci-dessous, et que vous ne pourrez pas refuser.
          </p>
          <p className="legal__text">
            Les cookies nécessaires sont absolument essentiels au bon fonctionnement du site web. Cette
            catégorie correspond uniquement aux cookies qui assurent les fonctionnalités de base et les
            fonctionnalités de sécurité du site web. Ces cookies ne stockent aucune information personnelle.
          </p>
          <p className="legal__text">
            En revanche, certains cookies sont utilisés pour d’autres finalités, vous pouvez vous informer sur la
            nature des cookies déposés, les accepter ou les refuser globalement pour l’ensemble du site et
            l’ensemble des services, soit service par service.
          </p>
          <div className="legal__cookie-groups">
            <div>
              <p className="legal__subheading">Nécessaires</p>
              <p className="legal__text">
                Les cookies nécessaires sont cruciaux pour les fonctions de base du site Web et celui-ci ne
                fonctionnera pas comme prévu sans eux. Ces cookies ne stockent aucune donnée personnellement
                identifiable.
              </p>
            </div>
            <div>
              <p className="legal__subheading">Analytique</p>
              <p className="legal__text">
                Les cookies analytiques sont utilisés pour comprendre comment les visiteurs interagissent avec
                le site Web. Ces cookies aident à fournir des informations sur le nombre de visiteurs, le taux
                de rebond, la source de trafic, etc.
              </p>
            </div>
            <div>
              <p className="legal__subheading">Publicité</p>
              <p className="legal__text">
                Les cookies de publicité sont utilisés pour fournir aux visiteurs des publicités personnalisées
                basées sur les pages visitées précédemment et analyser l’efficacité de la campagne publicitaire.
              </p>
            </div>
          </div>
        </section>

        <section className="legal__section">
          <h2 className="legal__heading">Liens vers les sites extérieurs</h2>
          <p className="legal__text">
            Educ’Altitudes contient des liens vers d’autres sites web gérés par des tiers. Ces liens constituent
            une aide à l’utilisation et à la compréhension des informations mises en ligne. Educ’Altitudes
            n’exerce aucun contrôle et n’assume aucune responsabilité quant aux contenus de ces sites tiers.
          </p>
        </section>
      </div>
    </main>
  );
}
