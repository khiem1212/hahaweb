import React from "react";
import styled from "styled-components";

const Contanier = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Contanier>
    Super Deal! Free Shipping on Orders Over $50
  </Contanier>;
};

export default Announcement;
