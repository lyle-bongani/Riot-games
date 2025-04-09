import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 2rem;
  margin-botton: 2rem;
  color: white;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./images/background.jpeg') no-repeat center center;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-family: "Riot", Arial, sans-serif; /* Update font */
  font-size: 50px;
  font-weight: 600;
  line-height: 28.8px;
  color: #fff;
`;

const SeeMoreButton = styled.button`
background: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  border-radius: 10px; /* Add corner radius */
  padding: 0.5rem 1rem;
  transition: filter 0.3s ease;
  &:hover,
  &:active {
    filter: brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(7488%) hue-rotate(357deg) brightness(101%) contrast(107%);
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  padding-top: 2rem;
  gap: 5px;
`;

const LeftSide = styled.div`
  flex: 2;
  margin-right: 1rem;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer; /* Add cursor pointer */
`;

const SmallCard = styled.div`
  position: relative;
  display: flex;
  padding-left: 2rem; /* Add padding to the left side */
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./images/background.jpeg') no-repeat center center;
    background-size: cover;
    filter: blur(10px); /* Ensure the background image is blurry */
    z-index: -1;
  }
`;

const CardContent = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const CardImage = styled.img`
  width: 50%; /* Cover half the card */
  height: auto;
  border-radius: 10px;
  margin-left: 1rem;
  border: none; /* Remove border */
  position: relative;
  z-index: 1;
`;

const CardTitle = styled.h2`
  font-family: "FF Mark W05", Arial, sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 38.6px;
  color: #fff;
`;

const SmallCardTitle = styled.h6`
  font-family: "FF Mark W05", Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: #fff; /* Update color to white */
  margin-bottom: 0.5rem;
  a {
    color: white;
    text-decoration: none; /* Remove underline */
  }
`;

const CardDescription = styled.p`
  font-family: Arial, sans-serif;
  font-size: 16px; /* Make text bigger */
  line-height: 20px; /* Make text bigger */
  color: white; /* Ensure text is white */
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Add gap between icon and text */
`;

const WhatsHappening: React.FC = () => {
  return (
    <Section>
      <Header>
        <Title>What's happening?</Title>
        <SeeMoreButton>See more</SeeMoreButton>
      </Header>
      <Content>
        <LeftSide>
          <Image src="https://img.youtube.com/vi/ukhcyHb5kHA/maxresdefault.jpg" alt="event-1" />
          <CardTitle>Dawn of the Duelist // VALORANT Masters <br /> Bangkok Cinematic</CardTitle>
          <CardDescription><FaNewspaper size={24} />News</CardDescription> {/* Make icon bigger */}
        </LeftSide>
        <RightSide>
          <SmallCard>
            <CardContent>
              <SmallCardTitle><a href="https://valorantesports.com/en-US/news/masters-bangkok-eyntk-2025">Masters Bangkok: <br /> EYNTK</a></SmallCardTitle>
              <CardDescription><FaNewspaper size={24} />News</CardDescription> {/* Make icon bigger */}
            </CardContent>
            <CardImage src="./images/event-1.avif" alt="event-1" />
          </SmallCard>
          <SmallCard>
            <CardContent>
              <SmallCardTitle><a href="https://www.riotgames.com/en/news/ewc-2025">Why We’re Returning <br /> to the Esports Wor...</a></SmallCardTitle>
              <CardDescription><FaNewspaper size={24} />News</CardDescription> {/* Make icon bigger */}
            </CardContent>
            <CardImage src="./images/event-2.png" alt="event-2" />
          </SmallCard>
          <SmallCard>
            <CardContent>
              <SmallCardTitle><a href="https://www.riotgames.com/en/news/year-snake-league-valorant">Celebrating the Year <br /> of the Snake</a></SmallCardTitle>
              <CardDescription><FaNewspaper size={24} />News</CardDescription> {/* Make icon bigger */}
            </CardContent>
            <CardImage src="./images/event-3.png" alt="event-3" />
          </SmallCard>
          <SmallCard>
            <CardContent>
              <SmallCardTitle><a href="https://www.youtube.com/watch?v=wvHbfxNcfgk">Dev Double Up: <br /> Making Unbound a...</a></SmallCardTitle>
              <CardDescription><FaNewspaper size={24} />News</CardDescription> {/* Make icon bigger */}
            </CardContent>
            <CardImage src="https://img.youtube.com/vi/wvHbfxNcfgk/mqdefault.jpg" alt="event-4" />
          </SmallCard>
        </RightSide>
      </Content>
    </Section>
  );
};

export default WhatsHappening;
