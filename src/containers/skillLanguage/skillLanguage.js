import React from "react";
import "./skillLanguage.css";
import { sLanguage } from "../../portfolio";
import { Fade } from "react-reveal";

export default function SkillLanguage(props) {
    const theme = props.theme;
    if (sLanguage.viewSkillBars) {
        return (
            <Fade bottom duration={2000} distance="40px">
            <div className="lskills-heading">
                <h1>Languages/ Frameworks</h1>
            </div>
            <div className="lskills-container">
            <Fade left duration={1500}>
                <div className="lskills-bar">
                    
                    {sLanguage.experience.slice(0, Math.ceil(sLanguage.experience.length/2)).map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="lskill">
                            <p>{exp.Stack}</p>
                            <div className="lmeter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </Fade>

            <Fade right duration={1500}>
                <div className="lskills-bar">
                    {sLanguage.experience.slice(Math.ceil(sLanguage.experience.length/2)).map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="lskill">
                            <p>{exp.Stack}</p>
                            <div className="lmeter">
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