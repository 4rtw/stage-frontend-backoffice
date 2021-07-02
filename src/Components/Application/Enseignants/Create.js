import { Component} from "react";
import EnseignantsService from "../../../Shared/Services/EnseignantService";

class createEnseignants extends Component{
  EnseignantsService = new EnseignantsService();

    constructor(props){
        super(props);
        this.state={
            nom:"",
            prenom:"",
            email:"",
        };
    }
    createEnseignants = event => {
      console.log(event);
      
      event.preventDefault();
      event.stopPropagation()

      this.EnseignantsService.ajouterEnseignants(
          this.state.nom,
          this.state.prenom,
          this.state.email
    );
    console.log("Enseignants creer");
        this.setState({nom:"", prenom:"",email:""});
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };
    showEnseignants = () => {
        console.log(this.EnseignantsService.ListEnseignants);
    };

    render() {
        return (
          <div>
            <form onSubmit={this.createEnseignant}>
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
              <button type="submit">Créer</button>
            </form>
            <button onClick={() => this.showEnseignants()}>Show Enseignanats</button>
          </div>
        );
    }
}
export default createEnseignants