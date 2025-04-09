import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGlobeAmericas, FaSearch, FaMusic } from 'react-icons/fa'; // Import icons

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

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ isScrolled }) => (isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent')};
  color: white;
  padding-right: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  box-sizing: border-box; /* Ensure padding is included in the width */
  transition: background 0.3s ease;
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

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-family: "Poppins", Arial, sans-serif; /* Update font */
  font-size: 13px; /* Increase font size */
  font-weight: 500;
  line-height: 19.2px;
  animation: ${fadeIn} 0.5s ease-in-out;
  &:hover {
    text-decoration: underline;
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
  gap: 1rem;
  margin-left: auto; /* Align icons to the right */
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent; /* Make the search bar colorless */
  border-radius: 10px; /* Add corner radius */
  padding: 0.5rem;
  color: black;
  justify-content: flex-end; /* Align elements to the right */
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 0.5rem;
  background-color: transparent; /* Make the input background colorless */
  color: white; /* Ensure text is visible */
`;

const SignInButton = styled.button`
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

const Header: React.FC<{ isPlaying: boolean; togglePlay: () => void }> = ({ isPlaying, togglePlay }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.clientHeight || 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
      <Nav>
        <NavLink href="#who-we-are">Who We Are</NavLink>
        <NavLink href="#work-with-us">Work with Us</NavLink>
        <NavLink href="#news">News</NavLink>
      </Nav>
      <IconContainer>
        <FaGlobeAmericas />
        <SearchBar>
          <FaSearch color="white" /> {/* Make the search icon white */}
          <SearchInput type="text" placeholder="Search" />
        </SearchBar>
        <MusicControlButton onClick={togglePlay}>
          <FaMusic />
        </MusicControlButton>
        <SignInButton>Sign In</SignInButton>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
