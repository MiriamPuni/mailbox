import React from 'react'
import styles from './style.module.css'
import TextBox from '../TextBox'
import { MdAttachFile } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { FaEllipsisVertical } from 'react-icons/fa6'
import { IoIosSend } from "react-icons/io";
import Button from '../Button';
export default function CreateMsg() {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}> <TextBox/></div>
     
      <div className={styles.menuActive}>
        <div className={styles.left}>
          <MdAttachFile  color='var(--b-color)' />
          <FaImage  color='var(--b-color)' />
        </div>
        <div className={styles.right}>
          <AiFillDelete color='var(--b-color)'  />
          <FaEllipsisVertical color='var(--b-color)'  />
          <div className={styles.button}><Button>Send<IoIosSend/></Button></div>
        </div>
      </div>
      </div>
  )
}
