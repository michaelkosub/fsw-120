import React from "react"
import './App.css';
import Card from './Card'


function App() {
  return (
    <div>

        <Card cardColor = "red" height={80} width={80} />
        <Card cardColor = "green"/>
        <Card cardColor = "pink"/>
        <Card cardColor = "yellow"/>

    </div>
  );
}

export default App
