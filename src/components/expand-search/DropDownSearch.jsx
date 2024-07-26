import React from 'react';
import { SearchPanel } from '../../layouts';
import AddItemModal from '../modal-add/AddItemModal';
import { Collapse } from 'reactstrap';
import { IoMdArrowDropdown } from 'react-icons/io';

const DropDownSearch = ({ handleSearch, modalAddItem, toggleModalAddItem, handleAddItem, isExpanded, toggleCollapse }) => {
    return (
        <div>
            <div
                style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottom: '1px solid #e0e0e0',
                    padding: 10
                }}>
                {
                    isExpanded
                        ?
                        <IoMdArrowDropdown size={30} style={{ transform: 'rotate(180deg)' }} onClick={toggleCollapse} />
                        :
                        <IoMdArrowDropdown size={30} style={{ transform: 'rotate(-90deg)' }} onClick={toggleCollapse} />
                }
                <div style={{ display: 'inline-block', fontSize: '18px' }}>Search</div>
            </div>
            <Collapse isOpen={isExpanded} >
                <SearchPanel handleSearch={handleSearch} />
            </Collapse>
            <AddItemModal isOpen={modalAddItem} toggle={toggleModalAddItem} handleAddItem={handleAddItem} />
        </div>
    );
};

export default DropDownSearch;
