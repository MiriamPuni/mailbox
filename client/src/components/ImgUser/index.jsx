import React from 'react'
import styles from './style.module.css'
export default function ImgUser({src}) {
  return (
    <img className={styles.img} src={src} alt="user" />
  )
}
