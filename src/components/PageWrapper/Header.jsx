import React from "react";
import PropTypes from "prop-types";
import HamburgerMenu from "./components/HamburgerMenu";

require("./index.scss");

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab,
    };
  };

  render() {
    return (
      <div className="header-top-bar">
        <div className="header-top-bar__page_title">
          {this.props.pageTitle}
        </div>
        <HamburgerMenu
          activeTab={this.props.activeTab}
          updateHandler={this.props.updateHandler}
        />
      </div>
    );
  }
}

Header.propTypes = {
  activeTab: PropTypes.string,
  pageTitle: PropTypes.string,
  updateHandler: PropTypes.func,
};
