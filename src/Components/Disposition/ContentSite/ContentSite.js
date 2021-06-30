import {Component} from "react";
import Breadcrumbs from "./Children/Breadcrumbs";
import Menu from "./Children/Menu";
import MainApp from "../../Application/Main/MainApp";
import Login from "../../Application/Login/Login";

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
        </div>
    }

}

export default ContentSite;
