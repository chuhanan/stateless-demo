/**
 * Created by bcc5hj2 on 2017/6/15.
 */
import React from 'react';   //????


const stateLess = ( props, { content="2341234", title="asdasfsd" } ) => {
  return <div>
    <p>{title}</p>
    <p>{ content }</p>
    <p>this is a stateless component </p>
    <button onClick={ props.onClick }>{ props.btnName }</button>
  </div>
}

// const stateLess2 = ( { name="name" }, { content="2341234", title="asdasfsd" } ) => {
//   return <div>
//     <p>{name}</p>
//     <p>{title}</p>
//     <p>{ content }</p>
//     <p>this is a stateless component </p>
//   </div>
// }

export default stateLess