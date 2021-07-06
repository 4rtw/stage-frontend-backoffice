import { Component } from "react";
import EnseignantsService from "../../../Shared/Services/EnseignantService";

class createEnseignants extends Component {
  enseignantsService = new EnseignantsService();

  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      matricules :"",
      contacts : [],
    };
  }
  createEnseignants = event => {
    event.preventDefault();

    let Enseignanats = new Enseignanats();
    Enseignanats.matricules = this.state.matricules;
    Enseignanats.nom = this.state.nom;
    Enseignanats.prenom = this.state.prenom;
    Enseignanats.contacts = this.state.contacts;

    this.EnseignantsService.ajouterEnseignants(Enseignanats);
    console.log("Enseignants creer");

    this.setState({ nom: "", prenom: "", matricule: "" });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  showEnseignants = () => {
    console.log(this.EnseignantsService.ListEnseignants);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createEnseignants}>
          <input
            type="text"
            name="matricule"
            placeholder="Matricule de l'Enseignants"
            value={this.state.matricules}
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
            type="text"
            name="email"
            placeholder="Mail de l'Enseignants"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div>
        <form onSubmit={this.createEnseignants}>
          <input
            type="text"
            name="contact"
            placeholder="Contacts de l'Enseignants"
            value={this.state.contacts}
            onChange={this.handleChange}
          />
          <button type="submit">Créer</button>
        </form>
        <button onClick={() => this.showEnseignants()}>
          Show Enseignanats
        </button>
      </div>
    );
  }
}
export default createEnseignants;
