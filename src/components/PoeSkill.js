import React from 'react';

class PoeSkill extends React.Component {

  render() {
    let quote;
    let strippedFileName;
    let stripped;
    let quoteAfter;
    let iconImage;
    if(this.props.poeSkills){
      strippedFileName = this.props.poeSkills.replace("_skill_icon.png", "");
      stripped = strippedFileName.replace("_", " ");
      quote = "Your random skill will be ";
      quoteAfter =  <a href={"http://pathofexile.gamepedia.com/" + strippedFileName} target="_blank">{stripped}</a>;
      iconImage = <img src={"images/skills/" + this.props.poeSkills} alt="Skill icon"/>;
    }

    return(
      <div className="row">
        <div className="col-6 skill">
          <h2>{quote}{quoteAfter}&nbsp;&nbsp;&nbsp;{iconImage}</h2>
          
        </div>
      </div>
    )
  }
}

export default PoeSkill;