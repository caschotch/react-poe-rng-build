import React from 'react';
import PoeClass from './PoeClass.js';
import { poeClass } from './PoeClassListing.js';
import { poeKeystone } from './PoeKeystoneListing.js';

class App extends React.Component {
  constructor(){
    super();
    this.randomGen = this.randomGen.bind(this);
    this.classSelection = this.classSelection.bind(this);
    
    this.state ={
      poeClass: {} 
    };
  }

  randomGen(array) {
//    const num = Math.floor(Math.random() * array.length);
    return array[Math.floor(Math.random() * array.length)];
  }

  classSelection(){
    this.setState({poeClass: this.randomGen(poeClass)});
  }

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <h1 className="">Welcome to the Path of Exile Random Build Generator</h1>
          <h2>Roll the dice for your next challenge!</h2>
          <button onClick={this.classSelection}>Good Luck!</button>
        </section>
        <PoeClass poeClass={this.state.poeClass}/>
      </div>
    );
  }
}



export default App;
