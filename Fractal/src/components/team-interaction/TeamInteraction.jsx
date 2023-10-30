import React, {useState} from 'react';
import { ModalTeam } from '../team-modal/ModalTeam';
import { TeamCard } from '../team-card/TeamCard';
import { membersData } from '../../data/membersData';
import { ButtonFirst } from '../buttons/button-first/ButtonFirst';
import styles from './TeamInteraction.module.css'

export function TeamInteraction (){
    const [selectedMember,setSelectedMember] = useState(null);

    const openModal = (member) => {
        setSelectedMember(member);
        const TeamCarrousel = document.getElementById("TeamCarrousel")
        document.TeamCarrousel.classList.add('modal-open')
    };
    
    const closeModal = () => {
        setSelectedMember(null);
        document.body.classList.remove('modal-open');
    };

    return(
        
        <div className={styles.modalAction}>
            <h1>Team</h1>
            <ButtonFirst title='Helloooo'/>
            <div className={styles.carrouselTeam}>
            {membersData.map((member)=>(
                <TeamCard key={member.id} member={member} onClick={() => openModal(member)}/>
            ))}   
            </div>
            {selectedMember && <ModalTeam member={selectedMember} onClose={closeModal}/>}
        
        </div>
    )
}