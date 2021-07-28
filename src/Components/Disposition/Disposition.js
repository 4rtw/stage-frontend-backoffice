import { Sidebar } from "primereact/sidebar";
import { Component } from "react";
import React from "react";
import EnseignantsPages from "../../interfaces/EnseignantsPages";
import EtudiantsPages from "../../interfaces/EtudiantsPages";
import Home from "../../interfaces/Home";
import Nav from "../../interfaces/Nav";
import SidebarContent from "./SidebarContent/SidebarContent";
import ContentSite from "./ContentSite/ContentSite";
import { interfaceExtends } from "@babel/types";
import StyleSheet from "../../interfaces/StyleSheet";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EnseignantsPaes from "../../interfaces/EnseignantsPages";



class Disposition extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  handleVisibilityChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    
    
    return (
    <Router>
      <div className="Disposition">
      
      <Nav />
      
      <Route path="/home" component={Home} />
      <Route path="/EnseignantsPages" component={EnseignantsPages}  />
      <Route path="/EtudiantsPages" component={EtudiantsPages} />
      
    
            {/*
        <div>
        <Sidebar
          visible={this.state.visible}
          onHide={() => this.handleVisibilityChange()}
        >
          <SidebarContent />
        </Sidebar>

        <div>
          <ContentSite
            visible={this.state.visible}
            onVisibleChange={() => this.handleVisibilityChange()}
          />
          </div>
      </div>
        */}
      </div>
      </Router>
    );
     
   
  }
}


export default Disposition;
//affichage resultat no tena atao  ato