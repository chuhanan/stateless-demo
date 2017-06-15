/**
 * Created by bcc5hj2 on 2017/6/15.
 */
import React from 'react';

/*
* 无状态组件嵌套
* */
const Btn = ({ onClick, btnName }) => {
  return <div>
    <button onClick={ onClick }>
      { btnName }
    </button>
  </div>
}

const BtnBox = ( props ) => {
  return <div>
    <Btn
      onClick={ props.editClick }
      btnName="编辑"
    />
    <Btn
      onClick={ props.deleteClick }
      btnName="删除"
    />
  </div>
}

export default BtnBox;