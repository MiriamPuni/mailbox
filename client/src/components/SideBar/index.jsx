import styles from './style.module.css'
import { CiAlarmOn, CiCircleCheck, CiVideoOn, CiAlignBottom, CiFaceSmile } from "react-icons/ci";
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import ImgUser from '../ImgUser';
export default function SideBar() {
  const isActiveClassName = ({ isActive }) => {
    return isActive ? `${styles.active} ${styles.navlink}` : styles.navlink;
  }
  const location = useLocation();
  const isActiveLink = (path) => {
    if (location.pathname === path) return 'var(--green-color)'
    return 'var(--text-color)'
  };
  return (
    <>
    <div className={styles.container}>
      <img src='../../../public/logo.png' alt="logo" width={'50%'} />
      <div className={styles.menu}>
        <NavLink to={'notFound1'} className={isActiveClassName}><CiAlarmOn size={'60%'} color={isActiveLink('/notFound1')} /></NavLink>
        <NavLink to={'notFound2'} className={isActiveClassName} ><CiCircleCheck size={'60%'} color={isActiveLink('/notFound2')} /></NavLink>
        <NavLink to={'notFound3'} className={isActiveClassName}><CiAlarmOn size={'60%'} color={isActiveLink('/notFound3')} /></NavLink>
        <NavLink to={'messages'} className={isActiveClassName}><CiFaceSmile size={'60%'} color={isActiveLink('/messages')} /></NavLink>
        <NavLink to={'notFound4'} className={isActiveClassName}><CiAlignBottom size={'60%'} color={isActiveLink('/notFound4')} /></NavLink>
        <NavLink to={'notFound5'} className={isActiveClassName}><CiVideoOn size={'60%'} color={isActiveLink('/notFound5')} /></NavLink>
      </div>
      <div className={styles.img}> <ImgUser src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI1UXHbmOeCinPmZ9acvptBgf3qYgQVsjTw&s"}/></div>
    </div>
      <Outlet/>
    </>
  )
}