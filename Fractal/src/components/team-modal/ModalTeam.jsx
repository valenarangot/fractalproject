import React from 'react'
import { membersData } from '../../data/membersData'
import { ButtonFirst } from '../button-first/ButtonFirst'

export function ModalTeam({member, onClick, onClose }){
    
    return(
        <div className='modal'>
            <span className='closePreview' onClick={onclose}>
                &times;
                </span>
                <ButtonFirst onClick={onClose}/>
            <div className='memberCardHeader'>
                <img src={member.image} alt={member.name}/>
                <h4>{member.name}</h4>
                <p>{member.charge}</p>   
            </div>
            <div className='memberCardContent'>
                <p>{member.description}</p>
                <p>Tools and skills</p>
                <ul>
                {Object.entries(member.tools).map(([tool, value]) =>
                value ? <li key={tool}>{tool}</li> : null
                )}
                </ul>
                <ButtonFirst onClick={onclick}/>
            </div>
        </div>
    )
}