import React from 'react'
import styles from './style.module.css'
import { Outlet } from 'react-router-dom'
export default function NotFound() {
  return (
    <>
    <div className={styles.container}>
        <img src='../../../public/logo.png' alt="logo" />
        404 Not Found
        </div>
        <Outlet/>
    </>
  )
}
