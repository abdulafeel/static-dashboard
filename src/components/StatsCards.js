// src/components/StatsCards.js

import React from "react";
import styled from "styled-components";
import {
  FaShoppingCart,
  FaTruck,
  FaTimes,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 180px; /* Fixed height for consistency with NetProfitCard */
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const IconContainer = styled.div`
  background: ${({ color }) => color}; // Dynamic background for gradient effect
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px; /* Increased size for uniformity */
  height: 70px; /* Increased size for uniformity */
  color: #fff;
  flex-shrink: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ccc;
  text-align: right;
  margin-right: 10px;
`;

const Number = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 2rem; // Larger font size for emphasis
  font-weight: bold;
`;

const Label = styled.span`
  font-size: 14px;
  color: #bbb;
  margin-top: 5px; // Slight space above the label
`;

const StatsCards = () => {
  return (
    <CardsContainer>
      <Card>
        <InfoContainer>
          <Number>75</Number>
          <Label>Total Orders</Label>
        </InfoContainer>
        <IconContainer color="linear-gradient(135deg, #4b79a1, #283e51)">
          <FaShoppingCart size={28} />
        </IconContainer>
      </Card>
      <Card>
        <InfoContainer>
          <Number>70</Number>
          <Label>Total Delivered</Label>
        </InfoContainer>
        <IconContainer color="linear-gradient(135deg, #56ab2f, #a8e063)">
          <FaTruck size={28} />
        </IconContainer>
      </Card>
      <Card>
        <InfoContainer>
          <Number>5</Number>
          <Label>Total Cancelled</Label>
        </InfoContainer>
        <IconContainer color="linear-gradient(135deg, #ff5f6d, #ffc371)">
          <FaTimes size={28} />
        </IconContainer>
      </Card>
      <Card>
        <InfoContainer>
          <Number>$12k</Number>
          <Label>Total Revenue</Label>
        </InfoContainer>
        <IconContainer color="linear-gradient(135deg, #f7971e, #ffd200)">
          <FaRegMoneyBillAlt size={28} />
        </IconContainer>
      </Card>
    </CardsContainer>
  );
};

export default StatsCards;
