import { technologies } from "../constants/technologies";
import { media, repos, webs } from "../constants/links";
import { logos } from "../constants/logos";

export const projects = [
  {
    name: "REVAI",
    logo: logos.REVAI,
    engText:
      "Start Up project which mission is to give people the power to manage their own medical data. Used technologies:",
    spaText:
      "Proyecto de Start Up cuya misión es brindar a las personas el poder de su historia clínica, citas médicas, etc. Tecnologías utilizadas:",
    freText:
      "Start Up Projet dont la mission est de donner aux gens la force de leurs antécédents médicaux, de leurs rendez-vous médicaux, etc. Des technologies utilisées:",
    technologies: {
      icons: [
        technologies.ReactJs,
        technologies.Redux,
        technologies.Node,
        technologies.Express,
        technologies.MySql,
        technologies.Sequelize,
        technologies.MongoDB,
        technologies.TypeScript,
        technologies.Docker,
      ],
      texts: {
        esp: ["- Muchas otras librerías menores"],
        eng: ["- A lot of other minor libraries"],
        fre: ["- Beaucoup d'autres bibliothèques mineures"],
      },
    },
    webSite: webs.REVAI,
    repo: false,
  },
  {
    name: "MOONBANK",
    logo: logos.moonbank,
    engText:
      "Virtual wallet (fintech) specializing in the management of, and dollars, recharging credit, using our own card, paying the services, a help chat and so on. Used technologies:",
    spaText:
      "Billetera virtual (Fintech) para la gestión de dinero, con características como la compra-venta de dólares, recarga de crédito por diversos medios, pago du servicios, un chat de ayuda y mucho más. Tecnologías utilizadas:",
    freText:
      "Portefeuille virtuel (Fintech) pour la gestion de devises, avec des fonctionnalités telles que l'achat et la vente de dollars, la recharge de crédit par divers moyens, le paiement des services, un chat d'aide et bien plus encore. Des technologies utilisées:",
    technologies: {
      icons: [
        technologies.ReactJs,
        technologies.Redux,
        technologies.Expo,
        technologies.Node,
        technologies.Firebase,
      ],
      texts: {
        esp: ["- Algunas otras librerías menores"],
        eng: ["- Some other minor libraries"],
        fre: ["- Quelques autres bibliothèques mineures"],
      },
    },
    webSite: false,
    repo: repos.MOONKBANK,
    video: media.MOONKBANK_VIDEO,
  },
  {
    name: "Fast Shopping",
    logo: logos.FastShopping,
    engText: "Simple but elegant shopping cart. Used technologies:",
    spaText: "Imple pero elegante carrito de compras. Tecnologías utilizadas:",
    freText: "Panier simple mais élégant. Des technologies utilisées:",
    technologies: {
      icons: [
        technologies.ReactJs,
        technologies.Redux,
        technologies.StyledComponents,
        technologies.MaterialUI,
        technologies.Node,
        technologies.Express,
        technologies.Sequelize,
        technologies.MySQL,
        technologies.Heroku,
      ],
    },
    webSite: webs.FAST_SHOPPING,
    repo: repos.FAST_SHOPPING,
  },
  {
    name: "ARGENCLIMA",
    logo: logos.argenClima,
    engText:
      "React project with learning porpose, it's a weather app focus only in the Argentine provinces, for each one of then also include an extract from wikipedia. Used technologies:",
    spaText:
      "Proyecto React con propósito de aprendizaje, es una aplicación meteorológica enfocada solo en las provincias argentinas, para cada una de ellas también se incluye un extracto de wikipedia. Tecnologías utilizadas:",
    freText:
      "Start Up Projet dont la mission est de donner aux gens la force de leurs antécédents médicaux, de leurs rendez-vous médicaux, etc. Des technologies utilisées:",
    technologies: {
      icons: [
        technologies.ReactJs,
        technologies.IndexedDB,
        technologies.StyledComponents,
        technologies.Context,
        technologies.FirebaseHosting,
      ],
      texts: false,
    },
    webSite: webs.ARGENCLIMA,
    repo: repos.ARGENCLIMA,
  },
  {
    name: "CYBERFITNESS",
    logo: logos.cyberFitness,
    engText:
      "It is an e-commerce carried out as a first great mission, in which my colleagues and I combine all the technologies learned in the #SoyHenry bootcamp. Used technologies:",
    spaText:
      "Se trata de un e-commerce realizado como primer gran encargo, en el cual mis colegas y yo unimos todas las tecnologías aprendidas en el bootcamp #SoyHenry. Tecnologías usadas:",
    freText:
      "Il s'agit d'un e-commerce réalisé comme une première grosse mission, dans laquelle mes collègues et moi rejoignons toutes les technologies apprises au bootcamp #SoyHenry. Des technologies utilisées:",
    technologies: {
      icons: [
        technologies.ReactJs,
        technologies.Redux,
        technologies.MaterialUI,
        technologies.Node,
        technologies.Postgres,
        technologies.Express,
        technologies.Sequelize,
        technologies.ReactJs,
        technologies.JWToken,
        technologies.Passport,
      ],
      texts: {
        eng: ["- Several Third-party login methods", "- Other minor libraries"],
        esp: [
          "- Varios métodos de autenticación de terceros",
          "- Otras librerías menores",
        ],
        fre: [
          "- Diverses méthodes d'authentification tierces",
          "- Des otres libreries mineures",
        ],
      },
    },
    webSite: false,
    repo: repos.CYBERFITNESS,
  },
  {
    name: "PORTFOLIO",
    logo: logos.imadev,
    engText:
      "This is my personal Website / Portfolio where you can see my career as a developer and was created with:",
    spaText:
      "Este es mi sitio personal / portafolio donde puedes encontrar mi trayectoria como desarrollador y fue creado con:",
    freText:
      "Ceci est mon site personnel / portfolio où vous pouvez trouver mon expérience en tant que développeur et il a été créé avec:",
    technologies: {
      icons: [
        technologies.ReactJs,
        technologies.MaterialUI,
        technologies.EmailJs,
        technologies.Figma,
        technologies.YouTube,
      ],
    },
    webSite: webs.PORTFOLIO,
    repo: repos.PORTFOLIO,
  },
];
