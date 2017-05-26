import React from 'react';

class PoeSkill extends React.Component {

  render() {
    let quote;
    let stripped;
    let quoteAfter;
    if(this.props.poeSkills){
      stripped = this.props.poeSkills.replace("_", " ");
      quote = "Your random skill will be ";
      quoteAfter =  <a href={"http://pathofexile.gamepedia.com/" + this.props.poeSkills} target="_blank">{stripped}</a>
    }

    return(
      <div className="row">
        <div className="col-6 skill">
          <h2>{quote}{quoteAfter}</h2>

        </div>
      </div>
    )
  }
}

export default PoeSkill;