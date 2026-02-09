
import './App.css'
import UserCard from './components/UserCard'
import abhaypic from "./assets/abhaypic.jpg"
import audumbarpic from "./assets/audumbarpic.jpg"
import ganeshpic from "./assets/ganeshpic.jpg"

function App() {

  return (
    <div className='container'>
      <UserCard name='Ganesh Bachate' image={ganeshpic} style={{"border-radius":"10px"}}/>
      <UserCard name='Abhay Patil' image={abhaypic} style={{"border-radius":"10px"}}/>
      <UserCard name='Audumbar Sawant' image={audumbarpic} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
