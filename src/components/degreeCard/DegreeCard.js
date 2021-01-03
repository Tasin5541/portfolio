import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        <Flip left duration={2000}>
          <div
            className="card-img"
            style={{
              border: `1px solid ${theme.shadow}`,
              boxShadow: `5px 5px 5px ${theme.shadow}`,
            }}
          >
            <img
              style={{
                maxWidth: `100%`,
                maxHeight: `100%`,
                transform: `scale(50%, 50%)`,
              }}
              src={require(`../../assests/images/${degree.logo_path}`)}
              alt={degree.alt_name}
            />
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{
              borderBottom: `1px solid ${theme.shadow}`,
              borderLeft: `1px solid ${theme.shadow}`,
              borderRight: `1px solid ${theme.shadow}`,
              borderRadius: `7px`,
              width: `90%`,
              margin: `10px`,
              boxShadow: `5px 5px 5px ${theme.shadow}`,
            }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration ml-auto" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
                <h3 className="cgpa ml-auto">CGPA {degree.cgpa}</h3>
              </div>
            </div>
            <div classname="body-content">
              {degree.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="visit-btn"
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className="btn" style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
