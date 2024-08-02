// src/components/Header.js

import React from "react";
import styled from "styled-components";
import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import profilePic from "../assets/user1.jpg";

// Styled Components

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #242424;
  padding: 5px 10px;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  color: #ccc;
  outline: none;
  padding: 5px;
  font-size: 14px;
  margin-left: 8px; /* Space between icon and text */
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #ccc;
`;

const ProfileContainer = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <FaSearch size={12} />
        <SearchInput type="text" placeholder="Search" />
      </SearchContainer>
      <IconsContainer>
        <FaEnvelope size={20} />
        <FaBell size={20} />
        <ProfileContainer>
          <ProfileImage src={profilePic} alt="Profile" />
        </ProfileContainer>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
