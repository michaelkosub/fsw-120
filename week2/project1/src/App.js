import React from 'react';
import './App.css';
import  BlogList from './BlogList';
import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"
import BlogPost from "./BlogPost"

const App = () => {
  return (
    <div className="App">
     <div className = "Lists">
     <Navbar/>
       <Header />
       <BlogList/><hr></hr>
       <BlogPost/>
      <Footer/> 
      

      </div> 
    </div>
  );
}

export default App;
