import '../styles/ProfileImage.css';

function ProfileImage({ src, alt }) {
  return (
    <div className="profile-image-wrapper">
      <img
        src={src}
        alt={alt}
        className="profile-image"
      />
    </div>
  );
}

export default ProfileImage;
