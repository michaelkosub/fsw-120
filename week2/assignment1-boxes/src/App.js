import React from "react"
import './App.css';
import Card from "./Card"


function App() {
  return (
    <div>

        <Card cardColor = "blue" height={130} width={150} title = "One" subtitle = "This is Blue"  info = "The sky is Blue."   />
        <Card cardColor = "purple" height={130} width = {230}  title = "Two" subtitle = "This is Purple" info = "A eggplant is the color purple."  />
        <Card cardColor = "red" height={130} width = {150}  title = "Three" subtitle = "This is Red" info = "A stop sign is red." />
        <Card cardColor = "Green" height={130} width = {150}  title = "Four" subtitle = "This is Green" info = "The color of grass."/>
        <Card cardColor = "pink" height={130} width = {150}  title = "Five" subtitle = "This is light Pink" info = "This is baby pink."/>
        <Card cardColor = "crimson" height={130} width = {150}  title = "Six" subtitle = "This is Crimson" info = "Just a diffrent Red. " />
        <Card cardColor = "magenta" height={130} width = {230}  title = "Seven" subtitle = "Dark magent " info = "This is a type of purple."/>
        <Card cardColor = "yellow" height={130} width = {150}  title = "Eight" subtitle = "This is Yellow" info = "The sun looks yellow."/>
        <Card cardColor = "turquoise" height={130} width = {150}  title = "Nine" subtitle = "This is Turquoise" info = "The color of the ocean."/>
        <Card cardColor = "darkblue" height={130} width = {220}  title = "Ten" subtitle = "This is Dark Blue " info = "The color of the night sky."/>

    </div>
  );
}

export default App
