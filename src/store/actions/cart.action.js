import {
  addToCart,
  deleteCartProduct,
  getCart,
  updateCartProductQuantity,
} from 'api/api';
import { cartActionType } from 'store/reducers/cart.reducer';

const handleCartDispatch = async ({
  dispatch,
  actionType = cartActionType.UPDATE,
  func,
  params = [],
}) => {
  dispatch({ type: cartActionType.START });

  try {
    const { cart } = await func(...params);

    dispatch({ type: actionType, payload: { cart } });
  } catch ({ message }) {
    alert(message);

    dispatch({ type: cartActionType.FAIL });
  }
};

export const addToCartThunk = (productId, quantity) => async (dispatch) => {
  await handleCartDispatch({ dispatch, func: addToCart, params: [productId, quantity] });
};

export const getCartThunk = () => async (dispatch) => {
  await handleCartDispatch({ dispatch, actionType: cartActionType.FETCH, func: getCart });
};

export const updateCartProductQuantityThunk =
  (productId, quantity) => async (dispatch) => {
    await handleCartDispatch({
      dispatch,
      func: updateCartProductQuantity,
      params: [productId, quantity],
    });
  };

export const deleteCartProductThunk = (productIdArray) => async (dispatch) => {
  await handleCartDispatch({
    dispatch,
    actionType: cartActionType.DELETE,
    func: deleteCartProduct,
    params: [productIdArray],
  });
};

export const toggleProductCheckThunk = (productId) => (dispatch, getState) => {
  const {
    cart: { checkedProductList: prevList },
  } = getState();

  const idIndex = prevList.findIndex((id) => id === productId);
  let newArray =
    idIndex >= 0
      ? [...prevList.slice(0, idIndex), ...prevList.slice(idIndex + 1)]
      : [...prevList, productId];

  dispatch(updateCheckedList(newArray));
};

export const updateCheckedList = (checkedProductList) => ({
  type: cartActionType.UPDATE_CHECKED_LIST,
  payload: { checkedProductList },
});
