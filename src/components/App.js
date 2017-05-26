import React from 'react';
import PoeClass from './PoeClass.js';
import PoeKeystones from './PoeKeystones.js';
import PoeSkill from './PoeSkill.js';
import { poeClass } from './PoeClassListing.js';
import { poeKeystones } from './PoeKeystoneListing.js';
import { poeSkills } from './PoeSkillListing.js';

class App extends React.Component {
  constructor(){
    super();
    this.randomGen = this.randomGen.bind(this);
    this.getKeystones = this.getKeystones.bind(this);
    this.classSelection = this.classSelection.bind(this);
    
    this.state ={
      poeClass: {},
      poeKeystones: {},
      poeSkills: ``
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
    this.setState({
      poeClass: this.randomGen(poeClass),
      poeKeystones: this.getKeystones(poeKeystones),
      poeSkills: this.randomGen(poeSkills)
    });    
  }

  render() {
    return (
      <div className="container content">
        <div className="row">
          <div className="col-6 app-header">
            <h1>Welcome to the Path of Exile Random Build Generator</h1>
            <h2>Click it for your next challenge!</h2>
            <button onClick={this.classSelection}>Good Luck!</button>
          </div>  
        </div>
        <PoeClass poeClass={this.state.poeClass}/>
        <PoeKeystones poeKeystones={this.state.poeKeystones}/>
        <PoeSkill poeSkills={this.state.poeSkills}/>
        <div className="row">
          <div className="col-6 footer">
            <p>
              <a href="http://www.pathofexile.com/" target="_blank">Path of Exile</a> content and materials are trademarks and copyrights of Grinding Gear games. All rights reserved.
              <br />
              I am not affiliated or associated with <a href="http://www.grindinggear.com/" target="_blank">Grinding Gear Games</a>.
            </p>
            <p>
              Images are from <a href="http://pathofexile.gamepedia.com/Path_of_Exile_Wiki" target="_blank">Path of Exile Wiki</a>.
            </p>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
