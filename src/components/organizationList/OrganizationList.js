import React, { Component } from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            return (
              <li className="organizations-inline" name={logo["login"]}>
                <Fade bottom duration={2000} distance="40px">
                  <div className="organizations-flex">
                    <img
                      className="organizations-img"
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                    />
                    <span className="organizations-name">@{logo["login"]}</span>
                  </div>
                </Fade>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;
