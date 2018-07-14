import Recherche from "./Recherche";
import '../../ressources/css/general.css';

window.addEventListener('load', load);

function load() {
    const recherche = new Recherche();

    recherche.afficher();
}