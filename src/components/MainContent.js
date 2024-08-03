// src/components/MainContent.js

import React from "react";
import styled from "styled-components";
import StatsCards from "./StatsCards";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";
import NetProfitCard from "./NetProfitCard";
import GoalsCard from "./GoalsCard";
import CustomerFeedback from "./CustomerFeedback";

const MainContainer = styled.div`
  display: flex;
  margin-left: 5px;
  padding: 20px;
  background-color: #1a1a1a;
  color: #ccc;
  flex: 1;
  overflow-y: auto;

`;

const LeftColumn = styled.div`
  flex: 2;
  padding-right: 20px;

`;

const RightColumn = styled.div`
  flex: 1;
`;

const TitleContainer = styled.div`
  margin-left: 25px;
`;

const MainContent = () => {
  return (
    <>
      <TitleContainer>
        <h1>Dashboard</h1>
      </TitleContainer>
      <MainContainer>
        <LeftColumn>
          <StatsCards />
          <ActivityChart />
          <RecentOrders />
        </LeftColumn>
        <RightColumn>
          <NetProfitCard />
          <GoalsCard />
          <CustomerFeedback />
        </RightColumn>
      </MainContainer>
    </>
  );
};

export default MainContent;
