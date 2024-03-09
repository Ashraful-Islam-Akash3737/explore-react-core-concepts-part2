
import './App.css'

function App() {
  function handleClick (){
    alert('handle clicked');
  }
  function addToFive (num){
    alert(num + 5);
  }

  return (
    <>
     
      <h1>React core concepts 2</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{addToFive(3)}}>Click Me</button>
    </>
  )
}

export default App
