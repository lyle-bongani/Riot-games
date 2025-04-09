import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('./images/pattern.png') repeat;
    opacity: 0.05;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
    margin: 0;
  }
`;

const Badge = styled(motion.div)`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    font-size: 0.9375rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled(motion.h2)`
  font-family: "Riot", Arial, sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 1rem;
  position: relative;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    width: 60px;
    height: 4px;
    background: #ffffff;
    border-radius: 2px;
    transform: translateX(-50%);

    @media (min-width: 1024px) {
      left: 0;
      transform: none;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    margin-bottom: 3rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.375rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #e0e0e0;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const PrimaryButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  background: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    width: auto;
    font-size: 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    width: auto;
    font-size: 1.1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 24px;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
`;

const WereHiring: React.FC = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Join Our Team
          </Badge>
          <Title>We're Hiring</Title>
          <Subtitle>
            Join us in shaping the future of gaming. At Riot, we're looking for passionate individuals who want to create unforgettable experiences for players worldwide.
          </Subtitle>
          <StatsGrid>
            <StatCard
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <StatNumber>131</StatNumber>
              <StatLabel>Open positions</StatLabel>
            </StatCard>
            <StatCard
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <StatNumber>25</StatNumber>
              <StatLabel>Offices worldwide</StatLabel>
            </StatCard>
          </StatsGrid>
          <ButtonGroup>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Careers
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </SecondaryButton>
          </ButtonGroup>
        </ContentWrapper>
        <ImageWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="./images/annie.jpg" alt="Riot Games Office" />
          <FloatingElements>
            <FloatingElement
              style={{ top: '20%', left: '10%', width: '100px', height: '100px' }}
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <FloatingElement
              style={{ top: '60%', right: '15%', width: '80px', height: '80px' }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </FloatingElements>
        </ImageWrapper>
      </Container>
    </Section>
  );
};

export default WereHiring;
