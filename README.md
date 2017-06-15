# 启动项目
> npm i -g create-react-app   
  git clone git@github.com:chuhanan/stateless-demo.git

# 什么是无状态组件? 
`version:react 0.14+ `

```javascript
    import React from 'react';
    
    
    const StateLess = ( props, context ) => {
      console.log( props, context )
      return <div>
        <p>props:{props.title}</p>
        <p>this is a stateless component </p>
      </div>
    }
    
    export default StateLess
```

> 没有状态(state),
  没有生命周期(也就是没有shouldComponentUpdate?那每次都re-render组件存在性能问题??)
  只有一个`render`函数
  纯粹的接收父组件的`props`直接渲染UI
  
# 无状态组件的作用 #

函数返回UI组件,没有class就少了this,constructor继承关系等,代码更加简洁,便于理解和测试;

# why stateless #

# compare #
!(image)[http://upload-images.jianshu.io/upload_images/48180-8c21fd21da7f3683.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240]


