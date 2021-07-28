import { Component } from "react";
import EnseignantsService from "../../../Shared/Services/EnseignantService";
import {Enseignants} from "../../../Shared/Modele/Enseignants";

class createEnseignants extends Component {
  enseignantsService = new EnseignantsService();

  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      matricule :0,
    };
  }

  createEnseignants = event => {
    event.preventDefault();

    let enseignants = new Enseignants();
    enseignants.matricule = this.state.matricule;
    enseignants.nom = this.state.nom;
    enseignants.prenom = this.state.prenom;

    this.enseignantsService.ajouterEnseignants(enseignants);
    console.log("Enseignants creer");

    this.setState({ nom: "", prenom: "", matricule: 0});
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  showEnseignants = () => {
    console.log(this.enseignantsService.ListEnseignants);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createEnseignants}>
          <input
            type="text"
            name="matricule"
            placeholder="Matricule de l'Enseignants"
            value={this.state.matricule}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="nom"
            placeholder="Nom de l'Enseignants"
            value={this.state.nom}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom de l'Enseignants"
            value={this.state.prenom}
            onChange={this.handleChange}
          />
          <input
            type="texte"
            name="exemple"
            placeholder="exemple"
            value={this.state.nom}
            onChange={this.handleChange}
          />
          <button type="submit">Créer</button>
        </form>
       
        <button onClick={() => this.showEnseignants()}>
          Show Enseignants
        </button>
      </div>
    );
  }
}
export default createEnseignants;
