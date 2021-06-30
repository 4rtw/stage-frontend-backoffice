import { Component } from "react";
import Disposition from "./Components/Disposition/Disposition";
import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

PrimeReact.ripple = true;

class App extends Component{
    render() {
        return <Disposition/>;
    }
}

export default App;
