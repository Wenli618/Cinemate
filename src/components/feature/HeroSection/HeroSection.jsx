import styles from './HeroSection.module.scss';

function HeroSection({title, description, bgImage}) {
  
  return (
    <div 
      className={styles.hero}
      style={{backgroundImage:`url(${bgImage})`}}
    >
      <div className={styles.overlay}>
        <h1>{title}</h1>
        {{description}&&<p>{description}</p>}
      </div>
    </div>
  );
}

export default HeroSection;