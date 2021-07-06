import axios from "axios";
import { variables } from "..Variables/variables";

class EnseignantsService {
  ajouterEnseignants(Enseignants) {
    console.log(Enseignants);
    axios.post(variables.url + "Enseignanats", Enseignants).then(response =>{
      console.log(response);
    });
  }
}
export default EnseignantsService;
