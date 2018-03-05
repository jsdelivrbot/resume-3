import React from "react";
import PropTypes from "prop-types";

require("./index.scss");

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: this.props.activeTab,
      menuOpen: this.props.menuOpen,
    };

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  };

  onMenuItemClick(event) {
    event.preventDefault();
    this.setState({menuOpen: false}, () => {
      this.props.updateHandler(this.state.activeMenuItem);
    });
  }

  toggleMenuState() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  onCloseButtonClicked(event) {
    this.setState({
      menuOpen: false,
    });
  }

  render() {

    let className = "hamburger-menu-container hamburger hamburger--elastic";
    if (this.state.menuOpen) {
      className += " is-active";
    }
    return (
      <div className="menu-wrapper">
        <div className={className}
          onClick={(event) => {
            this.toggleMenuState();

        }}>
          <span className="hamburger-box">
            <span className="hamburger-inner"/>
          </span>
        </div>
        {this.state.menuOpen &&
          <div className="menu-wrapper__menu">
            <ul>
              <li>
                Home
              </li>
              <li>
                About
              </li>
              <li>
                Skills
              </li>
              <li>
                Github
              </li>
            </ul>
          </div>
        }
      </div>

    );
  }
}

HamburgerMenu.propTypes = {
  activeTab: PropTypes.string,
  menuOpen: PropTypes.bool,
  updateHandler: PropTypes.func,
};
