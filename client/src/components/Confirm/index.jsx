import React from 'react'
import styles from './style.module.css'
import Button from '../Button'
export default function Confirm() {
  return (
    <div className={styles.container}>
        <p className={styles.p}>Are you sure you want to delete this message?</p>
        <div className={styles.buttons}>
            <div className={styles.a}><Button>Confirm</Button></div>
            <div className={styles.b}><Button>Cancel</Button></div>
        </div>
    </div>
  )
}
