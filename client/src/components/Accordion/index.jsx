import { useState } from "react"
import styles from './style.module.css'
export default function Accordion({close, open, titleOpen}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      style={{
        width:'100%',
        // background: "white",
        // fontFamily: "monospace",
        // margin: "24px",
        // borderRadius: "8px",
        // boxShadow: isOpen
        //   ? "0px 16px 32px rgba(0,0,0,0.2)"
        //   : "0px 4px 8px rgba(0,0,0,0.2)",
        transition: "box-shadow 300ms, transform 300ms",
        transitionTimingFunction: "cubic-bezier(.04,.1,.1,1)",
      }}
    >
      <div
        style={{
          display: "flex",
        //   gap: "16px",
        //   padding: "8px 16px",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {/* <h4>Expandable</h4> */}
        {(isOpen)?titleOpen|| close:close}
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: "0",
            opacity: isOpen ? "0" : "1",
            transition: "opacity 300ms",
            transitionTimingFunction: "cubic-bezier(.04,.1,.1,1)",
          }}
        >
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quia
          aut, tenetur excepturi omnis blanditiis? Ullam ratione, consectetur,
          nihil eveniet velit deleniti quos vel asperiores blanditiis aliquid
          facilis! Nihil, provident? */}
        </div>
        {/* <div>😊</div> */}
        
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms",
          transitionTimingFunction: "cubic-bezier(.04,.1,.1,1)",
        }}
      >
        <div
          style={{
            overflowY: "hidden",
          }}
        >
          <div style={{ padding: "10px 16px 32px 16px" }}>{open}</div>
          
          {/* <div className={styles.ul}>{open}</div> */}
        </div>
      </div>
    </div>
  )
}




















// import React, { useState } from 'react'
// import styles from './style.module.css'
// export default function Accordion({ children }) {

//     const [status, setStatus] = useState(false)

//     const openClose = () => {
//         if (status == false) setStatus(true)
//         else setStatus(false)
//     }

//     return <div className={`${styles.container} ${status ? styles.open : styles.closed}`} onClick={openClose}>
//             {(status)
//                 ?
//                 <>
//                     {React.Children.toArray(children)[0]}
//                 </>
//                 :
//                 <>
//                     {React.Children.toArray(children)[1]}
//                 </>
//             }
//         </div>
// }
