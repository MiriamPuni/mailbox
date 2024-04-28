import React from 'react'
import styles from './style.module.css'
export default function TextBox() {
  return (
    <div className={styles.box}><textarea className={styles.textarea}></textarea></div>
  )
}
