import { Component } from "react";
import MainService from "../../../Shared/Services/MainService";

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      counter: 0,
    };
    this.mainService = new MainService();
    this.apiCall = null;
  }

  componentDidMount() {
    this.getRandomPerson();
  }

  componentWillUnmount() {
    this.apiCall.cancel("Cancel on unmount");
  }

  getRandomPerson() {
    this.apiCall = this.mainService.getRandomPerson().then(data => {
      this.setState({
        person: data.data.results[0],
      });
    });
  }

  increaseCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        {this.state.person ? (
          <div>
            {this.state.counter}
            <div>
              {this.state.person.name.first + " " + this.state.person.name.last}
            </div>
            <div>
              <img alt="Person" src={this.state.person.picture.large} />
            </div>
            <button onClick={() => this.increaseCounter()}>
              Increase counter
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MainApp;
