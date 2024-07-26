import React, { useState } from 'react';
import { DropDownSearch } from '../../components';
import DataGrid, { Column, MasterDetail, Selection } from 'devextreme-react/cjs/data-grid';
import { orders } from '../../utils/order';
import OrderDetailCell from './OrderDetailCell';
import { useLoader } from '../../hooks/useLoader';

const Order = () => {
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
      <h2 className={'content-block'}>Orders</h2>
      <DropDownSearch
        handleAddItem={handleAddItem}
        modalAddItem={modalAddItem}
        toggleModalAddItem={toggleModalAddItem}
        handleSearch={handleSearch}
        isExpanded={isExpanded}
        toggleCollapse={toggleCollapse}
      />
      <div>
        <DataGrid
          dataSource={orders}
          showBorders={true}
          columnAutoWidth={true}
          showRowLines={true}
          width={'100%'}
        >
          <Column
            alignment='center'
            key='id'
            dataField='id'
            caption='ID'
            width='10%'
            requiredRule
          />
          <Column
            alignment='center'
            key='name'
            dataField='name'
            caption='Name'
            width='20%'
            requiredRule
          />
          <Column
            alignment='center'
            dataField='totalPrice'
            caption='Total Price'
            width='20%'
            requiredRule
          />
          <Column
            alignment='center'
            dataField='quantity'
            caption='Quantity'
            width='20%'
            requiredRule
          />
          <Column
            alignment='center'
            dataField='createdDate'
            caption='Created Date'
            width='20%'
            requiredRule
          />
          <Column
            alignment='center'
            dataField='updatedDate'
            caption='Updated date'
            width='20%'
            requiredRule
          />
          <Column
            alignment='center'
            dataField='createdUserId'
            caption='Created User ID'
            width='20%'
            requiredRule
            allowEditing={false}
          />
          <Selection
            mode="multiple"
            // selectAllMode=''
            showCheckBoxesMode={'always'}
          />
          <MasterDetail enabled={true} component={OrderDetailCell} />
        </DataGrid>
      </div>
    </div>
  );
};

export default Order;
