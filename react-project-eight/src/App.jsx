import LoginBtn from "../../react-project-seven/src/components/LoginBtn";

function App() {

  function handleClick(){
    alert("button was clicked");
  }

  function handleMouseOver(){
    alert("you are on para");
  }

  function handleInputChange(e){
    console.log("Input Value is changed",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form was submitted");
  }

  
  return (


    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange}/>
      <button type="submit">Submit</button>
    </form>
  )
    {/*<div>
      <p onMouseOver={handleMouseOver} style={{"border":"1px solid black"}}>I am Para</p>
      <button onClick={handleClick}>Click me</button>
    </div>*/}
  
}

export default App
