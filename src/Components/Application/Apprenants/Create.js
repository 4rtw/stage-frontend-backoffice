import { Component } from "react";

class CreateApprenants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
    };
  }

  createApprenant = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
      </div>
    );
  }
}

export default CreateApprenants;
