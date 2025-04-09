import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #000000;
  padding: 5rem 2rem 3rem;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  font-family: "Riot", Arial, sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: #aaaaaa;
  font-size: 1rem;
  max-width: 90%;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

const ColumnTitle = styled.h4`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: #ffffff;
  }
`;

const FooterLink = styled(motion.a)`
  color: #aaaaaa;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1rem;
  transition: color 0.3s ease;
  display: block;
  
  &:hover {
    color: #ffffff;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  color: #aaaaaa;
  font-size: 0.9rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const LegalLink = styled.a`
  color: #aaaaaa;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <Column
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo>RIOT GAMES</Logo>
            <Description>
              We're a team of passionate gamers on a mission to be the most player-focused game company in the world.
            </Description>
            <SocialIcons>
              <SocialIcon 
                href="#" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon 
                href="#" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon 
                href="#" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon 
                href="#" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-youtube"></i>
              </SocialIcon>
            </SocialIcons>
          </Column>
          
          <Column
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              About Us
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Careers
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Press
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Support
            </FooterLink>
          </Column>
          
          <Column
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ColumnTitle>Games</ColumnTitle>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              League of Legends
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Valorant
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Teamfight Tactics
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Legends of Runeterra
            </FooterLink>
          </Column>
          
          <Column
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ColumnTitle>Resources</ColumnTitle>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Developer Portal
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Merchandise
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Esports
            </FooterLink>
            <FooterLink 
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Universe
            </FooterLink>
          </Column>
        </TopSection>
        
        <BottomSection>
          <Copyright>© {new Date().getFullYear()} Riot Games, Inc. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink href="#">Privacy Policy</LegalLink>
            <LegalLink href="#">Terms of Service</LegalLink>
            <LegalLink href="#">Cookie Policy</LegalLink>
            <LegalLink href="#">Legal</LegalLink>
          </LegalLinks>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 