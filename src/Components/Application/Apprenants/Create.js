import { Component } from "react";
import ApprenantService from "../../../Shared/Services/ApprenantService";
import { Apprenant } from "../../../Shared/Models/Apprenant";

class CreateApprenants extends Component {
  // Micréer instance ana apprenantService
  apprenantService = new ApprenantService();

  constructor(props) {
    super(props);
    this.state = {
      matricule: 0,
      nom: "",
      prenom: "",
      email: "",
      adresse: "",
      telephone: "",
    };
  }

  createApprenant = event => {
    // Empecher refresh quand on submit
    event.preventDefault();

    //créer apprenant
    let apprenant = new Apprenant();
    apprenant.matricule = this.state.matricule;
    apprenant.nom = this.state.nom;
    apprenant.prenom = this.state.prenom;
    apprenant.telephone = this.state.telephone;
    apprenant.adresse = this.state.adresse;
    apprenant.email = this.state.email;

    // Miantso apprenantService mba anao opération de persistence: ajouterApprenant()
    // Dia passer-na ao ilay valeur ilaina
    this.apprenantService.ajouterApprenant(apprenant);
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
            name="matricule"
            placeholder="Matricule de l'apprenant"
            value={this.state.matricule}
            onChange={this.handleChange}
          />
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
          <input
            type="text"
            name="adresse"
            placeholder="adresse de l'apprenant"
            value={this.state.adresse}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="telephone"
            placeholder="telephone de l'apprenant"
            value={this.state.telephone}
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
