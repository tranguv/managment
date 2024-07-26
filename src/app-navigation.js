export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home',
  },
  {
    text: 'Quản lý',
    icon: 'folder',
    items: [
      {
        text: 'Users',
        path: '/user',
        icon: 'user',
      },
      {
        text: 'Products',
        path: '/product',
        icon: 'product',
      },
      {
        text: 'Category',
        path: '/category',
        icon: 'description',
      },
      {
        text: 'Roles',
        path: '/role',
        icon: 'group',
      },
      {
        text: 'Orders',
        path: '/order',
        icon: 'cart',
      },
      // {
      //   text: 'Order Details',
      //   path: '/order/:id',
      //   icon: 'product',
      // }
    ],
  },
];
