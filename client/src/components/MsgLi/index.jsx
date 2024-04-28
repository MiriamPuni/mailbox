import React from 'react'
import styles from './style.module.css'
import Accordion from '../Accordion'
import ImgUser from '../ImgUser'
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import dateCalculation from '../../functions/dateCalculation';
export default function MsgLi({ from, text, date, img }) {
    return (

        <Accordion
            close={<div className={styles.container}>
                <div className={styles.sign}>{(img ? <ImgUser src={img} /> : <PiArrowBendUpLeftBold color='var(--text-color)' />)}</div>
                <div className={styles.from}>{from}</div>
                <div className={styles.text}>{text}</div>
                <div className={styles.date}>{dateCalculation(date)}</div>
            </div>
            }
            open={
                <>
                    {text}
                </>
            }
            titleOpen={
                <div className={styles.container}>
                    <div className={styles.sign}>{(img ? <ImgUser src={img} /> : <PiArrowBendUpLeftBold color='var(--text-color)'  />)}</div>
                    <div className={styles.from}>{from}</div>
                    <div className={styles.text}></div>
                    <div className={styles.date}>{dateCalculation(date)}</div>
                </div>
            } />
    )
}
