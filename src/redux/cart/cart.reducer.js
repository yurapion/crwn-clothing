import { CartActionTypes } from "./cart.types";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        //cartItems: [...state.cartItems, action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return {
          ...state,
          //another way
          // cartItems: state.cartItems.filter(
          //   cartItem => cartItem.id !== action.payload.id
          // )
          //
          cartItems: clearItemFromCart(state.cartItems, action.payload)
        };

        case CartActionTypes.REMOVE_ITEM:
          return {
            ...state,
            cartItems : removeItemFromCart(state.cartItems, action.payload)
          }

    default:
      return state;
  }
};

export default cartReducer;
