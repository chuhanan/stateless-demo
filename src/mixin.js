/**
 * Created by bcc5hj2 on 2017/6/15.
 */
import React from 'react';
import PropTypes from 'prop-types';

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

const Input = ({ name, value, viewport }) => {
  console.log(viewport)
  return (
    <input
      name={name}
      type="text"
      value={ value || ""}
      style={{width:viewport.width/5}}
    />
  )
}
Input.propTypes = {
  name:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
}

const resizeableInput = withViewport(Input);
export default resizeableInput;


