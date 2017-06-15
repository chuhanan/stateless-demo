/**
 * Created by bcc5hj2 on 2017/6/15.
 */
import React from 'react';


const StateLess = ( props, context ) => {
  console.log( props, context )
  return <div>
    <p>props:{props.title}</p>
    <p>this is a stateless component </p>
  </div>
}

export default StateLess