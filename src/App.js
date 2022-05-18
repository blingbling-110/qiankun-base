import './App.css';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { useState, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<NavLink to={'/app-vue'}>Vue应用</NavLink>, '1', <PieChartOutlined />),
  getItem(<NavLink to={'/app-react'}>React应用</NavLink>, '2', <DesktopOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = useCallback(collapsed => {
    setCollapsed(collapsed);
  }, []);
  const location = useLocation()
  const getActKey = useCallback(pathname => {
    const res = []
    if (pathname.includes('vue')) {
      res.push('1')
    } else if (pathname.includes('react')) {
      res.push('2')
    }
    return res
  }, [])

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" items={items} selectedKeys={getActKey(location.pathname)} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '16px',
          }}
        >
          <div id="container" className="site-layout-background" style={{ minHeight: 360 }}>
            <div className='default'>从侧边栏中选择一个子应用</div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Hello qiankun ©2022 Created by qinzijun
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App;
