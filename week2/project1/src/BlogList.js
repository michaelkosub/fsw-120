import React from "react";
import "./App"
import "./BlogList"

const BlogList = () => {
    let blogCounter = 0;
    const blogPosts = [
        {
            title: "Man must explore, and this is exploration at its greatest",
            subTitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap",
            date: "September 24, 2019"
        },
        {
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subTitle: "",
            author: "Start Bootstrap",
            date: "September 18, 2019"
        },
        {
            title: "Science has not yet mastered prophecy",
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap",
            date: "August 24, 2019"
        },
        {
            title: "Failure is not an option",
            subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: "Start Bootstrap",
            date: "July 8, 2019"
        }    
    ];

    const BlogOne = blogPosts.map((post) =>{
            blogCounter++
            return(
                <div>
                <div key = {blogCounter}>
                  <h3>{post.title}</h3>  , {post.subTitle}, <h6>{post.author},{post.date}</h6>
                </div><br></br></div>
            )
        });
  return ( <div id = "Blog">{BlogOne}</div>)
   
}

export default BlogList;