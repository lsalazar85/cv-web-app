import React from 'react';
import { bool, node, func, string } from 'prop-types';
import { Transition } from 'react-transition-group';

import {
  CloseModalIcon,
  Animation,
  ModalOverlay,
  MainModal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalHeaderTitle
} from './styled';

const Modal = (
    {
      width,
      closeModal,
      title,
      show,
      onClose,
      content,
      footer,
      positionButtons
    }) => (
    <Transition in={show} timeout={500} unmountOnExit mountOnEnter>
      {state => (
        <Animation state={state}>
          <ModalOverlay onClick={onClose} />
          <MainModal width={width}>
            {title && (
              <ModalHeader>
                <ModalHeaderTitle>{title}</ModalHeaderTitle>
              </ModalHeader>
            )}
            {closeModal && <CloseModalIcon onClick={onClose} data-testid="close-modal" />}
            {content && <ModalContent>{content}</ModalContent>}
            {footer && <ModalFooter position={positionButtons}>{footer}</ModalFooter>}
          </MainModal>
        </Animation>
      )}
    </Transition>
)

Modal.defaultProps = {
  width: '40rem',
  title: '',
  positionButtons: 'flex-start',
  closeModal: false,
  footer: '',
  content: '',
};

Modal.propTypes = {
  width: string,
  title: string,
  positionButtons: string,
  show: bool.isRequired,
  closeModal: bool,
  onClose: func.isRequired,
  footer: node,
  content: node,
};

export default Modal;