import React from "react";
import './ProyectCard.css'

export function ProyectCard({title, type, description, onClick}){
    return(
        <div className="proyect-card"
        onClick={onClick}>
            <h2>{title}</h2>
            <h3>{type}</h3>
            <p>{description}</p>
        </div>
    )
}