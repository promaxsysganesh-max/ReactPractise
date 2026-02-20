import React, { useEffect, useEffectEvent, useState } from 'react'

const App = () => {

  const [count,setCount]=useState(0);
  const [total,setTotal]=useState(0);

  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
    setTotal(total+1);
  }
  //variation 1
  {/*useEffect(()=>{                  

    alert("App is rendered once");
  },[])

*/}

  //variation 2
  {/*useEffect(()=>{                  

    alert("App is rendered every time when button was clicked");
  },)

*/}


  //variation 3
  {/*useEffect(()=>{                  

    alert("App is rendered before assigninig value to state variable");
  },[count])*/}

  //variation 4
  {/*useEffect((e)=>{                  

    alert("count or total is updated");
  },[count,total])*/}

  //variation 5

  useEffect(()=>{                  

    alert("new Count value updated");

    return()=>{
      alert("previous Count value is mounted")
    }
    
  },[count])





  return (
    <div>
      <button onClick={handleClick}>Count</button>
      <br></br>
      Value of count:{count}
      <br/>
      <button onClick={handleClickTotal}>Total</button>
      <br></br>
      Value of total:{total}
    </div>
  )
}

export default App
