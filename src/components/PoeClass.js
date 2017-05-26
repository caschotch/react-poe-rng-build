import React from 'react';

class PoeClass extends React.Component {

  render() {
    return(
      <div className="row">
        <div className="col-3">
          <h2 className="poe-class">
            {this.props.poeClass.class}
          </h2>
          <h3 className="poe-ascendancy">
            {this.props.poeClass.ascendancy}
          </h3>
        </div>
        <div className="col-3">
          <img className="responsive-image" src={this.props.poeClass.images} alt={this.props.poeClass.ascendancy} />
        </div>
      </div>
    )
  }
}

export default PoeClass;