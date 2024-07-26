import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BsXLg } from "react-icons/bs";
import { CustomButton } from '../../layouts';

const AlertModal = ({
    isOpen,
    toggle,
    actionMessage,
    alertMessage,
    alertTitle,
    icon,
    handleAction,
    buttonIcon,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle} size='sm'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ModalHeader toggle={toggle}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20, fontSize: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {icon}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', height: '50px', alignItems: 'center' }}>{alertTitle}</div>
                </div>
            </ModalHeader>
            <ModalBody>
                {alertMessage}
            </ModalBody>
            <ModalFooter>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
                    <CustomButton
                        text={actionMessage}
                        color={"#7eba68"}
                        icon={buttonIcon}
                        onClick={handleAction}
                        width={'max-content'}
                    />
                    <CustomButton
                        text={"Hủy"}
                        color={"#ff6363"}
                        icon={<BsXLg />}
                        onClick={toggle}
                        width={'max-content'}
                    />
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default AlertModal

