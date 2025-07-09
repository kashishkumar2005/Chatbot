import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./sidebar.css"
import { useState } from 'react';
import { dataContext } from '../../context/usercontext';
function Sidebar() {
  const[extend,setExtend]=useState(false)
  const{sent,prevPrompt,newChat}=useContext(dataContext)
  return (
    <div className='Sidebar'>
        <GiHamburgerMenu id="ham" onClick={()=>
        {
          setExtend(prev=>!prev)
          console.log(extend);
        }
        }/>
        <div className="newchat" onClick={()=>{
          newChat()
        }}>
            <FaPlus />
            {extend?<p>New Chat</p>:null}
        </div>
        {prevPrompt.map((item,index)=>{
          return(<div className="recent">
            <FaRegMessage />
            {extend?<p>{item}</p>:null}
        </div>)  
        })}  
    </div>
  )
}

export default Sidebar