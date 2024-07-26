import React, { useState } from 'react';
import { users } from '../../utils/user';
import { CustomTabBar } from '../../layouts';
import { tabsIconAndText } from '../../utils/tab-text';
import { DropDownSearch } from '../../components';
import { Column, RequiredRule } from 'devextreme-react/cjs/data-grid';
import { TagBox } from 'devextreme-react';
import { useLoader } from '../../hooks/useLoader';

const roles = ['Admin', 'User', 'Guest'];
const Profile = () => {
  const { showLoader, hideLoader } = useLoader();
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalAddItem, setModalAddItem] = useState(false);

  const handleSearch = () => {
    console.log('search');
  };

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddItem = () => {
    showLoader("Adding...");
    setTimeout(() => {
      hideLoader();
    }, 5000);
  };

  const toggleModalAddItem = () => {
    setModalAddItem(!modalAddItem);
  };

  const renderItemAndTag = (itemData) => {
    return (
      <div>
        {
          itemData === 'Admin' ? (
            <div style={{ display: "inline-block", backgroundColor: "#f5a9ae", color: "black", padding: "2px 10px", borderRadius: "15px" }}>{itemData}</div>
          ) : itemData === 'User' ? (
            <div style={{ display: "inline-block", backgroundColor: "#fff9b5", color: "black", padding: "2px 10px", borderRadius: "15px" }}>{itemData}</div>
          ) : (
            <div style={{ display: "inline-block", backgroundColor: "#bdc4ff", color: "black", padding: "2px 10px", borderRadius: "15px" }}>{itemData}</div>
          )}
      </div>
    );
  };

  const renderRoles = () => {
    return (
      <TagBox
        style={{
          // borderRadius: '6px',
          border: 0
        }}
        stylingMode='outlined'
        items={roles}
        searchEnabled={true}
        placeholder='Select role'
        itemRender={renderItemAndTag}
        tagRender={renderItemAndTag}
      />
    );
  };

  const userColumns = [
    <Column
      alignment='center'
      dataField='stt'
      caption='STT'
      width={'10%'}
      headerCellRender={() => <div className='column-header'>STT</div>}
    >
    </Column>,
    <Column
      alignment='center'
      dataField='name'
      caption='Full Name'
      width={'20%'}>
      <RequiredRule />
    </Column>,
    <Column
      alignment='center'
      dataField='username'
      caption='Username'
      width={'15%'}>
      <RequiredRule />
    </Column>,
    <Column
      alignment='center'
      dataField='dob'
      caption='Date of birth'
      width={'15%'}>
      <RequiredRule />
    </Column>,
    <Column
      alignment='center'
      dataField='role'
      caption='Role'
      width={'25%'}
      cellRender={renderRoles}
    >
      <RequiredRule />
    </Column>,
  ];

  return (
    <div className='children-content'>
      <h2 className={'content-block'}>Users</h2>
      <DropDownSearch
        handleAddItem={handleAddItem}
        modalAddItem={modalAddItem}
        toggleModalAddItem={toggleModalAddItem}
        handleSearch={handleSearch}
        isExpanded={isExpanded}
        toggleCollapse={toggleCollapse}
      />
      <div>
        <CustomTabBar
          tabsIconAndText={tabsIconAndText}
          dataSource={users}
          columns={userColumns}
        />
      </div>
    </div>
  );
};

export default Profile;
