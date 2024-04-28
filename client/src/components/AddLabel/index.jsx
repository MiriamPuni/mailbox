import styles from './style.module.css'
import axios from 'axios';
import React from 'react'
import Button from '../Button'
export default function AddLabel({setAddLabel}) {
    async function submit(e){
        e.preventDefault()
        let data = {color:e.target[1].value, name:e.target[0].value}
        await axios.put('http://localhost:3456/chat/6612fa2eb97468636a7bdf39/label', data)
        .then(res=>{
            console.log(res.data)
            setAddLabel(false)
        })
    }
  return (
    <form onSubmit={(e)=>submit(e)} className={styles.container}>
        <input className={styles.input} name='nameLabel' type="text" placeholder='name label'/>
        <input className={styles.input} type="color" name="color" id="" placeholder='color' />
        <button type="submit"><Button>save</Button> </button>
        </form>
  )
}
