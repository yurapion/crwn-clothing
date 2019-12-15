// import SHOP_DATA from "./shop.data";

import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ""
};

// Need to keep all of our data offline which is inconvinient
// const INITIAL_STATE = {
//   collections: SHOP_DATA
// };

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;

//old approach
// const shopReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ShopActionTypes.UPDATE_COLLECTIONS:
//       return {
//         ...state,
//         collections: action.payload
//       };

//     default:
//       return state;
//   }
// };

// export default shopReducer;
