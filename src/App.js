import './App.css';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
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
  getItem(<Link to={'/app-vue'}>Vue应用</Link>, '1', <PieChartOutlined />),
  getItem(<Link to={'/app-react'}>React应用</Link>, '2', <DesktopOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = useCallback(collapsed => {
    setCollapsed(collapsed);
  }, []);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
          <div id="container" className="site-layout-background" style={{ minHeight: 360 }}></div>
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
