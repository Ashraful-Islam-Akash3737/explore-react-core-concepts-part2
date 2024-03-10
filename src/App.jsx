
import './App.css'
import Album from './Components/Album/Album';
import Counter from './Components/Counter';
import Team from './Components/Team';
import Users from './Components/Users';

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

      <Users></Users>

      {/* <Album></Album> */}
    </>
  )
}

export default App
