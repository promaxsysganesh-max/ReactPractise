import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
    const [count,setCount]=useState(0);

    function handleClick(){
      setCount(count+1);
    }

  return (
    <div>
      <h1>{count}</h1>
      <Button handleClick={handleClick} text="click me">
        
      </Button>


      {/*
      <div>
      <Card name="Ganesh">
        <h1>Web Developer</h1>
        <p>Trying to be consistant</p>
      </Card>

      <Card children='mein ek childran hoon'>
        <p>I am a children</p> //It will execute if uncomment and inline children will not execute 
      </Card>
    </div>
    */}
    </div>
    

    
  )
}

export default App
