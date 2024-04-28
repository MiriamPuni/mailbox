import React, { useContext } from 'react'
import styles from './style.module.css'
import Filters from '../Filters' 
import Labels from '../Labels'
import { PiArrowSquareLeftFill } from "react-icons/pi";
import { GrMail } from "react-icons/gr";
import { NavLink, Outlet, useNavigate} from 'react-router-dom';
import DataContext from '../../DataContext';
import useAxiosReq from '../../functions/useAxsiosReq';
export default function MenuActions() {
  const {data, error, loading} = useAxiosReq({url:'chat/'})
  console.log(data);
  const navigate = useNavigate()
  const goBack = (e) => {
    e.preventDefault()
    navigate(-1)
  };
  const {popUpOpen, setPopUpOpen} = useContext(DataContext)
  const popup = ()=>{
    if(popUpOpen == true) setPopUpOpen(false)
    else  setPopUpOpen(true)
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={(e)=>goBack(e)} className={styles.icon}><PiArrowSquareLeftFill /></button>
          <p>Mailbox</p>
        </div>
        {/* <button onClick={popup} className={styles.newMsg}><GrMail /> New message </button> */}
        <NavLink to={'newChat'} className={styles.newMsg}><GrMail /> New message</NavLink>
        <Filters />
        <Labels />
      </div>
      <Outlet />
    </>
  )
}