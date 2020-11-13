
import { useState } from 'react';
import './App.css';
import Search from './Components/Search';

function App() {
  const [searchItem,setsearchItem]=useState('')
  const [data,setData]=useState([]);
  
  return (
    
    <div className="App">
       
      <Search searchItem={searchItem} setsearchItem={setsearchItem}/>
      
    </div>
    

  );
}

export default App;
