import React, {useState} from 'react';
import { ModalTeam } from '../team-modal/ModalTeam';
import { TeamCard } from '../team-card/TeamCard';
import { membersData } from '../../data/membersData';

export function TeamInteraction (){
    const [selectedMember,setSelectedMember] = useState(null);

    const openModal = (member) => {
        setSelectedMember(member);
    };
    
    const closeModal = () => {
        setSelectedMember(null);
    };

    return(
        <>
        <h1>Hola mundo</h1>
        <div className='team'>
          {membersData.map((member)=>(
            <TeamCard key={member.id} member={member} onClick={() => openModal(member)}/>
        ))}   
        </div>
        {selectedMember && <ModalTeam member={selectedMember} onClose={closeModal}/>}
        
        </>
    )
}