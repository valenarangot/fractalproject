import React from "react";
import './ButtonCancel.css'

export function ButtonCancel({title, onClick}){

    return(
        <>
        
        <button 
        className="button-cancel"
        onClick={onClick}>
        {title} X
        </button>
        </>
    )

}