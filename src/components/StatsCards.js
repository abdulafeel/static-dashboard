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
  background-color: #242424;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px; /* Set a fixed height for consistency */
`;

const IconContainer = styled.div`
  background-color: #333;
  padding: 15px;
  border-radius: 50%;
  color: #fff;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ccc;
`;

const Number = styled.h2`
  margin: 0;
  color: #fff;
`;

const Label = styled.span`
  font-size: 14px;
`;

const StatsCards = () => {
  return (
    <CardsContainer>
      <Card>
        <InfoContainer>
          <Number>75</Number>
          <Label>Total Orders</Label>
        </InfoContainer>
        <IconContainer>
          <FaShoppingCart size={24} color="#6789ce" />
        </IconContainer>
      </Card>
      <Card>
        <InfoContainer>
          <Number>70</Number>
          <Label>Total Delivered</Label>
        </InfoContainer>
        <IconContainer>
          <FaTruck size={24} color="#62f069" />
        </IconContainer>
      </Card>
      <Card>
        <InfoContainer>
          <Number>5</Number>
          <Label>Total Cancelled</Label>
        </InfoContainer>
        <IconContainer>
          <FaTimes size={24} color="#f05959" />
        </IconContainer>
      </Card>
      <Card>
        <InfoContainer>
          <Number>$12k</Number>
          <Label>Total Revenue</Label>
        </InfoContainer>
        <IconContainer>
          <FaRegMoneyBillAlt size={24} color="#ec6290" />
        </IconContainer>
      </Card>
    </CardsContainer>
  );
};

export default StatsCards;
