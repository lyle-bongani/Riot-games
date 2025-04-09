import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay, FaFilter } from 'react-icons/fa';

// Define types for entertainment items
interface EntertainmentItem {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category?: string;
  videoPreview?: string;
}

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: rgb(46, 46, 46);
  color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3rem;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto 3rem;
`;

const Title = styled.h2`
  font-family: "Riot", Arial, sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
  margin: 0;
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
  position: relative;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  &::before, &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
  }

  &::before {
    background: linear-gradient(
      to right,
      rgba(209, 54, 57, 0.2),
      rgba(209, 54, 57, 0.1),
      transparent 70%
    );
  }

  &::after {
    background: linear-gradient(
      to right,
      transparent 30%,
      rgba(209, 54, 57, 0.1),
      rgba(209, 54, 57, 0.2)
    );
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  padding: 0.75rem 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.25rem;
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  letter-spacing: 0.5px;
  white-space: nowrap;
  text-transform: uppercase;
  font-family: "Riot", Arial, sans-serif;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    width: ${props => props.active ? '100%' : '0'};
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(209, 54, 57, 0.8) 0%,
      rgba(209, 54, 57, 1) 50%,
      rgba(209, 54, 57, 0.8) 100%
    );
    transform: translateX(-50%) scaleX(${props => props.active ? 1 : 0});
    transform-origin: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 4px;
    box-shadow: ${props => props.active ? '0 0 10px rgba(209, 54, 57, 0.5), 0 0 20px rgba(209, 54, 57, 0.3)' : 'none'};
  }
  
  &:hover {
    color: white;
    transform: translateY(-1px);
    
    &::before {
      width: 100%;
      transform: translateX(-50%) scaleX(1);
      background: linear-gradient(
        90deg,
        rgba(209, 54, 57, 0.6) 0%,
        rgba(209, 54, 57, 0.8) 50%,
        rgba(209, 54, 57, 0.6) 100%
      );
    }
  }

  &:first-child {
    padding-left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1.5rem;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0;
  }
`;

const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const EntertainmentItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transform: translateZ(0);
  aspect-ratio: 16/9;
  
  &:hover {
    .preview-overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: auto;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(209, 54, 57, 0.95);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: #ff424b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.15);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const PreviewOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ItemTitle = styled.h3`
  font-family: "Riot", Arial, sans-serif;
  font-size: 1.75rem;
  color: white;
  margin: 0 0 0.75rem 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ItemDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: 0 0 1.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
`;

const VideoModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16/9;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: #d13639;
  }
`;

const entertainment: EntertainmentItem[] = [
  {
    href: "https://www.arcane.com/en-gb/",
    src: "https://img.youtube.com/vi/RfgKPLkRbcM/maxresdefault.jpg",
    alt: "Arcane",
    title: "Arcane",
    description: "Experience the world of League of Legends through the critically acclaimed animated series Arcane. Watch as the origins of iconic champions unfold in this thrilling Netflix series.",
    category: "series",
    videoPreview: "https://www.youtube.com/embed/RfgKPLkRbcM"
  },
  {
    href: "https://www.youtube.com/watch?v=5-mT9D4fdgQ",
    src: "https://img.youtube.com/vi/5-mT9D4fdgQ/maxresdefault.jpg",
    alt: "Pentakill",
    title: "Pentakill - Mortal Reminder",
    description: "Witness the epic return of Pentakill in this metal masterpiece. The virtual heavy metal band brings their signature sound to the League universe.",
    category: "music",
    videoPreview: "https://www.youtube.com/embed/5-mT9D4fdgQ"
  },
  {
    href: "https://www.youtube.com/watch?v=oGnZk-_R0KQ",
    src: "https://img.youtube.com/vi/oGnZk-_R0KQ/maxresdefault.jpg",
    alt: "Tales of Runeterra",
    title: "Tales of Runeterra",
    description: "Journey through the diverse regions of Runeterra in this animated anthology series. Each episode brings to life the rich lore and characters of the League universe.",
    category: "lore",
    videoPreview: "https://www.youtube.com/embed/oGnZk-_R0KQ"
  },
  {
    href: "https://www.youtube.com/watch?v=sVZpHFXcFJw",
    src: "https://img.youtube.com/vi/sVZpHFXcFJw/maxresdefault.jpg",
    alt: "True Damage",
    title: "True Damage - GIANTS",
    description: "Experience the groundbreaking hip-hop supergroup True Damage in their debut music video 'GIANTS', featuring a fusion of real and virtual artists.",
    category: "music",
    videoPreview: "https://www.youtube.com/embed/sVZpHFXcFJw"
  },
  {
    href: "https://www.youtube.com/watch?v=aR-KAldshAE",
    src: "https://img.youtube.com/vi/aR-KAldshAE/maxresdefault.jpg",
    alt: "Warriors",
    title: "Warriors",
    description: "The iconic collaboration between Riot Games and Imagine Dragons that became the anthem of League of Legends' competitive spirit.",
    category: "music",
    videoPreview: "https://www.youtube.com/embed/aR-KAldshAE"
  },
  {
    href: "https://www.youtube.com/watch?v=F5tSoaJ93ac",
    src: "https://img.youtube.com/vi/F5tSoaJ93ac/maxresdefault.jpg",
    alt: "Enemy",
    title: "Enemy",
    description: "Imagine Dragons x J.I.D - Enemy, from the League of Legends series Arcane. A powerful anthem that captures the spirit of the animated series.",
    category: "music",
    videoPreview: "https://www.youtube.com/embed/F5tSoaJ93ac"
  },
  {
    href: "https://www.youtube.com/watch?v=O4PDzBnBMU4",
    src: "https://img.youtube.com/vi/O4PDzBnBMU4/maxresdefault.jpg",
    alt: "Star Guardians",
    title: "Star Guardians",
    description: "Enter the magical world of the Star Guardians, where high school students transform into cosmic protectors in this anime-inspired universe.",
    category: "event",
    videoPreview: "https://www.youtube.com/embed/O4PDzBnBMU4"
  }
];

const Entertainment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const categoryLabels: { [key: string]: string } = {
    'all': 'Discover All',
    'series': 'Series & Shows',
    'music': 'Music & MVs',
    'lore': 'Universe',
    'event': 'Live Events'
  };
  
  const categories = ['all', ...entertainment
    .map(item => item.category)
    .filter((category): category is string => category !== undefined)
    .reduce<string[]>((unique, category) => 
      unique.includes(category) ? unique : [...unique, category]
    , [])
  ];
  
  const filteredItems = selectedCategory && selectedCategory !== 'all'
    ? entertainment.filter(item => item.category === selectedCategory)
    : entertainment;

  const handleVideoClick = (e: React.MouseEvent, videoUrl: string | undefined) => {
    e.preventDefault();
    if (videoUrl) {
      setSelectedVideo(videoUrl);
    }
  };

  return (
    <Section>
      <Header>
        <Title>Entertainment</Title>
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>
      </Header>
      <Content>
        <MasonryGrid>
          {filteredItems.map((item, index) => (
            <EntertainmentItem key={index}>
              <ItemImage src={item.src} alt={item.alt} />
              <PreviewOverlay className="preview-overlay">
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
                <ActionButtons>
                  {item.videoPreview && (
                    <ActionButton 
                      href="#"
                      onClick={(e) => handleVideoClick(e, item.videoPreview)}
                    >
                      <FaPlay /> Watch Preview
                    </ActionButton>
                  )}
                  <ActionButton 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                  >
                    Learn More
                  </ActionButton>
                </ActionButtons>
              </PreviewOverlay>
            </EntertainmentItem>
          ))}
        </MasonryGrid>
      </Content>
      
      <VideoModal isOpen={!!selectedVideo} onClick={() => setSelectedVideo(null)}>
        {selectedVideo && (
          <VideoContainer>
            <iframe
              src={selectedVideo}
              title="Video Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        )}
        <CloseButton onClick={() => setSelectedVideo(null)}>&times;</CloseButton>
      </VideoModal>
    </Section>
  );
};

export default Entertainment;