import React from 'react';
import styles from './PlayerControls.module.css';

import { Shuffle, SkipBack,  SkipForward, Play, Repeat2 } from 'lucide-react'

export default function PlayerControls() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <button className={styles.action}>
          <Shuffle size={20}/>
        </button>

        <button className={styles.action}>
          <SkipBack size={20}/>
        </button>

        <button className={styles.actionWithBackground}>
          <Play fill='var(--black-400)' size={18}/>
        </button>

        <button className={styles.action}>
          <SkipForward size={20}/>
        </button>

        <button className={styles.action}>
          <Repeat2 size={20}/>
        </button>
      </div>

      <div className={styles.bottom}>
        <span>0:01</span>

        <div className={styles.timeBar}></div>

        <span>3:43</span>
      </div>
    </div>
  )
}
