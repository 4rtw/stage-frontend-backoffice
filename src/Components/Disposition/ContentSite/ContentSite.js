import { Component } from "react";
/* import Breadcrumbs from "./Children/Breadcrumbs";
import MainApp from "../../Application/Main/MainApp";
import Login from "../../Application/Login/Login";
import Menu from "./Children/Menu"; */
import CreateApprenants from "../../Application/Apprenants/Create";

class ContentSite extends Component {
  handleChange() {
    this.props.onVisibleChange();
  }

  render() {
    return (
      <div>
        {/*<Menu handleSidebar={() => this.handleChange()} />
        <Breadcrumbs />
        <MainApp />
        <Login />*/}
        <CreateApprenants />
      </div>
    );
  }
}

export default ContentSite;
