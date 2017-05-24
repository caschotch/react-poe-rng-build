import React from 'react';

class PoeKeystones extends React.Component {
  constructor(){
    super();
    this.renderKeystones = this.renderKeystones.bind(this);
  }


  renderKeystones(key){
    const keystones = this.props.poeKeystones[key];
    return (
      <div key={key}>
        <h3>{keystones.name}</h3>
        <p>{keystones.description}</p>
        <div>
          <img src={keystones.images} alt={keystones.name}  />
        </div>
      </div>
      )
  }

  render() {
    return (

      <section>
        <div>
          
          {Object.keys(this.props.poeKeystones).map(this.renderKeystones)}
          
        </div>
      </section>



      )
  }
}

export default PoeKeystones;