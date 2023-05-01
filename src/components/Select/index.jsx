import React, { useState } from 'react'
import styles from './Select.module.css'

import { ChevronDown } from 'lucide-react'

export default function Select() {

  const [active, setActive] = useState(false)

  function toggleModal() {
    setActive(!active)
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={toggleModal}>
        Recentes
        <ChevronDown size={16} fill='var(--white-600)'/>
      </button>

      {active && 
      <div className={styles.options}>
        <span className={styles.description}>Classificar por</span>
        <ul>
          <li><button className={styles.active}>Recentes ✓</button></li>
          <li><button className={styles.option}>Adicionados recentemente </button></li>
          <li><button className={styles.option}>Ordem alfabética </button></li>
          <li><button className={styles.option}>Criador </button></li>
        </ul>
      </div>
      }
    </div>
  )
}
