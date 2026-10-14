export const blogPosts = [
  {
    "slug": "moving-portfolio-to-cloudflare",
    "publishedAt": "2026-03-29",
    "translations": {
      "eng": {
        "title": "Moving My Portfolio to Cloudflare",
        "excerpt": "Why I moved from a static CRA portfolio to React Router on Cloudflare Workers.",
        "body": [
          "This portfolio started as a classic Create React App project deployed to GitHub Pages. For a resume and a few project pages, that was a practical starting point.",
          "Adding a blog changes the structure of the site. Each article needs its own address, a meaningful title and a page that remains readable when opened directly or shared with someone else.",
          "React Router gives those pages explicit routes. A loader can select an article by its slug, while a shared layout keeps navigation and language controls consistent across the site.",
          "Cloudflare Workers provides a server runtime for that routing setup. It also leaves room for request-time logic if a future feature needs it; a blog does not require a database just to publish a few articles.",
          "A migration should preserve the useful parts of the old application. Reusing the portfolio components lets the hosting and routing change without forcing a complete redesign.",
          "The final check is the visitor journey: open a deep link, switch languages, return to the article list and read on a small screen. A successful build is only one part of that verification."
        ]
      },
      "esp": {
        "title": "Mi portfolio en Cloudflare",
        "excerpt": "Por qué pasé de un portfolio estático con CRA a React Router en Cloudflare Workers.",
        "body": [
          "Este portfolio comenzó como un proyecto clásico de Create React App publicado en GitHub Pages. Para un CV y algunas páginas de proyectos, era un punto de partida práctico.",
          "Agregar un blog cambia la estructura del sitio. Cada artículo necesita una dirección propia, un título claro y una página legible cuando se abre directamente o se comparte.",
          "React Router permite definir rutas explícitas. Un loader puede seleccionar un artículo por su slug, mientras un layout compartido mantiene la navegación y el selector de idioma en todo el sitio.",
          "Cloudflare Workers ofrece un entorno de servidor para esas rutas. También deja espacio para lógica por solicitud si una función futura la necesita; publicar unos artículos no requiere una base de datos.",
          "Una migración debe conservar lo útil de la aplicación anterior. Reutilizar los componentes del portfolio permite cambiar el alojamiento y las rutas sin obligar a rediseñar todo.",
          "La comprobación final es el recorrido del visitante: abrir un enlace directo, cambiar de idioma, volver a la lista y leer en una pantalla pequeña. Compilar correctamente es solo una parte de esa verificación."
        ]
      },
      "fre": {
        "title": "Mon portfolio sur Cloudflare",
        "excerpt": "Pourquoi je suis passé de CRA à React Router sur Cloudflare Workers.",
        "body": [
          "Ce portfolio a commencé comme un projet Create React App classique publié sur GitHub Pages. Pour un CV et quelques pages de projets, ce choix était pratique.",
          "Ajouter un blog change la structure du site. Chaque article a besoin de sa propre adresse, d’un titre clair et d’une page lisible lorsqu’on l’ouvre directement ou qu’on la partage.",
          "React Router permet de définir des routes explicites. Un loader sélectionne un article par son slug, tandis qu’une mise en page commune conserve la navigation et le choix de langue.",
          "Cloudflare Workers fournit un environnement serveur pour ces routes. Il permet aussi d’ajouter une logique par requête si une future fonction en a besoin ; quelques articles ne nécessitent pas une base de données.",
          "Une migration doit conserver les éléments utiles de l’application précédente. Réutiliser les composants du portfolio permet de changer l’hébergement et les routes sans tout redessiner.",
          "La vérification finale suit le parcours du visiteur : ouvrir un lien direct, changer de langue, revenir à la liste et lire sur un petit écran. Une compilation réussie n’est qu’une partie de ce contrôle."
        ]
      }
    }
  },
  {
    "slug": "why-blogging-belongs-in-a-portfolio",
    "publishedAt": "2026-03-28",
    "translations": {
      "eng": {
        "title": "Why Blogging Belongs in a Portfolio",
        "excerpt": "A portfolio shows outcomes. A blog explains the decisions behind them.",
        "body": [
          "A screenshot shows the finished interface, but rarely explains the constraints that shaped it. Writing gives those decisions a place beside the final result.",
          "A useful project note starts with a concrete problem: a slow page, a difficult deployment or a feature that became hard to maintain. Explain who was affected and what needed to improve.",
          "Then describe the alternatives and the tradeoff you chose. A small, simple solution can be more appropriate than a sophisticated one when the team, budget or deadline is limited.",
          "Include enough evidence to make the result understandable: a code example, a test that catches the original bug or a description of the user flow you verified. Avoid unsupported performance claims.",
          "It helps to separate what worked from what still needs attention. Naming a limitation gives a future maintainer a useful starting point and shows that the decision had a clear scope.",
          "For clients and interviewers, this writing makes the process visible. For the author, it becomes a record that can be revisited when a similar problem appears."
        ]
      },
      "esp": {
        "title": "Por qué un blog aporta a un portfolio",
        "excerpt": "El portfolio muestra resultados. El blog explica las decisiones que los hicieron posibles.",
        "body": [
          "Una captura muestra la interfaz terminada, pero rara vez explica las restricciones que le dieron forma. Escribir permite acompañar el resultado con esas decisiones.",
          "Una nota útil comienza con un problema concreto: una página lenta, un despliegue difícil o una función que cuesta mantener. Explicá a quién afectaba y qué debía mejorar.",
          "Después describí las alternativas y el compromiso elegido. Una solución pequeña y simple puede ser más adecuada que una sofisticada cuando el equipo, el presupuesto o el plazo son limitados.",
          "Incluí evidencia suficiente para entender el resultado: un ejemplo de código, una prueba que detecta el error original o el recorrido de usuario que verificaste. Evitá afirmar mejoras de rendimiento sin mediciones.",
          "Conviene distinguir lo que funcionó de lo que todavía necesita atención. Mencionar una limitación orienta a quien mantenga el proyecto y muestra el alcance de la decisión.",
          "Para clientes y entrevistadores, estos textos hacen visible el proceso. Para quien los escribe, forman un registro al que volver cuando aparece un problema similar."
        ]
      },
      "fre": {
        "title": "Pourquoi un blog enrichit un portfolio",
        "excerpt": "Le portfolio montre les résultats. Le blog explique les décisions qui les ont rendus possibles.",
        "body": [
          "Une capture montre l’interface terminée, mais explique rarement les contraintes qui l’ont façonnée. Écrire permet de présenter ces décisions avec le résultat.",
          "Une note utile commence par un problème concret : une page lente, un déploiement difficile ou une fonction compliquée à maintenir. Expliquez qui était concerné et ce qui devait s’améliorer.",
          "Décrivez ensuite les alternatives et le compromis choisi. Une solution simple peut mieux convenir qu’une solution sophistiquée lorsque l’équipe, le budget ou le délai sont limités.",
          "Ajoutez assez d’éléments pour comprendre le résultat : un exemple de code, un test qui détecte le bug initial ou le parcours utilisateur vérifié. Évitez les gains de performance sans mesures.",
          "Distinguer ce qui fonctionne de ce qui reste à améliorer aide la personne qui maintiendra le projet. Une limite explicite précise aussi la portée de la décision.",
          "Pour les clients et les recruteurs, ces textes rendent le processus visible. Pour leur auteur, ils constituent un historique utile quand un problème similaire revient."
        ]
      }
    }
  },
  {
    "slug": "replacing-conditionals-with-object-literals",
    "publishedAt": null,
    "translations": {
      "eng": {
        "title": "Replacing Conditionals with Object Literals",
        "excerpt": "An independent companion note to my Medium article: use a lookup table for discrete choices.",
        "body": [
          "My Medium article is titled “Replacing conditional statements with object literals.” This companion note explores that topic with a new example. The original text could not be retrieved for this edition, so the examples and guidance below are independently written.",
          "When a branch only maps one known value to another, an object literal can make that relationship easier to scan. For example, a status can map to the label shown in an interface.",
          "The table puts related choices together and keeps the default visible. Object.hasOwn checks that the key belongs to the table itself, including for inputs such as “toString”.",
          "Keep conditionals when you need ranges, several interacting conditions or ordered rules. A lookup table is useful for exact keys; it does not automatically simplify every decision.",
          "Before changing existing code, verify known keys, unknown keys and the fallback. If the values are functions, select the function first and then call it so unused branches do not run."
        ]
      },
      "esp": {
        "title": "Reemplazar condicionales por objetos literales",
        "excerpt": "Una nota independiente que acompaña mi artículo de Medium: tablas para opciones concretas.",
        "body": [
          "Mi artículo en Medium se titula “Replacing conditional statements with object literals”. Esta nota desarrolla ese tema con un ejemplo nuevo. No fue posible recuperar el texto original para esta edición, por lo que los ejemplos y las recomendaciones siguientes fueron escritos de forma independiente.",
          "Cuando una rama solo relaciona un valor conocido con otro, un objeto literal puede hacer más clara esa relación. Por ejemplo, un estado puede corresponder a la etiqueta que muestra una interfaz.",
          "La tabla reúne las opciones relacionadas y deja visible el valor por defecto. Object.hasOwn comprueba que la clave pertenece a la propia tabla, incluso para entradas como “toString”.",
          "Conservá los condicionales si necesitás rangos, varias condiciones combinadas o reglas ordenadas. Una tabla sirve para claves exactas; no simplifica automáticamente cualquier decisión.",
          "Antes de cambiar código existente, verificá las claves conocidas, las desconocidas y el valor por defecto. Si los valores son funciones, seleccioná primero la función y luego ejecutala para no evaluar ramas que no se usan."
        ]
      },
      "fre": {
        "title": "Remplacer les conditions par des objets littéraux",
        "excerpt": "Une note indépendante qui accompagne mon article Medium : des tables pour des choix précis.",
        "body": [
          "Mon article Medium s’intitule « Replacing conditional statements with object literals ». Cette note développe ce thème avec un nouvel exemple. Le texte original n’a pas pu être récupéré pour cette édition ; les exemples et les conseils ci-dessous ont donc été écrits indépendamment.",
          "Lorsqu’une branche associe simplement une valeur connue à une autre, un objet littéral peut rendre cette relation plus lisible. Un statut peut, par exemple, correspondre au libellé affiché dans une interface.",
          "La table regroupe les choix liés et rend la valeur par défaut visible. Object.hasOwn vérifie que la clé appartient à la table elle-même, y compris pour une entrée comme « toString ».",
          "Conservez les conditions pour des intervalles, plusieurs critères combinés ou des règles ordonnées. Une table convient aux clés exactes ; elle ne simplifie pas automatiquement toute décision.",
          "Avant de modifier le code, vérifiez les clés connues, les clés inconnues et le choix par défaut. Si les valeurs sont des fonctions, sélectionnez d’abord la fonction puis appelez-la pour ne pas exécuter les branches inutilisées."
        ]
      }
    },
    "source": "https://medium.com/@imadev/replacing-conditional-statements-with-object-literals-b7323b8a2ba0",
    "code": "const labels = {\n  draft: \"Draft\",\n  published: \"Published\",\n  archived: \"Archived\",\n};\n\nfunction statusLabel(status) {\n  return Object.hasOwn(labels, status)\n    ? labels[status]\n    : \"Unknown\";\n}"
  }
];
