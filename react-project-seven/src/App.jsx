import { useState } from "react"
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";


function App() {
  
  const [isLoggedIn,setLoggedIn]=useState(true);


    if(!isLoggedIn){
      return(
        <LoginBtn/>
      )
    }

    return(
      <div>
        <p>Welcome </p>
        <div>
          {isLoggedIn && <LogoutBtn/>}
        </div>     
      </div>
    )
      



      {/*return(                //using ternary operator
        <div>
          {isLoggedIn ? <LoginBtn/> : <LogoutBtn/>}
        </div>
      )*/}
        


      {/*if(isLoggedIn){          //using if else
        return (
        <LogoutBtn/>
      )
      }
      else{
        return (
        <LoginBtn/>
      )
      }*/}
  
}

export default App
