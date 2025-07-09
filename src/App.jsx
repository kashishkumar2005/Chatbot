import { useContext } from "react"
import Chatsection from "./components/chatsection/chatsection"
import Separation from "./components/separation/separation"
import Sidebar from "./components/sidebar/sidebar"
import { dataContext } from "./context/usercontext"

function App() {
let data=useContext(dataContext)
  return (
    <>
      <Sidebar />
      <Separation />
      <Chatsection />
    </>
  )
}

export default App
