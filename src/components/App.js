import React from 'react';
import PoeClass from './PoeClass.js';
import PoeKeystones from './PoeKeystones.js';
import { poeClass } from './PoeClassListing.js';
import { poeKeystones } from './PoeKeystoneListing.js';

class App extends React.Component {
  constructor(){
    super();
    this.randomGen = this.randomGen.bind(this);
    this.getKeystones = this.getKeystones.bind(this);
    this.classSelection = this.classSelection.bind(this);
    
    this.state ={
      poeClass: {},
      poeKeystones: {}
    };
  }

  randomGen(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  getKeystones(){
    var randomNum = Math.floor(Math.random() * (4 - 1)) + 1; //generates random number between 1 and 3
    var i = 0;
    var generatedArray = [];
    while (i < randomNum){
      generatedArray.push(this.randomGen(poeKeystones));
      i++;
    }
  return generatedArray;
  }

  classSelection(){
    this.setState({poeClass: this.randomGen(poeClass),
      poeKeystones: this.getKeystones(poeKeystones)
      });    
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
        <PoeKeystones poeKeystones={this.state.poeKeystones}/>
      </div>
    );
  }
}

export default App;
