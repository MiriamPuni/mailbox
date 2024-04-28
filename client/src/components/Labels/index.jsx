import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import Label from '../Label'
import { FaPlus } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import apiReq from '../../functions/apiReq';
import axios from 'axios';
import AddLabel from '../AddLabel';
export default function Labels() {
  // let labels = [
  //   {name:'Work', color:'rgb(92, 198, 147)'},
  //   {name:'PromisingOffers', color:'rgb(255, 118, 118)'},
  //   {name:'Work in Progress', color:'rgb(255, 223, 118)'},
  //   {name:'In acceptance', color:'rgb(118, 255, 230)'},
  //   {name:'Read later', color:'rgb(118, 175, 255)'},]
  const [labels, setLabels] = useState([])
  const [addLabel, setAddLabel] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:3456/chat/listLabels')
      .then(res => setLabels(res.data))
  }, [addLabel])
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Labels</p>
        <div className={styles.icons}>
          <button onClick={() => { setAddLabel(true) }} className={styles.plus}><FaPlus size={'13px'} color='var(--green-color)' /></button>
          <FaEllipsisVertical color='var(--text-color)' />
        </div>
      </div>
      {(addLabel
        ?
        <AddLabel setAddLabel = {setAddLabel} />
        :
        labels?.map((l, i) => <Label key={i} name={l.name} color={l.color} />)
      )}
    </div>
  )
}
