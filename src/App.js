import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  console.log("mrbmrbmrbmrmbbr")
  const [zikir,setZikir] =useState(0);
  
  function zikirarti(){
    setZikir(zikir+1)
    return(
      console.log(zikir)

    )
  }
  return (
    <div className="App">
      <header className="App-header">
       
      
        <p className="k" id='k12'> <span> bhgjghkgjk </span> h 222 2222</p>
        <p className="k"> 2222222</p>
        <p className="k"> 2222222</p>
        <a
          
          href="https://odtuclass2022f.metu.edu.tr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> dışarı span </span>
          Beyza ve Zehra
        </a>
        <input type="text"  /> 
        <input type="text"  /> 
        
        <input type="button"  value='bas1' onClick={()=> {console.log("lalalala")}} />
        <input type="button"  value='bas1' onClick= {zikirarti}/>
        <form>
          <input type="text"  /> 

        </form>
        <button> bas</button> 

      </header>
    </div>
  );
}

export default App;
