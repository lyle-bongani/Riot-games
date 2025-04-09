import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 3rem 1rem;
  color: white;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 5rem 2rem;
  }

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

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  font-family: "Riot", Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  margin: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 40px;
    height: 3px;
    background: #d13639;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    &::after {
      bottom: -0.75rem;
      width: 50px;
    }
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    &::after {
      width: 60px;
    }
  }
`;

const SeeMoreButton = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  border-radius: 24px;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
  }
  
  &:hover {
    background: white;
    color: black;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainNews = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const MainContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    transparent 100%
  );
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const MainTitle = styled.h3`
  font-family: "Riot", Arial, sans-serif;
  font-size: 1.5rem;
  color: white;
  margin: 0 0 1rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const MainDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsCard = styled.a`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const NewsImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
` as any;

const NewsContent = styled.div`
  flex: 1;
` as any;

const NewsTitle = styled.h4`
  font-family: "Riot", Arial, sans-serif;
  font-size: 1rem;
  color: white;
  margin: 0 0 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const NewsDate = styled.span`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
`;

const WhatsHappening: React.FC = () => {
  return (
    <Section>
      <Container>
        <Header>
          <Title>What's Happening</Title>
          <SeeMoreButton>See More News</SeeMoreButton>
        </Header>
        <Content>
          <MainNews>
            <MainImage src="https://img.youtube.com/vi/5hugGCZon3I/maxresdefault.jpg" alt="Project L news" />
            <MainContent>
              <MainTitle>Project L: The Fighting Game Set in the League Universe</MainTitle>
              <MainDescription>
                Get ready for an exciting new chapter in the League of Legends universe with Project L,
                our upcoming fighting game featuring iconic champions.
              </MainDescription>
            </MainContent>
          </MainNews>
          <NewsList>
            <NewsCard href="#">
              <NewsImage src="https://img.youtube.com/vi/OHzUoFKPUB0/maxresdefault.jpg" alt="Valorant news" />
              <NewsContent>
                <NewsTitle>Valorant's New Agent Revealed</NewsTitle>
                <NewsDate>2 days ago</NewsDate>
              </NewsContent>
            </NewsCard>
            <NewsCard href="#">
              <NewsImage src="https://img.youtube.com/vi/9nb-woMTdVI/maxresdefault.jpg" alt="League of Legends news" />
              <NewsContent>
                <NewsTitle>League of Legends Patch Notes 13.10</NewsTitle>
                <NewsDate>4 days ago</NewsDate>
              </NewsContent>
            </NewsCard>
            <NewsCard href="#">
              <NewsImage src="https://img.youtube.com/vi/liNLLx874g4/maxresdefault.jpg" alt="TFT news" />
              <NewsContent>
                <NewsTitle>TFT Set 9 Preview</NewsTitle>
                <NewsDate>1 week ago</NewsDate>
              </NewsContent>
            </NewsCard>
          </NewsList>
        </Content>
      </Container>
    </Section>
  );
};

export default WhatsHappening;
