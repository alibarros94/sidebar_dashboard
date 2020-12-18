import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #ff905c;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #3c3c3c;
  width: 220px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 950ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <div className={"logo_name"}>
            <img src={"data:img/png;base64,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"} alt="" />
          </div>
        </Nav>
        </IconContext.Provider>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
          <IconContext.Provider value={{ color: '#fff' }}>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            </IconContext.Provider>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      
    </>
  );
};

export default Sidebar;
