// src/components/GoalsCard.js

import React from "react";
import styled from "styled-components";
import { FaBullseye, FaUtensils, FaClipboardList } from "react-icons/fa";

const Card = styled.div`
  background-color: #2a2a2a; // Match the background color with ActivityChart
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Increased shadow intensity for a more pronounced look
  margin-bottom: 20px;
  margin-top: 40px;
  height: 300px; /* Match the height of ActivityChart */
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Space evenly between items
  color: #fff;
`;

const Title = styled.h3`
  font-size: 24px; // Match font size with ActivityChart
  color: #f1f1f1; // Consistent color scheme
  margin-bottom: 20px; // Match spacing with ActivityChart
  font-weight: bold;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; // Increased gap for better spacing between icon and text
  padding: 5px; // Adjusted padding for better layout
  background-color: #333; // Darker item background for contrast
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s; // Added transform transition
  margin-bottom: 10px;
  
  &:hover {
    background-color: #3a3a3a; // Slightly lighter hover effect for better contrast
    transform: translateY(-2px); // Subtle lifting effect on hover
  }

  span {
    font-size: 16px; // Ensuring font size is balanced
    color: #eee;
    font-weight: 500; // Added font-weight for emphasis
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #444; // Match color scheme
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); // Shadow to highlight the icon container
`;

const GoalsCard = () => {
  return (
    <Card>
      <Title>Quick Access</Title>
      <Item>
        <IconWrapper>
          <FaBullseye size={20} color="#f09457" />
        </IconWrapper>
        <span>Goals</span>
      </Item>
      <Item>
        <IconWrapper>
          <FaUtensils size={20} color="#6655fd" />
        </IconWrapper>
        <span>Popular Dishes</span>
      </Item>
      <Item>
        <IconWrapper>
          <FaClipboardList size={20} color="#58ffff" />
        </IconWrapper>
        <span>Menus</span>
      </Item>
    </Card>
  );
};

export default GoalsCard;
