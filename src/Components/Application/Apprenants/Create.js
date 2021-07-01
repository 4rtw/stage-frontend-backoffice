import { Component } from "react";
import ApprenantService from "../../../Shared/Services/ApprenantService";

class CreateApprenants extends Component {
  // Micréer instance ana apprenantService
  apprenantService = new ApprenantService();

  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
    };
  }

  createApprenant = event => {
    // Empecher refresh quand on submit
    event.preventDefault();

    // Miantso apprenantService mba anao opération de persistence: ajouterApprenant()
    // Dia passer-na ao ilay valeur ilaina
    this.apprenantService.ajouterApprenant(
      this.state.nom,
      this.state.prenom,
      this.state.email
    );
    console.log("Apprenant créé");

    // Manao reset ilay champ rehefa avy manao submit
    this.setState({ nom: "", prenom: "", email: "" });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Miantso service mba anome données
  showApprenant = () => {
    console.log(this.apprenantService.ListApprenants);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createApprenant}>
          <input
            type="text"
            name="nom"
            placeholder="Nom de l'apprenant"
            value={this.state.nom}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom de l'apprenant"
            value={this.state.prenom}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Mail de l'apprenant"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Créer</button>
        </form>
        {/* Miafficher liste ao anatin'ny ApprenantService.ListApprenant anaty console.log */}
        <button onClick={() => this.showApprenant()}>Show Apprenant</button>
      </div>
    );
  }
}

export default CreateApprenants;
