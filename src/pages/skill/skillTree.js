import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import StackProgress from "../../containers/skillProgress/skillProgress";
import SkillLanguage from "../../containers/skillLanguage/skillLanguage";
import SkillTools from "../../containers/skillTools/skillTools";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./skillTree.css";

class SkillTree extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div className="skill-main">
        <Header theme={this.props.theme} />
	     	<StackProgress theme={this.props.theme} />
        <SkillLanguage theme={this.props.theme} />
        <SkillTools theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default SkillTree;
