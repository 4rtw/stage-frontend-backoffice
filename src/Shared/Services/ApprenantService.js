import axios from "axios";
import { variables } from "../Variables/variables";

class ApprenantService {
  ajouterApprenant(apprenant) {
    console.log(apprenant);
    axios.post(variables.url + "apprenant", apprenant).then(response => {
      console.log(response);
    });
  }
}

export default ApprenantService;
