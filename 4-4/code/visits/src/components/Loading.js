import React from "react"

export default function Item({show}) {
  return (
    <div className="modalBg" style={{display:show?'block':'none',zIndex:'99'}}>
      <img className="loading" src="/loading.gif" />
    </div>
  )
}