import React from 'react'
import styles from './style.module.css'
import dateCalculation from '../../functions/dateCalculation'
export default function EmailTitle({ date, subject }) {
let displayDate = dateCalculation(date)
    return (
        <div>
            <div className={styles.date}>{displayDate}</div>
            <div className={styles.subject}>{subject}</div>
        </div>
    )
}
