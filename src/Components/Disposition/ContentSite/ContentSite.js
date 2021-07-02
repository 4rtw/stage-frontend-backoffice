import {Component} from "react";
import Breadcrumbs from "./Children/Breadcrumbs";
import Menu from "./Children/Menu";
import MainApp from "../../Application/Main/MainApp";
import Login from "../../Application/Login/Login";

import CreateEnseignants from "../../Application/Enseignants/Create";
class ContentSite extends Component{

    handleChange(){
        this.props.onVisibleChange()
    }
   
    render() {
        return <div>
             
            <Menu handleSidebar={() => this.handleChange()}/>
            <Breadcrumbs/>
            <MainApp/>
            <Login/>
            <CreateEnseignants/>
        </div>
    }
        //class ContentSite extends Component{
        //this.props.onVisibleChange();
    //}

}

export default ContentSite;
