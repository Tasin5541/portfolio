import React from "react";
import "./skillTools.css";
import { tools } from "../../portfolio";
import { Fade } from "react-reveal";

export default function SkillTools(props) {
    if (tools.viewSkillBars) {
        return (
            <Fade bottom duration={2000} distance="40px">
            <div className="tool-heading">
                <h1>Development Tools</h1>
            </div>
            <div className="tool-container">
            <Fade left duration={1500}>
                <div className="tool-bar">
                    
                    {tools.experience.slice(0, Math.ceil(tools.experience.length/2)).map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="tool">
                            <p>{exp.Stack}</p>
                            <div className="tool-meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </Fade>

            <Fade right duration={1500}>
                <div className="tool-bar">
                    {tools.experience.slice(Math.ceil(tools.experience.length/2)).map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="tool">
                            <p>{exp.Stack}</p>
                            <div className="tool-meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </Fade>

            </div>
            </Fade>
        );
    }
    return null;
}