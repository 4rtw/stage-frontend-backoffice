import { Enseignants } from "../Modele/Enseignants";

class EnseignantsService {
  ListEnseignants = [];

  ajouterEnseignants(nom, prenom, email) {
    let newEnseignants = new Enseignants();
    newEnseignants.nom = nom;
    newEnseignants.prenom = prenom;
    newEnseignants.email = email;

    this.ListEnseignants.push(newEnseignants);
  }
}
export default EnseignantsService;
