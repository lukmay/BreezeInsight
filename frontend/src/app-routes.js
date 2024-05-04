import { HomePage, BoxPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
       {
        path: '/home',
        element: HomePage
    }, 
  
  {
    path: '/box/:boxId',
    element: BoxPage
  }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
