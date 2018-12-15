import React from 'react'

//导入路由组件
import {Route,Link} from 'react-router-dom'

import MovieList from "@/components/movie/movieList"

//导入布局组件
import {
    Layout, Menu
  } from 'antd';
  
const { Header, Content, Sider } = Layout;

export default class Movie extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return   <Layout style={{height:'100%'}}>
        <Sider width={200} style={{ background: '#fff'}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            
            style={{ height: '100%', borderRight: 0 ,marginTop:0}}
          >
            <Menu.Item key="1" style={{ marginTop:0}}><Link to='/movie/in_theaters/1'>正在热映</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/movie/coming_soon/1'>即将上映</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/movie/top250/1'>Top250</Link>Top250</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '1px',height: '100%' }}>
          <Content style={{
            background: '#fff', padding: 10, margin: 0, minHeight: 280,
          }}
          >
            <Route path='/movie/:type/:page' component={MovieList}></Route>
          </Content>
        </Layout>
      </Layout>
    }
}