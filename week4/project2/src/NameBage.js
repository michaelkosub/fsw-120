import React from "react";




    
    const NameBadge = ({handleSubmit, firstName, lastName, phone, email, birthPlace, favoriteFood, handleChange, aboutSelf}) =>{
        return(
            <form  onSubmit = {handleSubmit}>            
                <input 
                    type ="text" 
                    name="firstName" 
                    value= {firstName}
                    placeholder = "First Name"
                    onChange = {handleChange} 
                    required
                    minLength = {3}
                />  
                <input 
                    type ="text" 
                    name="lastName" 
                    value= {lastName}
                    placeholder= "Last Name"                   
                    onChange = {handleChange}
                    minLength = {3}
                    required 
                /> 
                <input 
                    type ="email" 
                    name="email" 
                    value= {email}
                    placeholder = "Email"
                    onChange = {handleChange}
                    minLength = {3}
                    required  
                /> 
                <input 
                    type ="text" 
                    name="birthPlace" 
                    value= {birthPlace}
                    placeholder = "Birth Place"
                    onChange = {handleChange}
                    minLength = {3}
                    required 
                />
                <input 
                    type ="tel" 
                    name="phone" 
                    value= {phone}
                    placeholder = "Phone"
                    onChange = {handleChange}
                    pattern ="[0-9]{10}" 
                    minLength = {3}
                    required
                   
                />
               
                <input 
                    type ="text" 
                    name="favoriteFood"
                    onChange = {handleChange} 
                    value= {favoriteFood}
                    placeholder = "Favorite Food"
                    minLength = {3}
                    required
                />
                <textarea name = "aboutSelf" 
                    placeholder = "Tell us about yourself." 
                    onChange = {handleChange}  
                    value = {aboutSelf}
                    required 
                    minLength = {3}>                    
                </textarea>

                <input className= "submit-button" type= "submit"/> 

            </form>
    )
}

export default NameBadge