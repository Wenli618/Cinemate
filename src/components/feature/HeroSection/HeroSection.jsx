import styles from './HeroSection.module.scss';

function HeroSection({title, description, bgImage, isOverlay=false}) {
  
  return (
    <div 
      className={styles.hero}
      style={{backgroundImage:`url(${bgImage})`}}
    >
      <div className={styles.overlay} style={{backgroundColor: isOverlay ? 'rgba(3, 4, 8, 0.4)' : 'transparent'}}>
        <h1>{title}</h1>
        {{description}&&<p>{description}</p>}
      </div>
    </div>
  );
}

export default HeroSection;