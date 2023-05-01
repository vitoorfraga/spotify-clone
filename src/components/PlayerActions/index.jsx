import React from 'react'
import styles from './PlayerActions.module.css'
import { Mic2, ListMusic,  MonitorSpeaker, Volume2, Maximize2} from 'lucide-react'


export default function PlayerActions() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.action} >
        <Mic2 size={16}/>
      </button>

      <button className={styles.action}>
        <ListMusic size={16}/>
      </button>

      <button className={styles.action}>
        <MonitorSpeaker size={16}/>
      </button>


      <button className={styles.volumeBar}>
        <Volume2 size={16}/>
        <div className={styles.bar}></div>
      </button>

      <button className={styles.action}>
        <Maximize2 size={16}/>
      </button>
  </div>
  )
}
