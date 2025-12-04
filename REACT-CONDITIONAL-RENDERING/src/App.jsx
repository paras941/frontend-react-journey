import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn, setLoggedin] = useState(true);



  if(isLoggedIn){
    return(
      <LogoutBtn/>
    )
  }else{
    return(
      <LoginBtn/>
    )
  }


  return (
    <div>
      {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    </div>
  )
 
}

export default App
