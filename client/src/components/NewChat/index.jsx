import React from 'react'
import styles from './style.module.css'
import CreateMsg from '../CreateMsg'
import Button from '../Button'
export default function NewChat() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>New Message</div>
        <div className={styles.allInput}><label htmlFor="">Subject<input className={styles.input} type="text" name="subject" placeholder='subject...'/></label></div>
        <div className={styles.allInput}><label htmlFor="">Members<input className={styles.inputB} type="text" name="subject" id="" /></label><div className={styles.add}><Button>add</Button></div></div>
        <div className={styles.msg}> <p>Message</p> <div className={styles.createMsg}><CreateMsg/></div></div>
    </div>
  )
}
