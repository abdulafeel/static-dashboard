// src/components/CustomerFeedback.js

import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import profilePic1 from "../assets/user1.jpg"; // Example image


const FeedbackContainer = styled.div`
  background-color: #242424;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 400px; /* Match the height of RecentOrders */
  overflow-y: auto;
  flex: 1;
`;

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  margin-bottom: 25px;
`;

const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  padding-right: 10px; /* Added padding for a more balanced look */
`;

const Customer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Increased gap for better spacing */
`;

const CustomerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #444; /* Border to make it stand out */
`;

const CustomerName = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #f5b50a; /* Gold color for stars */
  font-size: 14px;
`;

const Comment = styled.p`
  margin: 0;
  font-size: 14px;
  color: #aaa;
  line-height: 1.4;
`;

const CustomerFeedback = () => {
  return (
    <FeedbackContainer>
      <Title>Customer's Feedback</Title>
      <Feedback>
        <Customer>
          <CustomerImage src={profilePic1} alt="Jenny Wilson" />
          <CustomerName>Jenny Wilson</CustomerName>
          <Rating>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Rating>
        </Customer>
        <Comment>
          The food was excellent and so was the service. I had the mushroom
          risotto with scallops, which was awesome. I had a burger over greens
          (gluten-free), which was also very good. They were very conscientious
          about gluten allergies.
        </Comment>
      </Feedback>
      <Feedback>
        <Customer>
          <CustomerImage src={profilePic1} alt="Dianne Russell" />
          <CustomerName>Dianne Russell</CustomerName>
          <Rating>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </Rating>
        </Customer>
        <Comment>
          We enjoyed the Eggs Benedict served on homemade focaccia bread and hot
          coffee. Perfect service.
        </Comment>
      </Feedback>
      <Feedback>
        <Customer>
          <CustomerImage src={profilePic1} alt="Devon Lane" />
          <CustomerName>Devon Lane</CustomerName>
          <Rating>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Rating>
        </Customer>
        <Comment>
          Normally are wings, but theirs are lean meaty and tender. Loved the
          vibe of the place.
        </Comment>
      </Feedback>
      <Feedback>
        <Customer>
          <CustomerImage src={profilePic1} alt="John Wick" />
          <CustomerName>John Wick</CustomerName>
          <Rating>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Rating>
        </Customer>
        <Comment>Loved it, like nobody else...</Comment>
      </Feedback>
      <Feedback>
        <Customer>
          <CustomerImage src={profilePic1} alt="Lee Cooper" />
          <CustomerName>Lee Cooper</CustomerName>
          <Rating>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Rating>
        </Customer>
        <Comment>Pasta was awesome, craved for it...</Comment>
      </Feedback>
      <Feedback>
        <Customer>
          <CustomerImage src={profilePic1} alt="Iliyana Dcruz" />
          <CustomerName>Iliyana Dcruz</CustomerName>
          <Rating>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Rating>
        </Customer>
        <Comment>Oreo milkshake was so yummyyyyyy...</Comment>
      </Feedback>
      {/* Add more feedback items as needed */}
    </FeedbackContainer>
  );
};

export default CustomerFeedback;
