import React, { useState } from "react"

export default function Item({show,add,edit,cancel,initdata}) {
  const [title,setTitle] = useState(initdata?initdata.title:'');
  const [url,setUrl] = useState(initdata?initdata.url:'');
  const [addenable,setAddenable] = useState(initdata?true:false);
  const [urlerror,setUrlerror] = useState('');
  if(initdata){
    if(initdata.title&&!title&&show){
      setTitle(initdata.title)
    }
    if(initdata.url&&!url&&show){
      setUrl(initdata.url)
    }
    if(!addenable&&show){
      setAddenable(true)
    }
  }
  function onCancel(){
    cancel();
    clear();
  }
  function onAdd(){
    if (initdata) {
      edit({
        id: initdata.id,
        title,
        url
      });
    } else {
      add({
        title,
        url
      });
    }
    onCancel();
  }
  function onTitleChange(e){
    setTitle(e.target.value)
  }
  function onUrlChange(e){
    let val = e.target.value;
    setUrl(val);
    if(!val){
      setAddenable(false);
      setUrlerror('请输入网址');
      return;
    }
    let urlReg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)(\.|\:))+([A-Za-z0-9-~(\/|\.html)])+$/;
    if (urlReg.test(val)){
      setAddenable(true);
      setUrlerror('');
    } else {
      setAddenable(false);
      setUrlerror('请输入正确的网址');
    }
  }
  function clear(){
    setTitle('');
    setUrl('');
    setAddenable(false);
    setUrlerror('');
  }
  return (
    <div className="modalBg" style={{display:show?'block':'none'}}>
      <div className="additem">
        <div className="title">{(initdata?'修改':'添加')+'快捷方式'}</div>
        <div className="row">
          <div className="label">名称</div>
          <input className="inputbox" value={title} onChange={onTitleChange} />
        </div>
        <div className="row">
          <div className="label">网址</div>
          <input className="inputbox" value={url} onChange={onUrlChange} />
          <div className="error">{urlerror}</div>
        </div>
        <div className="btnsBg">
          <button disabled={!addenable} onClick={onAdd}>完成</button>
          <button onClick={onCancel}>取消</button>
        </div>
      </div>
    </div>
  )
}