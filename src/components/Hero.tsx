import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  cursor: pointer; /* Add cursor pointer */
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroVideo autoPlay loop muted>
        <source src="./images/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </HeroVideo>
    </HeroSection>
  );
};

export default Hero;
