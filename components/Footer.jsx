import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #222;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #aaa;
  gap: 0.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <p>ShopPulse © 2023 </p>
      <p>Bumbogo, Kigali Innovation City, Next to Azam, Kigali, Rwanda</p>
      <p>Contact us: ednahakoth21@gmail.com </p>
    </FooterWrapper>
  );
}

export default Footer
