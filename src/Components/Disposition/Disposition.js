import { Sidebar } from "primereact/sidebar";
import { Component } from "react";
import SidebarContent from "./SidebarContent/SidebarContent";
import ContentSite from "./ContentSite/ContentSite";

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
    );
  }
}

export default Disposition;
