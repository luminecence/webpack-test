import HTMLUtils from "./HTMLUtils";
import Recherche from "./Recherche";

export default class Connexion {
   afficher() {
    const formulaire = document.createElement('form'),
        saisieUtilisateur = this.genererChampUtilisateur(),
        saisieMotDePasse = this.genererChampMotDePasse(),
        bouton = this.genererBoutonValider(),
        contenu = document.getElementById('contenu');

    formulaire.appendChild(saisieUtilisateur);
    formulaire.appendChild(saisieMotDePasse);
    formulaire.appendChild(bouton);
    contenu.appendChild(formulaire);
   }

   genererChampUtilisateur() {
    const libelleChamp = document.createElement('input'),
        champSaisie = document.createElement('label'),
        divEnglobante = document.createElement('div');

    divEnglobante.classList.add('saisieUtilisateur');
    divEnglobante.appendChild(libelleChamp);
    divEnglobante.appendChild(champSaisie);

    return divEnglobante;
   }

   genererChampMotDePasse() {
    const libelleChamp = document.createElement('input'),
        champSaisie = document.createElement('label'),
        divEnglobante = document.createElement('div');

    champSaisie.type = 'password';
    divEnglobante.classList.add('saisieUtilisateur');
    divEnglobante.appendChild(libelleChamp);
    divEnglobante.appendChild(champSaisie);

    return divEnglobante;
   }

   genererBoutonValider() {
    const bouton = document.createElement('bouton');

    bouton.type = 'button';
    bouton.appendChild(HTMLUtils.creerNoeudTexte('valider'));
    bouton.onclick = () => {
        //routeur
        const contenu = document.getElementById('contenu');

        contenu.childNodes.forEach((element) => {
            element.parentNode.removeChild(element);
        });
        window.location.hash = 'rechercherArticle';
        new Recherche().afficher();
    }

    return bouton;
   }
}