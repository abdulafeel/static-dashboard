// src/components/Sidebar.js

import React from 'react';
import styled from 'styled-components';
import { FaHome, FaChartBar, FaShoppingCart, FaUsers, FaCog ,FaDashcube} from 'react-icons/fa';
import './Sidebar.css'
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  background-color: #242424;
  height: 100vh;
  padding: 20px 0;
  position: sticky;
  top: 0;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: #ccc;
  cursor: pointer;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconContainer>
        <FaDashcube size={30} color="#507dd6" className="sideBarIcons" />
       
          <FaHome size={24} className="sideBarIcons home" color="#507dd6" />

        <FaChartBar size={24} className="sideBarIcons" />
        <FaShoppingCart size={24} className="sideBarIcons" />
        <FaUsers size={24} className="sideBarIcons" />
        <FaCog size={24} className="sideBarIcons" />
      </IconContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
