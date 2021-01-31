import React from 'react';
import './App.css';
import Spot from './spots'




function App() {
  return (
    <div className="App"style = {{backgroundColor: "gray", height: "100vh", color: "white"}} >
      
      <div className = "Spots">
        <header style= {{padding :"30px", marginBottom:"250px"}}>Vacation Spots</header>
      <Spot/>
      </div>
      
      
    </div>
  );
}

export default App;
