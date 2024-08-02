// src/components/NetProfitCard.js

import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaDollarSign } from "react-icons/fa";

const Card = styled.div`
  background-color: #333;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  height: 150px; /* Match the height of StatsCards */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const IconContainer = styled.div`
  background: linear-gradient(
    135deg,
    #667eea,
    #764ba2
  ); // Gradient background for the icon
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  color: #fff;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Amount = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Label = styled.span`
  font-size: 14px;
  color: #aaa; // Lighter color for label
  margin-top: 5px;
`;

const ProgressContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const NetProfitCard = () => {
  return (
    <Card>
      <IconContainer>
        <FaDollarSign size={24} />
      </IconContainer>
      <InfoContainer>
        <Amount>$6759.25</Amount>
        <Label>Net Profit</Label>
      </InfoContainer>
      <ProgressContainer>
        <CircularProgressbar
          value={70}
          text={`70%`}
          styles={buildStyles({
            pathColor: `#667eea`, // Custom stroke color
            textColor: "#fff", // Custom text color
            trailColor: "#555", // Custom trail color
            textSize: "18px", // Custom text size
          })}
        />
      </ProgressContainer>
    </Card>
  );
};

export default NetProfitCard;
