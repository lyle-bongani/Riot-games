import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 1rem;
  background-color: rgb(46, 46, 46);
  color: white;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
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

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const EsportsCard = styled.a`
  display: block;
  width: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const EsportsImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.5s ease;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-family: "Riot", Arial, sans-serif;
  font-size: 1.5rem;
  color: white;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const esports = [
  {
    href: "https://lolesports.com/",
    src: "https://img.youtube.com/vi/ctvf2AkdRbs/maxresdefault.jpg",
    alt: "League of Legends Esports",
    title: "League of Legends Esports"
  },
  {
    href: "https://valorantesports.com/",
    src: "https://img.youtube.com/vi/yngokLDRu1Q/maxresdefault.jpg",
    alt: "Valorant Esports",
    title: "Valorant Champions Tour"
  }
];

const Esports: React.FC = () => {
  return (
    <Section>
      <Header>
        <Title>Esports</Title>
      </Header>
      <Content>
        {esports.map((esport, index) => (
          <EsportsCard key={index} href={esport.href} target="_blank" rel="noopener noreferrer">
            <EsportsImage src={esport.src} alt={esport.alt} />
            <Overlay>
              <CardTitle>{esport.title}</CardTitle>
            </Overlay>
          </EsportsCard>
        ))}
      </Content>
    </Section>
  );
};

export default Esports;
