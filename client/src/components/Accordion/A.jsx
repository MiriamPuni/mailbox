import { useState } from "react"

export default function A({ children }) {
  const [isOpen, setIsOpen] = useState()
  return (
    <div
      style={{
        background: "white",
        fontFamily: "monospace",
        margin: "24px",
        borderRadius: "8px",
        transform: isOpen ? "translateY(-8px)" : "translateY(0px)",
        boxShadow: isOpen
          ? "0px 16px 32px rgba(0,0,0,0.2)"
          : "0px 4px 8px rgba(0,0,0,0.2)",
        transition: "box-shadow 300ms, transform 300ms",
        transitionTimingFunction: "cubic-bezier(.04,.1,.1,1)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "8px 16px",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <h4>Expandable</h4>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quia
          aut, tenetur excepturi omnis blanditiis? Ullam ratione, consectetur,
          nihil eveniet velit deleniti quos vel asperiores blanditiis aliquid
          facilis! Nihil, provident?
        </div>
        <div>😊</div>
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
          <div style={{ padding: "0 16px 32px 16px" }}>{children}</div>
        </div>
      </div>
    </div>
  )
}
