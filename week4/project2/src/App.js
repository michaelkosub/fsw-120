import React, {useState} from "react"
import './App.css';
import NameBadge from './NameBage';


function App () {
  const [input, setIput ] = useState({firstName: "", lastName: "",phone: "", email: "", birthPlace: "", favoriteFood: "", aboutSelf: "",})
  const [badges, setBadges ] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    setBadges([...badges,
    input])
  }

  const handleChange = (e) => {
    setIput({...input,
      [e.target.name]:e.target.value})
  }

  return (
    <div className="App">
      <NameBadge  handleChange = {handleChange} handleSubmit = {handleSubmit}/>
     {badges.map(badge => {
       return(
         <div className = "border">
           <nav >
             <h1 className = "badge">Badge:</h1>
           </nav>
       <h1 id = "one">{badge.firstName} </h1> 
       <h1 id = "two">{badge.lastName} </h1>   
       <h1 id ="three">{badge.email}</h1>
       <h1 id = "four">{badge.birthPlace}</h1>
       <h1 id = "five">{badge.phone}</h1>
       <h1 id = "six">{badge.favoriteFood}</h1>
       <h1 id = "seven">{badge.aboutSelf}</h1>
         </div>
       )
     })}
    </div>
  );
}

export default App;
