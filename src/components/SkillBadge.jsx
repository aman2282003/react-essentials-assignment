import '../styles/SkillBadge.css';

function SkillBadge({ skill }) {
  return (
    <div className="skill-badge">
      <span className="skill-text">{skill}</span>
    </div>
  );
}

export default SkillBadge;
