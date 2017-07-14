import React, { Component } from 'react';
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
    console.log("ceshi sadasfasdfasd");
  }

  render() {
    return (
      <div className="App">
        <fieldSet className="wrapper">
          <legend>无状态组件</legend>
          <StateLess
            title="无状态组件"
            onClick={this.onClick}
            btnName="一个按钮"
          />
        </fieldSet>

        <fieldSet className="wrapper">
          <legend>无状态组件嵌套</legend>
          <BtnBox
            editClick={
              ()=>{alert("editClick")}
            }
            deleteClick={
              ()=>{alert("deleteClick")}
            }
          />
        </fieldSet>

        <fieldSet className="wrapper">
          <legend>无状态组件搭配高阶组件</legend>
          <ResizeableInput/>
        </fieldSet>
      </div>
    );
  }
}

export default App;
