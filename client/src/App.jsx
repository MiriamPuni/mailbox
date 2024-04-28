import React, { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import './App.css'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import MenuActions from './components/MenuActions'
import ListPeople from './components/ListPeople'
import Content from './components/Content'
import DataContext from './DataContext'
import PopUp from './components/PopUp'
import Confirm from './components/Confirm'
import NewChat from './components/NewChat'
export default function App() {
  const [popUpOpen, setPopUpOpen ] = useState(false)
  return (
    <div className='container'>
      <DataContext.Provider value={{popUpOpen, setPopUpOpen}}>
      <Routes>
        <Route element={<SideBar />}>
          {/* <Route index element={<h1>home</h1>}/> */}
          <Route path='*' element={<NotFound/>}/>
          <Route path='messages' element={<MenuActions />}>
            <Route path='labels'>
              <Route path=':label' element = {<ListPeople/>}>
                <Route path=':chatId' element = {<Content/>}></Route>
              </Route>
            </Route>
            <Route path='newChat' element = {<NewChat/>}/>
            <Route path=':type' element={<ListPeople />}>
              <Route path=':chatId' element={<Content />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <PopUp><Confirm/></PopUp>
      </DataContext.Provider>
    </div>
  )
}