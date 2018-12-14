import React from 'react'


import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

import cssobj from '@/css/app.scss'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return  <Layout className="layout" style={{height:'100%'}}>
        <Header>
          <div className={cssobj.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ backgroundColor:'#fff' }}>
          123
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>

    }
}