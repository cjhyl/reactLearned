import React, { useState } from "react"
import { makePy } from "../utils"

export default function Item({itemdata,close,menushow,ismenushow,updateshow}) {
  const [hasimg,setHasimg] = useState(false)
  function imgLoaded(){
    setHasimg(true)
  }
  function onClose(){
    close(itemdata.id);
    menushow(-1)
  }
  function onMenuShow(){
    menushow(itemdata.id)
  }
  function onUpdateShow(){
    updateshow(itemdata)
    menushow(-1)
  }
  if(!itemdata.title){
    itemdata.title=new URL(itemdata.url).host;
  }
  return (
    <div className="item">
      {/* <div onClick={onClose} className="close" title="不在显示">x</div> */}
      <div className="menuBtn" onClick={e=>{e.stopPropagation();onMenuShow()}}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
      <div 
        className="menu" 
        style={{display:ismenushow?'block':'none'}}
      >
        <div onClick={onUpdateShow}>修改快捷方式</div>
        <div onClick={onClose}>移除</div>
      </div>
      <a href={itemdata.url} title="百度">
        <div className="iconBg">
          <div>
            <img 
              onLoad={imgLoaded} 
              className="icon" 
              src={new URL(itemdata.url).origin+"/favicon.ico"} 
              style={{display:hasimg?'block':'none'}}
              alt={itemdata.title}
            />
            <div 
              className="default"
              style={{display:hasimg?'none':'block'}}
            >
              {itemdata.title?makePy(itemdata.title)[0][0].toUpperCase():''}
            </div>
          </div>
        </div>
        <div className="titleBg">
          <div>{itemdata.title}</div>
        </div>
      </a>
    </div>
  )
}