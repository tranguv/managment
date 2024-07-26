import React from 'react';
import DataGrid, { Column } from 'devextreme-react/cjs/data-grid';
import { orderDetails } from '../../utils/order';
import { CustomButton } from '../../layouts';
import { useNavigate } from 'react-router-dom';

const OrderDetailCell = ({ data }) => {
  const orderID = data.key;
  const navigate = useNavigate();

  const details = orderDetails.filter(detail => detail.orderID === orderID.id);
  console.log("details", orderDetails);
  console.log("id", orderID);

  const viewOrderDetail = () => {
    navigate(`/order/${orderID.id}`);
  };

  return (
    <div className='children-content'>
      <div style={{ marginBottom: '10px' }}>
        <CustomButton text={'View order'} color={'#363640'} textColor={'white'} onClick={viewOrderDetail} />
      </div>
      <DataGrid
        id='orderDetailGrid'
        dataSource={details}
        keyExpr={'id'}
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
          dataField='orderID'
          caption='Order ID'
          width='20%'
          requiredRule
        />
        <Column
          alignment='center'
          dataField='productID'
          caption='Product ID'
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
      </DataGrid>
    </div>
  );
};

export default OrderDetailCell;
