import React from 'react';

class PoeKeystones extends React.Component {
  constructor(){
    super();
    this.renderKeystones = this.renderKeystones.bind(this);
  }

  renderKeystones(key){
    const keystones = this.props.poeKeystones[key];
    return (
      <div key={key} className="col-2">
        <h3>{keystones.name}</h3>
        
        <div className="keystone">
          <img className="keystone-image" src={keystones.images} alt={keystones.name}  />
          <img className="keystone-frame" src="images/keystones/Keystone_passive_frame.png" alt="Keystone Frame Art" />
        </div>
        <p>{keystones.description}</p>
      </div>
    )
  }

  render() {
    return (

        <div className="row poe-keystones">
          {Object.keys(this.props.poeKeystones).map(this.renderKeystones)}
        </div>

    )
  }
}

export default PoeKeystones;