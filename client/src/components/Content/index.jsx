import React from 'react'
import styles from './style.module.css'
import DisplayMail from '../DisplayMail'
import CreateMsg from '../CreateMsg'
import { FaEllipsisVertical, FaStar } from 'react-icons/fa6'
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
import { IoMdPrint } from 'react-icons/io'
import { MdLabel } from 'react-icons/md'
export default function Content() {
  return <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.labels}>
        <div className={styles.label}>
        {/* <MdLabel className={styles.icon} size={'100%'} color={'blue'}/> */}
        <p className={styles.p}>luli</p>
        <button className={styles.buttonX}><AiOutlineClose/></button>
        </div>
      </div>
      <div className={styles.icons}>
        <FaStar color='var(--b-color)' />
        <IoMdPrint color='var(--b-color)' />
        <AiFillDelete color='var(--b-color)' />
        <FaEllipsisVertical color='var(--b-color)' />
      </div>
    </div>
    <DisplayMail />
    <div className={styles.createMsg}><CreateMsg /></div>
    
  </div>
}
