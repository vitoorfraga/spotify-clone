import React from 'react';
import styles from './Playlist.module.css';

import { Play } from 'lucide-react';

export default function PlayList({ description, src, title, variant, }) {

  const customStyle = variant === 
  "thumbAndTitle"  ? styles.thumbAndTitle :
  variant === "thumbTitleAndDescription" ?  styles.thumbTitleAndDescription :
  styles.wrapper

  return (
    <div className={customStyle}>
      <div className={styles.thumb}>
        <img className={styles.thumb} src={src}/>
        { variant === "thumbTitleAndDescription" && 
          <div className={styles.play}>
            <Play fill='var(--black-200)' stroke='0'/>
          </div>
        }

      </div>
      
      <div >
        {title && <span className={styles.title}>{title}</span>}
        {description && <span className={styles.description}>{description}</span> }
      </div>
    </div>
  )
}
