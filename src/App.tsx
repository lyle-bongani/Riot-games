import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsHappening from './components/WhatsHappening';
import Games from './components/Games';
import Esports from './components/Esports';
import Entertainment from './components/Entertainment'; // Import Entertainment
import WereHiring from './components/WereHiring'; // Import WereHiring
import Footer from './components/Footer'; // Import Footer

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0; // Set volume to maximum
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.error('Error playing audio:', error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Header isPlaying={isPlaying} togglePlay={togglePlay} />
      <Hero />
      <WhatsHappening />
      <Games />
      <Esports />
      <Entertainment /> {/* Add Entertainment component */}
      <WereHiring /> {/* Add We're Hiring component */}
      <Footer /> {/* Add Footer component */}
      <audio ref={audioRef} autoPlay loop>
        <source src="./audio/background-music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default App;
