import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StateLess from './Stateless';
import BtnBox from './stateless-demo1';
import ResizeableInput from './mixin';


class App extends Component {
  constructor(props){
    super(props)
  }

  onClick(){
    alert('u clicked')
  }

  render() {
    return (
      <div className="App">
        <StateLess
          title="无状态组件"
          onClick={this.onClick}
          btnName="一个按钮"
        />
        <hr/>
        <BtnBox
          editClick={
            ()=>{alert("editClick")}
          }
          deleteClick={
            ()=>{alert("deleteClick")}
          }
        />
        <hr/>
        <ResizeableInput/>
      </div>
    );
  }
}

export default App;
