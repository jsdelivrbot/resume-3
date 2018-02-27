import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

require("./index.scss");

export default class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab,
    };
  };

  render() {
    return (
      <div>
        <Header activeTab={this.state.activeTab}/>
        <div>
          {/*MainBody*/}
        </div>
      </div>


    );
  }
}

PageWrapper.propTypes = {
  activeTab: PropTypes.string,
};
