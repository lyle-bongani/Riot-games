import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background-color: rgb(46, 46, 46);
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: "Riot", Arial, sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 28.8px;
  color: #fff;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem; /* Add space between the images */
`;

const EsportsImage = styled.a`
  display: block;
  width: 80%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const esports = [
  {
    href: "https://lolesports.com/en-US/",
    src: "https://img.youtube.com/vi/ctvf2AkdRbs/maxresdefault.jpg",
    alt: "Esports 1"
  },
  {
    href: "https://valorantesports.com/en-US/",
    src: "https://img.youtube.com/vi/yngokLDRu1Q/maxresdefault.jpg",
    alt: "Esports 2"
  }
];

const Esports: React.FC = () => {
  return (
    <Section>
      <Header>
        <Title>E-Sports</Title>
      </Header>
      <Content>
        {esports.map((esport, index) => (
          <EsportsImage key={index} href={esport.href} target="_blank" rel="noopener noreferrer">
            <img src={esport.src} alt={esport.alt} />
          </EsportsImage>
        ))}
      </Content>
    </Section>
  );
};

export default Esports;
