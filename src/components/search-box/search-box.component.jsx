import React from "react"
import './search-box.component.style.css'

 export const SearchBox = ({placeholder , handleChange }) =>{
    return(
        <div>
         <input className ="search" type="text" placeholder={placeholder} 
        onChange={handleChange} />  
        </div> 
    )


}

