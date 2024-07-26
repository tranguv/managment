import React, { useState } from 'react';
import {
  CustomTabBar,
} from '../../layouts';
import { tabsIconAndText } from '../../utils/tab-text';
import { mockProductData } from '../../utils/product';
import { DropDownSearch } from '../../components';
import { Column, RequiredRule } from 'devextreme-react/cjs/data-grid';
import { useLoader } from '../../hooks/useLoader';

const productColumns = [
  <Column
    alignment='center'
    key='id'
    dataField='id'
    caption='ID'
    width='10%'>
    <RequiredRule />
  </Column>,
  <Column
    alignment='center'
    key='name'
    dataField='name'
    caption='Product Name'
    width='20%'>
    <RequiredRule />
  </Column>,
  <Column
    alignment='center'
    key='createdDate'
    dataField='createdDate'
    caption='Created Date'
    width='20%'
    allowEditing={false}>
  </Column>,

  <Column
    alignment='center'
    key='updatedDate'
    dataField='updatedDate'
    caption='Updated Date'
    width='20%'
    allowEditing={false}>
  </Column>,

  <Column
    alignment='center'
    key='createUserID'
    dataField='createUserID'
    caption='Create User ID'
    width='20%'
    allowEditing={false}>
  </Column>,
];
const ProductPage = () => {
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

  return (
    <div className='children-content'>
      <h2 className={'content-block'}>Products</h2>
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
          dataSource={mockProductData}
          columns={productColumns}
        />
      </div>
    </div>
  );
};

export default ProductPage;
