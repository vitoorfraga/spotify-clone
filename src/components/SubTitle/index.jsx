import React from 'react'
import styles from './SubTitle.module.css'

export default function SubTitle({ text }) {
  return (
    <h3 className={styles.text}>{text}</h3>
  )
}
