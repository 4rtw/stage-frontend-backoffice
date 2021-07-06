import axios from "axios";
import { variables } from "../Variables/variables";//mcreer dossier Variables de aveo mamorona file ataoa variables 

class EnseignantsService {
  ajouterEnseignants(enseignants) {
    console.log(enseignants);
    axios.post(variables.url + "/enseignant", enseignants).then(response =>{
      console.log(response);
    });
  }
}
export default EnseignantsService;
