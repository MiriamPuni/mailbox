import React, { useState } from 'react'
import styles from './style.module.css'
import { RiInboxArchiveLine, RiDeleteBin2Fill } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import { FaStar, FaPen, FaChevronDown } from "react-icons/fa";
import Badge from '../Badge';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import Accordion from '../Accordion';
export default function Filters() {

  const [accordionMenu, setAccordionMenu] = useState(false)
  const openAccordion = () => {
    if (accordionMenu == false) setAccordionMenu(true)
    else setAccordionMenu(false)
  }

  const isActiveClassName = ({ isActive }) => {
    return isActive ? `${styles.active} ${styles.navlink}` : styles.navlink;
  }
  const params = useParams()
  const isActiveLink = (path) => {
    if (params.type === path) return 'var(--green-color)'
    return 'var(--text-color)'
  };

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li>
          <NavLink to={'Inbox'} className={isActiveClassName}>
            <div className={styles.item}><RiInboxArchiveLine color={isActiveLink('Inbox')} /></div>
            <p className={`${styles.item} ${styles.titele}`}>Inbox</p>
            <div className={styles.item}><Badge>1</Badge></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'SentEmails'} className={isActiveClassName}>
            <div className={styles.item}><BsFillSendFill color={isActiveLink('SentEmails')} /></div>
            <p className={`${styles.item} ${styles.titele}`}>Sent Emails</p>
            <div className={styles.item}><Badge>1</Badge></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'Favourite'} className={isActiveClassName}>
            <div className={styles.item}><FaStar color={isActiveLink('Favourite')} /></div>
            <p className={`${styles.item} ${styles.titele}`}>Favourite</p>
            <div className={styles.item}><Badge>1</Badge></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'Draft'} className={isActiveClassName}>
            <div className={styles.item}><FaPen color={isActiveLink('Draft')} /></div>
            <p className={`${styles.item} ${styles.titele}`}>Draft</p>
            <div className={styles.item}><Badge>1</Badge></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'Deleted'} className={isActiveClassName}>
            <div className={styles.item}><RiDeleteBin2Fill color={isActiveLink('Deleted')} /></div>
            <p className={`${styles.item} ${styles.titele}`}>Deleted</p>
            <div className={styles.item}><Badge>1</Badge></div>
          </NavLink>
        </li>
        <li>
          <Accordion
            open={
              <>
                <NavLink to={'luli'} className={isActiveClassName}>
                  <div className={styles.item}><RiDeleteBin2Fill color={isActiveLink('Deleted')} /></div>
                  <p className={`${styles.item} ${styles.titele}`}>luli</p>
                  <div className={styles.item}><Badge>1</Badge></div>
                </NavLink>
                <NavLink to={'nuni'} className={isActiveClassName}>
                  <div className={styles.item}><RiDeleteBin2Fill color={isActiveLink('Deleted')} /></div>
                  <p className={`${styles.item} ${styles.titele}`}>nuni</p>
                  <div className={styles.item}><Badge>1</Badge></div>
                </NavLink>
              </>
            }
            close={
              <div className={styles.navlink} onClick={openAccordion}>
                <div className={styles.item}><FaChevronDown color={isActiveLink('')} /></div>
                <p className={`${styles.item} ${styles.titele}`}>More</p>
                <div className={styles.item}><Badge>1</Badge></div>
              </div>
            }
          />

        </li>
      </ul>
    </div>
  )
}

