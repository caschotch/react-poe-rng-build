import React from 'react';

class PoeClass extends React.Component {


  render() {
    return(

      <section>
        <div>
          <h3>
            {this.props.poeClass.class}
          </h3>
          <h3>
            {this.props.poeClass.ascendancy}
          </h3>
        </div>
        <div>
          <img src={this.props.poeClass.images} alt={this.props.poeClass.ascendancy} />
        </div>
      </section>



      )
  }
}

export default PoeClass;