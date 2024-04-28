import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import People from '../People'
import { IoIosSearch } from "react-icons/io";
import { Outlet, useLocation } from 'react-router-dom';
import useAxiosReq from '../../functions/useAxsiosReq';
export default function ListPeople() {
  // const [listChats, setListChats] = useState()
  let params = useLocation().pathname
  params = params.replace('/messages/', '')
  if (params == 'Inbox') params = 'Recieved'
  const {data, error, loading} = useAxiosReq({url:`chat/flag/${params}`})
  console.log(data);
  // let data = [
  //   {chat:{id:'1', name: 'miriam puni', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI1UXHbmOeCinPmZ9acvptBgf3qYgQVsjTw&s', subject: 'hi, my name is miriam, and i hard client!!!', lastDate: '11:26', status: 'notReading' }},
  //   {chat:{id:'2', name: 'kuki cohen', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI1UXHbmOeCinPmZ9acvptBgf3qYgQVsjTw&s', subject: 'hi, my name is miriam, and i hard client!!!', lastDate: '11:26', status: 'star' }},
  //   {chat:{id:'3', name: 'luli fridman', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI1UXHbmOeCinPmZ9acvptBgf3qYgQVsjTw&s', subject: 'hi, my name is miriam, and i hard client!!!', lastDate: '11:26', status: 'notReading' }},
  //   {chat:{id:'4', name: 'nuni levi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI1UXHbmOeCinPmZ9acvptBgf3qYgQVsjTw&s', subject: 'hi, my name is miriam, and i hard client!!!', lastDate: '11:26', status: 'star' }},
  // ]


  return <>
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.search}>
        <input className={styles.input} type="text" placeholder='search'/>
        <IoIosSearch />
      </div>
    </div>
    <div className={styles.list}>{data?.map(p => <People dataPeople={p.chat} key={p.chat.id} />)}</div>
  </div>
  <Outlet/>
  </>
}
