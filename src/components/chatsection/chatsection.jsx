import React from 'react'
import "./chatsection.css"
import { LuSendHorizontal } from "react-icons/lu";
import Darkmode from './darkmode/Darkmode'
import { dataContext } from '../../context/usercontext';
import { useContext } from 'react';
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"
function Chatsection() {
  let{sent,input,setInput,showResult,resultData,recentPrompt,loading}=useContext(dataContext)
  return (
    <div className="Chatsection">
      <div className="topsection">
        {!showResult?<div className="headings">
          <span>Hello,</span><span>I AM YOUR OWN ASSISTANT</span><span>WHAT CAN I HELP YOU??</span>
        </div>: <div className="result">
          <div className="userbox"><img src={user} alt="" width="60px" /><p>{recentPrompt}</p></div>
        <div className="aibox"><img src={ai} alt="" width="60px" />
        {loading?<div className='loader'>
        <hr/>
        <hr/>
        <hr/>
        </div>:<p>{resultData}</p>}
        </div>
        </div>
        }
        
      </div>
      <div className="bottomsection">
        <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter a prompt' value={input}></input>
        {input?
        <button id="sendbutton" onClick={()=>{
          sent(input)
        }}><LuSendHorizontal /></button>:""}
              <Darkmode />
      </div>
    </div>
  )
}

export default Chatsection