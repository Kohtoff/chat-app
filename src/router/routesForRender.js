import { routesConfig, routesKeys } from './routesConfig';

//import components for routes
import Chat from '../components/Chat/Chat';
import Login from '../components/Login/Login';

const renderMap = {
  [routesKeys.chat]: Chat,
  [routesKeys.login]: Login,
};

//merger of routesConfig and relevant components
export const routesForRender = routesConfig.map((route) => ({
  ...route,
  element: renderMap[route.key],
}));
