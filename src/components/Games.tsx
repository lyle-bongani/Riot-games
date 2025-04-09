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
  padding: 2rem 0.75rem;
  background-color: rgb(46, 46, 46);
  color: white;
  position: relative;
  
  @media (min-width: 640px) {
    padding: 2.5rem 1rem;
  }
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 5rem 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 1.5rem;
  padding: 0 0.5rem;
  
  @media (min-width: 640px) {
    margin: 0 auto 2rem;
    padding: 0 1rem;
  }
  
  @media (min-width: 768px) {
    margin: 0 auto 3rem;
  }
`;

const Title = styled.h2`
  font-family: "Riot", Arial, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
  margin: 0;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.4rem;
    left: 0;
    width: 32px;
    height: 3px;
    background: #d13639;
    border-radius: 2px;
  }

  @media (min-width: 640px) {
    font-size: 2rem;
    &::after {
      bottom: -0.5rem;
      width: 40px;
    }
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
    &::after {
      bottom: -0.75rem;
      width: 50px;
    }
  }

  @media (min-width: 1024px) {
    font-size: 2.75rem;
    &::after {
      width: 60px;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 0 0.5rem;
  
  @media (min-width: 480px) {
    gap: 1.25rem;
  }
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const GameContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 2;
  transform: translateY(0);
  transition: transform 0.3s ease;
  
  @media (min-width: 480px) {
    padding: 1.25rem;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const GameCard = styled.a<{ isHovered: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  height: 240px;
  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  @media (min-width: 480px) {
    height: 260px;
    border-radius: 8px;
  }
  
  @media (min-width: 640px) {
    height: 320px;
    border-radius: 10px;
  }
  
  @media (min-width: 1024px) {
    height: 360px;
    border-radius: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  @media (hover: hover) {
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
  }

  @media (hover: none) {
    &:active {
      transform: scale(0.98);
    }
  }
`;

const GameTitle = styled.h3`
  font-family: "Riot", Arial, sans-serif;
  font-size: 1.125rem;
  color: white;
  margin: 0 0 0.375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  
  @media (min-width: 480px) {
    font-size: 1.25rem;
    margin: 0 0 0.5rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 0.75rem;
  }
`;

const GameDescription = styled.p`
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0 0 0.875rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (min-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0 0 1rem;
  }
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0 1.25rem;
  }
`;

const PlayNowButton = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.4375rem 0.875rem;
  background: #d13639;
  color: white;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.8125rem;
  transition: all 0.3s ease;
  
  @media (min-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 1.125rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
  
  svg {
    margin-left: 0.375rem;
    font-size: 0.75rem;
    transition: transform 0.3s ease;
    
    @media (min-width: 480px) {
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }
  
  @media (hover: hover) {
    ${GameCard}:hover & {
      background: #ff424b;
      
      svg {
        transform: translateX(3px);
      }
    }
  }

  @media (hover: none) {
    &:active {
      background: #ff424b;
    }
  }
`;

const Platform = styled.div`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 4px;
  font-size: 0.6875rem;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.02em;
  
  @media (min-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
    gap: 0.375rem;
    padding: 0.25rem 0.625rem;
    font-size: 0.75rem;
  }
  
  @media (min-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
  
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
