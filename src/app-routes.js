import {
  HomePage,
  ProfilePage,
  TestPage,
  RolePage,
  ProductPage,
  CategoryPage,
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
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
