import React from 'react';


const BlogPost = (props) => {
    return(
        <div className = "posts">
            <div className="group-title">
                <h2 className = "blog-title">{props.title}</h2>
                <h3 className = "blog-subtitle">{props.subTitle}</h3>
            </div>            
            <p className = "blog-author">Posted by <a href = "#top"className = "blog-author">{props.author}</a> on {props.date}</p>
        </div>
    );
}
export default BlogPost

