import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FaGlobeAmericas, FaSearch, FaMusic, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GlobalStyle = createGlobalStyle<{ $menuOpen: boolean; $scrollPosition: number }>`
  body {
    ${({ $menuOpen, $scrollPosition }) => $menuOpen ? `
      position: fixed;
      top: -${$scrollPosition}px;
      left: 0;
      right: 0;
      bottom: 0;
    ` : ''}
  }
`;

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ isScrolled }) => (isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent')};
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  box-sizing: border-box; /* Ensure padding is included in the width */
  transition: all 0.3s ease;
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(8px)' : 'none')};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  filter: brightness(0) invert(1); /* Make the logo white */
  transition: filter 0.3s ease;
  margin-right: 1rem;
  cursor: pointer;
  &:hover,
  &:active {
    filter: brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(7488%) hue-rotate(357deg) brightness(101%) contrast(107%);
  }
`;

const CircleContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const AdditionalImage = styled.img`
  width: 50px;
  height: auto;
  cursor: pointer;
`;

// Add interfaces for styled components props
interface MobileMenuButtonProps {
  $isOpen: boolean;
}

interface NavProps {
  $isOpen: boolean;
}

interface NavLinkProps {
  $isOpen: boolean;
}

interface SearchBarProps {
  $isOpen: boolean;
}

const MobileMenuButton = styled.button<MobileMenuButtonProps>`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 20;
  position: relative;
  width: 40px;
  height: 40px;
  padding: 0;
  transition: transform 0.3s ease;

  &::before,
  &::after,
  span {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    width: 24px;
    height: 2px;
    background: white;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  &::before {
    top: 12px;
  }

  span {
    top: 19px;
  }

  &::after {
    bottom: 12px;
  }

  ${({ $isOpen }) => $isOpen && `
    &::before {
      transform: translateX(-50%) rotate(45deg);
      top: 19px;
    }

    span {
      opacity: 0;
      transform: translateX(-50%) scale(0);
    }

    &::after {
      transform: translateX(-50%) rotate(-45deg);
      bottom: 19px;
    }
  `}

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({ $isOpen }) => $isOpen ? '-10px 0 30px rgba(0, 0, 0, 0.3)' : 'none'};
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    will-change: transform;
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  }
`;

const NavLink = styled.a<NavLinkProps>`
  color: white;
  text-decoration: none;
  font-family: "Poppins", Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #d13639;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #d13639;
    transform: translateY(-2px);
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 1rem 0;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.3s ease;
    
    ${({ $isOpen }) => $isOpen && `
      opacity: 1;
      transform: translateX(0);
    `}
    
    &:nth-child(1) { transition-delay: 0.1s; }
    &:nth-child(2) { transition-delay: 0.2s; }
    &:nth-child(3) { transition-delay: 0.3s; }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  color: black;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 20;
`;

const DropdownItem = styled.a`
  padding: 10px 20px;
  display: block;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
    width: 100%;
  }
`;

const SearchBar = styled.div<SearchBarProps>`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }

  &:focus-within {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: white;
  width: 150px;
  margin-left: 0.5rem;
  font-size: 0.875rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SignInButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1.5rem;
  }
`;

const MusicControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: filter 0.3s ease;
  &:hover,
  &:active {
    filter: brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(7488%) hue-rotate(357deg) brightness(101%) contrast(107%);
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 9;
  }
`;

const Header: React.FC<{ isPlaying: boolean; togglePlay: () => void }> = ({ isPlaying, togglePlay }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      // Store current scroll position when opening menu
      setScrollPosition(window.pageYOffset);
    } else {
      // Restore scroll position when closing menu
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 10);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOverlayClick = () => {
    toggleMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobileMenuOpen) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Clean up body styles when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  return (
    <>
      <GlobalStyle $menuOpen={isMobileMenuOpen} $scrollPosition={scrollPosition} />
      <Overlay $isOpen={isMobileMenuOpen} onClick={handleOverlayClick} />
      <HeaderContainer isScrolled={isScrolled}>
        <LogoContainer>
          <Logo src="./images/logo-1.png" alt="Riot Games Logo" onClick={toggleDropdown} />
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem href="#option1">Option 1</DropdownItem>
              <DropdownItem href="#option2">Option 2</DropdownItem>
              <DropdownItem href="#option3">Option 3</DropdownItem>
            </DropdownMenu>
          )}
          <CircleContainer>
            <AdditionalImage src="./images/logo-2.png" alt="Additional Image" />
          </CircleContainer>
        </LogoContainer>

        <MobileMenuButton onClick={toggleMobileMenu} $isOpen={isMobileMenuOpen}>
          <span />
        </MobileMenuButton>

        <Nav $isOpen={isMobileMenuOpen}>
          <NavLink href="#who-we-are" onClick={() => setIsMobileMenuOpen(false)} $isOpen={isMobileMenuOpen}>
            Who We Are
          </NavLink>
          <NavLink href="#work-with-us" onClick={() => setIsMobileMenuOpen(false)} $isOpen={isMobileMenuOpen}>
            Work with Us
          </NavLink>
          <NavLink href="#news" onClick={() => setIsMobileMenuOpen(false)} $isOpen={isMobileMenuOpen}>
            News
          </NavLink>
          
          <IconContainer>
            <FaGlobeAmericas />
            <SearchBar $isOpen={isMobileMenuOpen}>
              <FaSearch />
              <SearchInput type="text" placeholder="Search" />
            </SearchBar>
            <MusicControlButton onClick={togglePlay}>
              <FaMusic />
            </MusicControlButton>
            <SignInButton>Sign In</SignInButton>
          </IconContainer>
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
