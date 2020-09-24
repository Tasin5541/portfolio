import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
    if (techStack.viewSkillBars) {
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">
            <Fade left duration={1500}>
                <div className="skills-bar">
                    <h1 className="skills-heading">Proficiency</h1>
                    {techStack.experience.map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </Fade>

            <Fade right duration={2000}>
                <div className="skills-image">
                    <img alt="Skills" src={require("../../assests/images/skill.svg")} />
                </div>
            </Fade>

            </div>
            </Fade>
        );
    }
    return null;
}