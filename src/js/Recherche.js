import articlesCharge from '../../ressources/donnees/articles_100.json'
import HTMLUtils from './HTMLUtils';
import '../../ressources/css/article.css'

export default class Recherche {
   constructor() {
       this.articles = articlesCharge;
   }

   /**
    * Affiche l'écran de recherche d'articles
    */
   afficher() {
       const divArticles = document.createElement('div');

       divArticles.classList.add('articles');
       this.articles.forEach((article) => {
            divArticles.appendChild(this.genererResultatsRecherche(article));
       });
       document.getElementById('contenu').appendChild(divArticles);
   }

   /**
    * Génère un article
    * @param {object} article - objet contenant les informations pour un article
    * @returns {HTMLDivElement} div contenant l'article
    */
   genererResultatsRecherche(article) {
        const divArticle = document.createElement('div');

        divArticle.classList.add('article');
        divArticle.appendChild(this.genererImage(article));
        divArticle.appendChild(this.genererNomArticle(article));

        return divArticle;
   }

   /**
    * Génère l'image de l'article
    * @param {object} article - article à ajouter
    * @returns {HTMLImageElement} l'image de l'article
    */
   genererImage({objet: {photo}}) {
    const image = document.createElement('img');

    image.src = `images/${photo}`;

    return image;
   }

   genererNomArticle({objet: {nom}}) {
    const p = document.createElement('p');

    p.appendChild(HTMLUtils.creerNoeudTexte(nom));

    return p;
   }
}