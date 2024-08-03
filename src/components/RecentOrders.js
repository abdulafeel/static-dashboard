// src/components/RecentOrders.js

import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";
import profilePic1 from "../assets/user1.jpg"; // Example image
import profilePic2 from "../assets/24.jpg"; // Example image
import profilePic3 from "../assets/33.jpg"; // Example image
import profilePic4 from "../assets/90.jpg"; // Example image
import profilePic5 from "../assets/67.jpg"; // Example image
import profilePic6 from "../assets/43.jpg"; // Example image
import './Sidebar.css'

const OrdersContainer = styled.div`
  background-color: #242424;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  flex: 1;
  overflow-x: auto;
  height: 400px; /* Matching height with CustomerFeedback */
`;

const Title = styled.h2`
  font-weight: bold;
  color: #fff; /* Use white for better visibility */
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    color: #ccc;
    border-bottom: 1px solid #3a3a3a;
  }

  th {
    background-color: #333;
    color: #fff; /* Make header text white for contrast */
  }

  tr:nth-child(even) {
    background-color: #2a2a2a;
  }

  tr:hover {
    background-color: #1e1e1e; /* Add hover effect for better UX */
  }

`;

const StatusIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => {
    switch (props.status) {
      case "Delivered":
        return "#4CAF50"; // Green
      case "Cancelled":
        return "#F44336"; // Red
      case "Pending":
        return "#FFC107"; // Amber
      default:
        return "#ccc"; // Default grey
    }
  }};
`;

const StatusText = styled.span`
  margin-left: 5px;
`;

const CustomerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #444; /* Border to make it stand out */
`;

const RecentOrders = () => {
  return (
    <OrdersContainer>
      <Title>Recent Orders</Title>
      <Table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="customer-container">
              <CustomerImage src={profilePic6} alt="Dianne Russell" />
              Wade Warren
            </td>
            <td>15478256</td>
            <td>$124.00</td>
            <td>
              <StatusIcon status="Delivered">
                <FaCheckCircle />
                <StatusText>Delivered</StatusText>
              </StatusIcon>
            </td>
          </tr>
          <tr>
            <td className="customer-container">
              <CustomerImage src={profilePic5} alt="Dianne Russell" />
              Jane Cooper
            </td>
            <td>48965786</td>
            <td>$305.02</td>
            <td>
              <StatusIcon status="Delivered">
                <FaCheckCircle />
                <StatusText>Delivered</StatusText>
              </StatusIcon>
            </td>
          </tr>
          <tr>
            <td className="customer-container">
              <CustomerImage src={profilePic4} alt="Dianne Russell" />
              Guy Hawkins
            </td>
            <td>78958215</td>
            <td>$45.88</td>
            <td>
              <StatusIcon status="Cancelled">
                <FaTimesCircle />
                <StatusText>Cancelled</StatusText>
              </StatusIcon>
            </td>
          </tr>
          <tr>
            <td className="customer-container">
              <CustomerImage src={profilePic3} alt="Dianne Russell" />
              Kristin Watson
            </td>
            <td>20965732</td>
            <td>$365.00</td>
            <td>
              <StatusIcon status="Pending">
                <FaHourglassHalf />
                <StatusText>Pending</StatusText>
              </StatusIcon>
            </td>
          </tr>
          <tr>
            <td className="customer-container">
              <CustomerImage src={profilePic2} alt="Dianne Russell" />
              Cody Fisher
            </td>
            <td>95715620</td>
            <td>$545.00</td>
            <td>
              <StatusIcon status="Delivered">
                <FaCheckCircle />
                <StatusText>Delivered</StatusText>
              </StatusIcon>
            </td>
          </tr>
          <tr>
            <td className="customer-container">
              <CustomerImage src={profilePic1} alt="Dianne Russell" />
              Savannah Nguyen
            </td>
            <td>78514568</td>
            <td>$128.20</td>
            <td>
              <StatusIcon status="Delivered">
                <FaCheckCircle />
                <StatusText>Delivered</StatusText>
              </StatusIcon>
            </td>
          </tr>
        </tbody>
      </Table>
    </OrdersContainer>
  );
};

export default RecentOrders;
