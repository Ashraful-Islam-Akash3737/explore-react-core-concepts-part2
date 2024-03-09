
import './App.css'
import Counter from './Components/Counter';
import Team from './Components/Team';

function App() {
  // function handleClick (){
  //   alert('handle clicked');
  // }
  // function addToFive (num){
  //   alert(num + 5);
  // }

  return (
    <>
     
      <h1>React core concepts 2</h1>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{addToFive(3)}}>Click Me</button> */}

      <Counter></Counter>

      <Team></Team>
    </>
  )
}

export default App
