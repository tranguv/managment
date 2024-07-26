import {
  HomePage,
  ProfilePage,
  TestPage,
  RolePage,
  ProductPage,
  CategoryPage,
  OrderPage,
  OrderDetailPage,
} from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
  {
    path: '/product',
    element: ProductPage,
  },
  {
    path: '/user',
    element: ProfilePage,
  },
  {
    path: '/category',
    element: CategoryPage,
  },
  {
    path: '/home',
    element: HomePage,
  },
  {
    path: '/test',
    element: TestPage,
  },
  {
    path: '/role',
    element: RolePage,
  },
  {
    path: '/order',
    element: OrderPage,
  },
  {
    path: '/order/:id',
    element: OrderDetailPage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
