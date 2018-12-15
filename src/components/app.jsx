import React from 'react'

//按需导入布局组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
//引入样式表
import cssobj from '@/css/app.scss'
//导入路由组件
import {HashRouter,Route,Link,Redirect} from 'react-router-dom'

//导入组件
import HomeComponent from "@/components/home"
import MovieComponent from "@/components/movie"
import AboutComponent from "@/components/about"

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return  <HashRouter>
        <Layout className="layout" style={{height:'100%'}}>
        <Header style={{backgroundColor:'#eee'}}>
          <div className={cssobj.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.hash.split('/')[1]] || 'home'}
            style={{ lineHeight: '64px',backgroundColor:'#eee',color:'#000'}}
          >
            <Menu.Item key="home"><Link style={{color:'#000'}} to='/home'>首页</Link></Menu.Item>
            <Menu.Item key="movie"><Link style={{color:'#000'}} to='/movie'>电影</Link></Menu.Item>
            <Menu.Item key="about"><Link style={{color:'#000'}} to='/about'>关于</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ backgroundColor:'#fff' ,flex:1}}>
          <Route exact path='/' render={()=><Redirect to='home'></Redirect>} ></Route>
          <Route path='/home' component={HomeComponent}></Route>
          <Route path='/movie' component={MovieComponent}></Route>
          <Route path='/about' component={AboutComponent}></Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          douban ©{new Date().getFullYear()} Created by bohetang
        </Footer>
      </Layout>
      </HashRouter>
    }
}