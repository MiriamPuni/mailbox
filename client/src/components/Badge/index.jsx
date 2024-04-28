import React from 'react'
import styles from './style.module.css'
export default function Badge({children}) {
  return <div className={styles.badge}>
    {children}
    </div>
}
