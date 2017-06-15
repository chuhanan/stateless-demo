# start
> npm i -g create-react-app   
  git clone git@github.com:chuhanan/stateless-demo.git

# what is stateless component? 
`version:react 0.14+ `

```javascript
import React from 'react';
const StateLess = ( props, context ) => {
  console.log( props, context )
  return <div>l.
    <p>props:{props.title}</p>
    <p>this is a stateless component </p>
  </div>
}

export default StateLess
```


# why stateless #
- 没有状态(state),
- 只有一个`render`函数
- 纯粹的接收父组件的`props`直接渲染UI
- 函数返回UI组件,没有class就少了this,constructor继承关系等,代码更加简洁,便于理解和测试;
- 无状态组件不会在调用时创建新的实例,在创建的时候始终是一个实例,避免了不必要的检查和内存分配,做到了内部优化

# careful
- 调用不实例化(没有ref属性),没有生命周期(也就是没有shouldComponentUpdate?那每次都re-render组件存在性能问题??)

# compare #
![image](http://upload-images.jianshu.io/upload_images/48180-8c21fd21da7f3683.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


