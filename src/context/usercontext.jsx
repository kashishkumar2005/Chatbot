import React, { createContext, useState } from 'react'
import run from '../gemini'
export const dataContext=createContext()

function Usercontext({children}) {
    const [input,setInput]=useState("")
    const[showResult,setShowResult]=useState(false)
    const[loading,setLoading]=useState(false)
    const[recentPrompt,setRecentPrompt]=useState()
    const[resultData,setResultData]=useState("")
    const[prevPrompt,setPrevPrompt]=useState([])
    function newChat(){
      setShowResult(false)
      setLoading(false)
    }
    async function sent(input){
        setResultData("")
        setShowResult(true)
        setRecentPrompt(input)
        setLoading(true)
        setPrevPrompt(prev=>[...prev,input])
        let response=await run(input)
        setResultData(response.split("**")&&response.split("*"))
        setLoading(false)
        setInput("")
    }
    const data={
input,
setInput,
sent,
loading,
setLoading,
showResult,
setShowResult,
resultData,
setResultData,recentPrompt,setRecentPrompt,prevPrompt,newChat
    }
  return (
    <>
    <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </>
  )
} 

export default Usercontext