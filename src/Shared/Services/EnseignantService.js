import { Enseignants } from "../Modele/Enseignants"

class EnseignantsService {
    ListService =[];

    ajouterEnseignants(nom,prenom,email){
        let newEnseignants = new Enseignants();
        newEnseignants.nom = nom;
        newEnseignants.prenom = prenom;
        newEnseignants.email = email;

        this.ListService.push(newEnseignants);
    }
}
export default EnseignantsService