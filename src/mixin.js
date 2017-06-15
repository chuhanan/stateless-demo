/**
 * Created by bcc5hj2 on 2017/6/15.
 */
import React from 'react';
import PropTypes from 'prop-types';

// function handleWindowResize() {
//   if(viewport.width !== window.innerWidth ||
//     viewport.height !== window.innerHeight
//   ){
//     viewport = { width:window.innerWidth, height: window.innerHeight }
//   }
// }

const withViewport = (ComposedComponent) => {
  return class Viewport extends React.Component{
    constructor(...args){
      super(...args)
      this.state = {
        viewport : { width:1366, height:768 }
      }
      this.handleWindowResize = this.handleWindowResize.bind(this)
    }
    handleWindowResize() {
      let { viewport } = this.state;
      if(viewport.width !== window.innerWidth ||
        viewport.height !== window.innerHeight
      ){
        this.setState({
          viewport:{ width:window.innerWidth, height: window.innerHeight }
        })
      }
    }
    componentDidMount(){
      window.addEventListener('resize', this.handleWindowResize);
    }
    componentWillUnmount(){
      window.removeEventListener('resize', this.handleWindowResize);
    }
    render(){
      return <ComposedComponent { ...this.props } viewport = { this.state.viewport } />
    }
  }
}

const Input = ({ label, name, value, viewport, ...props }) => {
  console.log(viewport)
  return (
    <label
      htmlFor={name}
      children={label}
    >
      <input
        name={name}
        type="text"
        value={ value || ""}
        style={{width:viewport.width/5}}
      />
    </label>
  )
}
Input.propTypes = {
  name:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
}

const resizeableInput = withViewport(Input);
export default resizeableInput;


