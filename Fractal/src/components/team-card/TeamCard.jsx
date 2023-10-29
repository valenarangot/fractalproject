import React from 'react';

export function TeamCard ({member, onClick}){

    return(
        <div className='team-card'
        onClick={onClick}>
        <img src={member.image} className='memberimg' />
        <h4>{member.name}</h4>
        <p>{member.charge}</p>
        </div>
    )
}