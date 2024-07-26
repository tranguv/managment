import React, { useState } from 'react';
import { CustomButton, CustomTabBar } from '../../layouts';
import { tabsIconAndText } from '../../utils/tab-text';
import { categoryMockData } from '../../utils/category';
import { DropDownSearch } from '../../components';
import { Column } from 'devextreme-react/cjs/data-grid';
import { BsPlusLg, BsSearch } from 'react-icons/bs';
import { useLoader } from '../../hooks/useLoader';

const CategoryPage = () => {
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

  const categoryColumns = [
    <Column
      alignment='center'
      key='id'
      dataField='id'
      caption='ID'
      width='10%'
      requiredRule />,
    <Column
      alignment='center'
      key='name'
      dataField='name'
      caption='Category Name'
      width='80%'
      requiredRule
    />,
  ];

  return (
    <div className='children-content'>
      <h2 className={'content-block'}>Category</h2>
      <DropDownSearch
        handleAddItem={handleAddItem}
        modalAddItem={modalAddItem}
        toggleModalAddItem={toggleModalAddItem}
        handleSearch={handleSearch}
        isExpanded={isExpanded}
        toggleCollapse={toggleCollapse}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
          gap: 10,
        }}
      >
        <CustomButton
          text={'Tìm kiếm'}
          color={'#6ea0f0'}
          icon={<BsSearch />}
          onClick={handleSearch}
          disabled={!isExpanded}
        />
        <CustomButton
          text={'Thêm mới'}
          color={'#7eba68'}
          icon={<BsPlusLg />}
          onClick={toggleModalAddItem}
        />
      </div>
      <div>
        <CustomTabBar
          tabsIconAndText={tabsIconAndText}
          dataSource={categoryMockData}
          columns={categoryColumns}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
