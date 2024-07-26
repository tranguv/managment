import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BsFillFolderFill, BsPlus, BsXLg } from "react-icons/bs";
import { AddItem, CustomButton } from '../../layouts';
import { useLoader } from '../../hooks/useLoader';

const AddItemModal = ({ isOpen, toggle, handleAddItem }) => {
    // const { showLoader, hideLoader } = useLoader();
    // const handleAddItem = () => {
    //     showLoader("Adding...");

    //     setTimeout(() => {
    //         hideLoader();
    //         toggle();
    //     }, 5000);
    // };
    return (
        <Modal isOpen={isOpen} toggle={toggle} size='lg'>
            <ModalHeader toggle={toggle}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20, fontSize: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <BsFillFolderFill />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'white', height: '50px', alignItems: 'center'
                        }}>
                        Thêm mới
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <AddItem type={"user"} />
            </ModalBody>
            <ModalFooter>
                <CustomButton
                    text={"Thêm mới"}
                    color={"#7eba68"}
                    icon={<BsPlus />} onClick={handleAddItem} />
                <CustomButton text={"Hủy"} color={"#ff6363"} icon={<BsXLg />} onClick={toggle} />
            </ModalFooter>
        </Modal>
    );
};

export default AddItemModal;
