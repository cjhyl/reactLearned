import React, { useState, useEffect } from "react"
import Item from "../components/Item"
import AddItem from "../components/AddItem"
import Loading from "../components/Loading"
import { graphql } from 'gatsby'
import axios from 'axios'

export default function Home({data}) {
  let visits = data&&data.allStrapiVisit&&data.allStrapiVisit.nodes;
  const [items,setItems] = useState(visits||[])
  const [additemshow,setAdditemshow] = useState(false)
  const [editdata,setEditdata] = useState(null)
  const [loading,setLoading] = useState(false)
  const [menuid,setMenuid] = useState(-1)
  const strapiUrl = 'http://106.53.9.65:1337/visits';
  function onMenuShow(id){
    setMenuid(id)
  }
  function onClose(id){
    delVisit(id);
  }
  function onUpdateShow(obj){
    var newObj = {
      id:obj.id,
      title:obj.title,
      url:obj.url
    }
    setEditdata(newObj)
    setAdditemshow(true)
  }
  function onAddShow(){
    setEditdata(null)
    setAdditemshow(true);
  }
  function onAddiemCancel(){
    setAdditemshow(false);
  }
  function onEditItem(obj){
    updateVisit(obj)
  }
  function onAddItem(obj){
    addVisit(obj);
  }

  function loadVisits(){
    setLoading(true)
    return new Promise((resolve,reject)=>{
      axios.get(strapiUrl)
        .then((res)=>{
          console.log('load success',res)
          setItems(res.data)
          resolve()
        })
        .catch((err)=>{
          console.log('load error',err)
          reject()
        })
        .finally(()=>{
          setLoading(false)
        })
    })
  }
  function addVisit(obj){
    setLoading(true)
    return new Promise((resolve,reject)=>{
      axios.post(strapiUrl,obj)
        .then((res)=>{
          console.log('add success',res)
          resolve()
        })
        .catch((err)=>{
          console.log('add error',err)
          reject()
        })
        .finally(()=>{
          setLoading(false)
          loadVisits()
        })
    })
  }
  function updateVisit(obj){
    setLoading(true)
    return new Promise((resolve,reject)=>{
      axios.put(strapiUrl+'/'+obj.id,obj)
        .then((res)=>{
          console.log('put success',res)
          resolve()
        })
        .catch((err)=>{
          console.log('put error',err)
          reject()
        })
        .finally(()=>{
          setLoading(false)
          loadVisits()
        })
    })
  }
  function delVisit(id){
    setLoading(true)
    return new Promise((resolve,reject)=>{
      axios.delete(strapiUrl+'/'+id)
        .then((res)=>{
          console.log('del success',res)
          resolve()
        })
        .catch((err)=>{
          console.log('del error',err)
          reject()
        })
        .finally(()=>{
          setLoading(false)
          loadVisits()
        })
    })
  }
  useEffect(() => {
    loadVisits();
  }, [])
  return (
    <div className="root" onClick={()=>{setMenuid(-1)}}>
      <div className="bg">
        <div className="visits">

          {items.map(data=>{
            return (
              <Item 
                key={data.id} 
                close={onClose} 
                itemdata={data} 
                ismenushow={data.id==menuid}
                menushow={onMenuShow}
                updateshow={onUpdateShow}
              />
            )
          })}

          <div onClick={onAddShow} className="item">
            <div className="iconBg">
              <div>
                <div className="add">+</div>
              </div>
            </div>
            <div className="titleBg">
              <div>添加快捷方式</div>
            </div>
          </div>

        </div>
      </div>

      <AddItem 
        show={additemshow} 
        cancel={onAddiemCancel}
        add={onAddItem}
        edit={onEditItem}
        initdata={editdata}
      />
      <Loading
        show={loading} 
      />
    </div>
  )
}


export const query = graphql`
query {
  allStrapiVisit {
    nodes {
      id
      title
      url
    }
  }
}
`
