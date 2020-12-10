import React  from 'react';
import { ModalContainer, ModalTitle, ModalInfo } from './styles'

export const Modal = () => {
 
    return (
      <ModalContainer>
        <ModalTitle>Success</ModalTitle>
        <ModalInfo>Event has been created.</ModalInfo>
      </ModalContainer>
    );
}

