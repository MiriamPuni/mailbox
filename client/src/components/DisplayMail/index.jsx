import React from 'react'
import styles from './style.module.css'
import Accordion from '../Accordion'
import A from '../Accordion/A'
import EmailTitle from '../EmailTitle'
import MsgLi from '../MsgLi'
export default function DisplayMail() {
  let tt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde amet voluptate sequi. Consectetur ipsum architecto dolorem harum porro animi ut. At, deleniti! Iusto esse hic possimus quaerat veritatis natus.'
  return (
    <div className={styles.container}>
      <EmailTitle date={1712991111437} subject={'i am work and this good'}/>
      <div className={styles.listMsg}>

      <MsgLi date={1712991111437} text={tt} from={'jesika'} img = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkiH72G15usRdioA5y55n9oer498U24kw3QpD4uUq02A&s'}/>
      <MsgLi date={1712991111437} text={tt} from={'you'}/>
      <MsgLi date={1712991111437} text={'kk'} from={'jesika'} img = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkiH72G15usRdioA5y55n9oer498U24kw3QpD4uUq02A&s'}/>
      </div>
    </div>
  )
}