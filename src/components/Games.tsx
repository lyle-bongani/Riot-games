import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaGamepad } from 'react-icons/fa';

interface GameItem {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  platform?: string;
}

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: rgb(46, 46, 46);
  color: white;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto 3rem;
`;

const Title = styled.h2`
  font-family: "Riot", Arial, sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
  margin: 0;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 0;
    width: 60px;
    height: 3px;
    background: #d13639;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const GameContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  z-index: 2;
  transform: translateY(0);
  transition: transform 0.3s ease;
`;

const GameCard = styled.a<{ isHovered: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  height: 360px;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.7) 60%,
      rgba(0, 0, 0, 0.9) 100%
    );
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 0.95;
    }

    ${GameContent} {
      transform: translateY(-4px);
    }
  }
`;

const GameTitle = styled.h3`
  font-family: "Riot", Arial, sans-serif;
  font-size: 1.5rem;
  color: white;
  margin: 0 0 0.75rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const GameDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  margin: 0 0 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PlayNowButton = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.125rem;
  background: #d13639;
  color: white;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  svg {
    margin-left: 0.5rem;
    font-size: 0.8rem;
    transition: transform 0.3s ease;
  }
  
  ${GameCard}:hover & {
    background: #ff424b;
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const Platform = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 6px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.02em;
  
  svg {
    font-size: 0.8rem;
  }
`;

const games: GameItem[] = [
  {
    href: "https://www.leagueoflegends.com/en-gb/",
    src: "https://img.youtube.com/vi/TFzkbos0oeo/maxresdefault.jpg",
    alt: "League of Legends",
    title: "League of Legends",
    description: "Team up with friends and test your skills in 5v5 MOBA combat. All the high-skill competition you crave, minus the last-hitting.",
    platform: "PC"
  },
  {
    href: "https://playvalorant.com/en-gb/",
    src: "https://img.youtube.com/vi/Iyd2VUcoTBY/maxresdefault.jpg",
    alt: "Valorant",
    title: "Valorant",
    description: "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using tactical abilities and precise gunplay.",
    platform: "PC"
  },
  {
    href: "https://teamfighttactics.leagueoflegends.com/en-gb/",
    src: "https://img.youtube.com/vi/liNLLx874g4/maxresdefault.jpg",
    alt: "Teamfight Tactics",
    title: "Teamfight Tactics",
    description: "Face off against seven opponents in a free-for-all race to build a powerful team that fights on your behalf.",
    platform: "PC & Mobile"
  },
  {
    href: "https://wildrift.leagueoflegends.com/en-gb/",
    src: "https://img.youtube.com/vi/e2TZAAQmGho/maxresdefault.jpg",
    alt: "League of Legends: Wild Rift",
    title: "Wild Rift",
    description: "Experience the thrill of League of Legends, now optimized for mobile and console. Choose your champion, make the plays, and destroy the Nexus in 15-20 minute matches.",
    platform: "Mobile & Console"
  }
];

const Games: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section>
      <Header>
        <Title>Our Games</Title>
      </Header>
      <Content>
        {games.map((game, index) => (
          <GameCard
            key={index}
            href={game.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundImage: `url(${game.src})` }}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {game.platform && (
              <Platform>
                <FaGamepad />
                {game.platform}
              </Platform>
            )}
            <GameContent>
              <GameTitle>{game.title}</GameTitle>
              <GameDescription>{game.description}</GameDescription>
              <PlayNowButton>
                Play Now
                <FaArrowRight />
              </PlayNowButton>
            </GameContent>
          </GameCard>
        ))}
      </Content>
    </Section>
  );
};

export default Games;
