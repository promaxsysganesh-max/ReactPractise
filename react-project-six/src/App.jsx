import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [name,setName]=useState('');

  return (
    <>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      {/*<p>Name state value inside Parent App is:{name}</p>*/}
    </>
  )
}

export default App
