import React from 'react'
import styles from './style.module.css'
import { MdLabel } from "react-icons/md";
import { NavLink } from 'react-router-dom';
export default function Label({name, color}) {
  return (
    <NavLink to={`labels/${name}`} className={styles.container}>
        <MdLabel className={styles.icon} size={'30px'} color={color}/>
        {name}
        </NavLink>
  )
}
