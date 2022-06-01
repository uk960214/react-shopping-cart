import { ROUTE } from 'route';

import Home from 'pages/Home/Home';
import OrderList from 'pages/OrderList/OrderList';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart';
import NotFound from './NotFound/NotFound';
import Register from './Register/Register';
import Login from './Login/Login';
import UserInfo from './UserInfo/UserInfo';
import PasswordCheck from './PasswordCheck/PasswordCheck';
import UserInfoUpdate from './UserInfoUpdate/UserInfoUpdate';
import UserPasswordUpdate from './UserPasswordUpdate/UserPasswordUpdate';

export const COMMON_PAGES = {
  [ROUTE.home.path]: <Home />,
  [ROUTE.productDetail.path]: <ProductDetail />,
  '/*': <NotFound />,
};

export const NON_USER_PAGES = {
  [ROUTE.register.path]: <Register />,
  [ROUTE.login.path]: <Login />,
};

export const USER_PAGES = {
  [ROUTE.shoppingCart.path]: <ShoppingCart />,
  [ROUTE.orderList.path]: <OrderList />,
  [ROUTE.userInfo.path]: <UserInfo />,
  [ROUTE.passwordCheck.path]: <PasswordCheck />,
  [ROUTE.userInfoUpdate.path]: <UserInfoUpdate />,
  [ROUTE.userPasswordUpdate.path]: <UserPasswordUpdate />,
};
