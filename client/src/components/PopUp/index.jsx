import React, { useContext } from 'react'
import styles from './style.module.css'
import DataContext from '../../DataContext'
import { AiOutlineClose } from "react-icons/ai";
export default function PopUp({children}) {
    const { popUpOpen, setPopUpOpen } = useContext(DataContext)
    
    return (<>
            <div className={`${styles.container} ${!popUpOpen? styles.hidden: ''}`} onClick={()=>setPopUpOpen(false)}>
            <div className={styles.popup} onClick={(e)=>e.stopPropagation()}>
                <AiOutlineClose onClick={()=>setPopUpOpen(false)}/>
                {children}
            </div>
        </div>
    </>
    )
}
