import React from 'react'
import styles from './style.module.css'
import ImgUser from '../ImgUser'
import { FaStar } from "react-icons/fa";
import Badge from '../Badge';
import { NavLink } from 'react-router-dom';
export default function People({ dataPeople }) {
    const isActiveClassName = ({ isActive }) => {
        return isActive ? `${styles.active} ${styles.container}` : styles.container;
      }
    return <NavLink to={dataPeople.id} className={isActiveClassName}>
            <ImgUser src={dataPeople.img} />
            <div className={styles.text}>
                <p className={styles.name}>{dataPeople.subject}</p>
                {/* <p className={styles.msg}>{dataPeople.msg}</p> */}
            </div>
            <div className={styles.leftDiv}>
                <time className={styles.time}>{dataPeople.lastDate}</time>
                <div className={styles.status}>
                    {(dataPeople.status == 'notReading')
                        ?
                        <Badge>1</Badge>
                        :
                        (dataPeople.status == 'star')
                            ?
                            <button className={styles.starActive}><FaStar /></button>
                            :
                            <button className={styles.starNotActive}><FaStar /></button>
                    }
                </div>
            </div>
        </NavLink>
}
