import React, { useState } from 'react';
import { CustomTabBar } from '../../layouts';
import { DropDownSearch } from '../../components';
// import { roleColumns } from '../../utils/table-header';
import { roleMockData } from '../../utils/role';
import { tabsIconAndText } from '../../utils/tab-text';
import { Column, RequiredRule } from 'devextreme-react/cjs/data-grid';
import { useLoader } from '../../hooks/useLoader';

const RolePage = () => {
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

  const roleColumns = [
    <Column
      alignment='center'
      key='role'
      dataField='id'
      caption='ID'
      width={'30%'}>
      <RequiredRule />
    </Column>,
    <Column
      alignment='center'
      key='role'
      dataField='name'
      caption='Role Name'
      width={'60%'}
    >
      <RequiredRule />
    </Column>,
  ];

  return (
    <div className='children-content'>
      <h2 className={'content-block'}>Role</h2>
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
          dataSource={roleMockData}
          columns={roleColumns}
        />
      </div>
    </div>
  );
};

export default RolePage

