import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncAwait from './AsyncAwait';
// class MyError extends Error {
//   toString(){
//     return "A SUPER bad eror occurred: " + this.message
//   }
// }



class App extends Component {
  state = {
    jsonString: `{"name": "eric"}`,
    fieldToGrab: 'name',
    message: '',
  }

  // doNaughtyThing = () => {
  //   throw new Error('something bad happened')
  // }
  

  getFieldValueFromJSON = () => {
    try{
          const jsonObject = JSON.parse(this.state.jsonString)
          this.setState({ message: "The value is: " + jsonObject[this.state.fieldToGrab] })
    // this.doNaughtyThing()
    } catch(err) {
      console.log('---------err',err);
      this.setState({ message: "Error: " + err})
     
  }finally{
    console.log('finally')
  } }
  render() {
    const { message,jsonString, fieldToGrab} = this.state
    
    return (
      <div>
        <AsyncAwait/>
        <h1>Advanced JavaScript</h1>
        <div>
          <div>JSON: <textarea value = {jsonString} cols="50" rows="5" onChange={e => this.setState({ jsonString: e.target.value })} /></div>
          <div>
            Field to grab: <input value={fieldToGrab} onChange={e => this.setState({ fieldToGrab: e.target.value })} />
            <button onClick={this.getFieldValueFromJSON}>Get field value</button>
          </div>
        </div>
        <div>{message}</div>
      </div>
    );
  }
}

export default App;
