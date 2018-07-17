import '../../ressources/css/general.css';
import Connexion from "./Connexion";

window.addEventListener('load', load);

function load() {
    window.location.hash = 'connexion';
    const connexion = new Connexion();

    connexion.afficher();
}