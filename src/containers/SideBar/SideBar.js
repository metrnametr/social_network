import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { isEmpty } from 'lodash';

import './style.scss';

const { Sider } = Layout;

const links = [
  {
    id: '1',
    title: 'Кошельки',
    iconType: 'pie-chart',
    to: '/wallets'
  },
  {
    id: '2',
    title: 'Транзакции', 
    iconType: 'transaction',
    to: '/transfers'
  },
  {
    id: '3',
    title: 'Виджеты',
    iconType: 'pie-chart',
    to: '/widgets'
  },
  {
    id: '4',
    title: 'Комплю',
    iconType: 'pie-chart',
    to: '/savemoney'
  }
];

const LinkItem = styled(Link)`
  display: flex !important;
  align-items: center;
`;

const searchPathname = (pathname, searchedPath) => !isEmpty(pathname.match(searchedPath));

const SideBar = (props) => {
  const [collapsed, toggleCollapsed] = useState(false);
  const { location: { pathname } } = props;

  const checkedItem = links.findIndex(item => searchPathname(pathname, item.to));
  return (
    <div style={ { position: 'relative', margin: '20px 0 20px 20px', background: '#fff' } }>
      <Sider className="sidebar" width={ 300 } collapsible onCollapse={ () => toggleCollapsed(!collapsed) } collapsed={ collapsed }>
        <div style={ { width: 300 } }>
          <Menu
            defaultSelectedKeys={ `${checkedItem + 1}` }
            defaultOpenKeys={ ['sub1'] }
            mode="inline"
            theme="light"
            selectedKeys={ `${checkedItem + 1}` }
          >
            {
              links.map(link => {
                return (
                  <Menu.Item key={ link.id }>
                    <LinkItem to={ link.to }>
                      <Icon type={ link.iconType } />
                      <span>{link.title}</span>
                    </LinkItem>
                  </Menu.Item>
                );
              })
            }
          </Menu>
        </div>
      </Sider>
    </div>
  );
};

export default withRouter(SideBar);