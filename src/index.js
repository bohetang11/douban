// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

//导入fetch-jsonp
import fetchJSONP from 'fetch-jsonp'

//挂载到react原型上
React.Component.prototype.$http=fetchJSONP
//设置baseURL
React.Component.prototype.baseURL='https://api.douban.com'

import App from '@/components/app'

// 3. 调用 render 函数渲染
ReactDOM.render(
  <App></App>
, document.getElementById('app'))