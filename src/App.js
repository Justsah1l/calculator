
import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState} from 'react';
import './App.css';
import Concepts from './concept';
import { Routes, Route, Link } from 'react-router-dom';



function App() {
const [result , setresult] = useState("");

const handleclick = (e) =>{
  setresult(result.concat(e.target.name));

}
const clears = () =>{
  setresult("");
}
const backspace = () =>{
  setresult(result.slice(0, -1));
}

const calculator = () => {
  try{
   setresult((eval(result)));
  }catch(error){
    setresult("Invalid Syntax");

  }
}




  return (
    <div className='wrapper'>
      {/*Navbar */}
      <nav className='navbar'>
        <a href='/'>
        <h1 className='logo-text'>Calculator</h1>
        </a>
        <img className='calc-img' src='https://i.pinimg.com/originals/f4/8a/31/f48a3135c802362073105f531bf75171.jpg' alt='calculator-image'></img>
        <ul className='nav-items'>
        
          <li>Concepts</li>
          
          
          
        <button className='but1'>Developer</button>

        </ul>
      </nav>
      
      
   <div className='container'>
    <form>
    <input type="text" value={result}/>
    </form>
    <div className='keypad'>
      <button className='light' onClick={clears} id="clear">Clear</button>
      <button className='light' onClick={backspace} id="backspace">c</button>
      <button className='light' name='/' onClick={handleclick}>%</button>
      <button name='7' onClick={handleclick}>7</button>
      <button name='8' onClick={handleclick}>8</button>
      <button name='9' onClick={handleclick}>9</button>
      <button className='light' name='*' onClick={handleclick}>x</button>
      <button name='4' onClick={handleclick}>4</button>
      <button name='5' onClick={handleclick}>5</button>
      <button name='6' onClick={handleclick}>6</button>
      <button className='light' name='+' onClick={handleclick}>+</button>
      <button name='1' onClick={handleclick}>1</button>
      <button name='2' onClick={handleclick}>2</button>
      <button name='3' onClick={handleclick}>3</button>
      <button className='light' name='-' onClick={handleclick}>-</button>
      <button className='light' name='.' onClick={handleclick}>.</button>
      <button name='0' onClick={handleclick}>0</button>
      <button className='light' onClick={calculator} id="result" >=</button>
      
    </div>
   </div>




    </div>
  );
}

export default App;
