export const orders = [
  {
    id: 1,
    name: 'Order 1',
    totalPrice: 100,
    quantity: 2,
    createdDate: '2023-07-01',
    updatedDate: '2023-07-02',
    createdUserId: 'user_001',
  },
  {
    id: 2,
    name: 'Order 2',
    totalPrice: 150,
    quantity: 3,
    createdDate: '2023-07-03',
    updatedDate: '2023-07-04',
    createdUserId: 'user_002',
  },
  {
    id: 3,
    name: 'Order 3',
    totalPrice: 200,
    quantity: 4,
    createdDate: '2023-07-05',
    updatedDate: '2023-07-06',
    createdUserId: 'user_003',
  },
];

export const orderDetails = [
  { id: 101, orderID: 1, productID: 'prod_001', quantity: 1 },
  { id: 102, orderID: 1, productID: 'prod_002', quantity: 1 },
  { id: 201, orderID: 2, productID: 'prod_003', quantity: 2 },
  { id: 202, orderID: 2, productID: 'prod_004', quantity: 1 },
  { id: 301, orderID: 3, productID: 'prod_005', quantity: 2 },
  { id: 302, orderID: 3, productID: 'prod_006', quantity: 2 },
];
