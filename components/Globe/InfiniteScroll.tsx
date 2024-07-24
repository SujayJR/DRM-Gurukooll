import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollText = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const ScrollContainer = styled.div`
  position: absolute; /* Positioned relative to the nearest positioned ancestor */
  bottom: 0;
  left: 0;
  width: 150vw; /* Full viewport width */
  height: 80vh; /* Adjust height as needed */
  overflow: hidden;
  background-color: transparent;
  z-index: 1; /* Ensure it is on top */
`;

const ScrollTitle = styled.div`
  display: flex;
  align-items: center;
  width: 400%; /* Ensure enough width for continuous scroll */
  white-space: nowrap;
  animation: ${scrollText} 10s linear infinite; /* Adjust duration for scrolling speed */

  h1 {
    margin: 0;
    font-size: 10rem; /* Adjust font size as needed */
    font-weight: bold;
    font-family: Calibri, sans-serif;
    color: rgba(0, 0, 0, 1);
    padding: 0 1rem; /* Padding for spacing */
  }

  a {
    text-decoration: none;
    color: #D2D4D3;
  }

  a:hover {
    -webkit-text-stroke: 1px #D2D4D3;
    color: transparent;
  }
`;

const InfiniteScrollText: React.FC = () => {
  return (
    <ScrollContainer>
      <ScrollTitle>
        <h1>
          <a href="">DRM</a> <a href="">Gurukooll</a>&nbsp;
          <a href="">DRM</a> <a href="">Gurukooll</a>&nbsp;
          <a href="">DRM</a> <a href="">Gurukooll</a>&nbsp;
          <a href="">DRM</a> <a href="">Gurukooll</a>&nbsp;
        </h1>
      </ScrollTitle>
    </ScrollContainer>
  );
};

export default InfiniteScrollText;
