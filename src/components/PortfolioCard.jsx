import { useState } from 'react';
import SkillBadge from './SkillBadge';
import ProfileImage from './ProfileImage';
import ThemeToggle from './ThemeToggle';
import '../styles/PortfolioCard.css';

function PortfolioCard() {
  const [likes, setLikes] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const profileData = {
    name: 'Sarah Anderson',
    title: 'Full Stack Developer',
    bio: 'Passionate about building beautiful and functional web applications. Coffee enthusiast and open source contributor.',
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    ],
    skills: [
      'React',
      'JavaScript',
      'CSS',
      'HTML',
      'Node.js',
      'MongoDB',
      'Git',
      'Figma',
    ],
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLike = () => {
    setLikes(likes + 1);
    alert(`You liked this profile! Total likes: ${likes + 1}`);
  };

  const handleCyclePhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex + 1) % profileData.photos.length
    );
  };

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="portfolio-card">
        {/* Theme Toggle */}
        <ThemeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />

        {/* Profile Section */}
        <div className="profile-section">
          <ProfileImage
            src={profileData.photos[currentPhotoIndex]}
            alt={profileData.name}
          />
          <button
            className="cycle-photo-btn"
            onClick={handleCyclePhoto}
            title="Cycle through photos"
          >
            🔄
          </button>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">{profileData.name}</h1>
          <p className="profile-title">{profileData.title}</p>
          <p className="profile-bio">{profileData.bio}</p>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-container">
            {profileData.skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="like-btn" onClick={handleLike}>
            ❤️ Like ({likes})
          </button>
          <button
            className="contact-btn"
            onClick={() => alert('Contact form coming soon!')}
          >
            📧 Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
