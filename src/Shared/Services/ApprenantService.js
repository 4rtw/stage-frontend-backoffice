import { Apprenant } from "../Models/Apprenant";

class ApprenantService {
  // Azo atsoina 1
  // Solon'ny DB
  ListApprenants = [];

  // Azo atsoina 2
  ajouterApprenant(nom, prenom, email) {
    // créer apprenant manana valeur de champ par défaut (nom:"", prenom:"", email:"")
    let newApprenant = new Apprenant();
    // miaffecter an'ilay valeur an'ny nom ao @ parametres makany @ newApprenant vao nocréerna
    newApprenant.nom = nom;
    // miaffecter an'ilay valeur an'ny prenom ao @ parametres makany @ newApprenant vao nocréerna
    newApprenant.prenom = prenom;
    // miaffecter an'ilay valeur an'ny email ao @ parametres makany @ newApprenant vao nocréerna
    newApprenant.email = email;

    // Eto aho manana newApprenant (nom, prenom, email) izay nopasserna tao @ parametres

    // miPush newApprenant ao anaty tableau
    this.ListApprenants.push(newApprenant);
  }
}

export default ApprenantService;
