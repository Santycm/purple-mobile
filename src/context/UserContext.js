import React, {createContext, useReducer} from 'react';
import {dbMarket} from '../assets/dbMarket';

const UserContext = createContext();

const initialState = {
  dbMarket: dbMarket,
  user: null,
  cart: [],
  search: '',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        cart: [], // Clear cart when user logs out
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        search: action.payload,
      };
    case 'ADD_PURCHASE':
      return {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === state.user.userName
            ? {
                ...user,
                purchases: [...user.purchases, action.payload],
              }
            : user,
        ),
      };
    case 'ADD_PRODUCT':
      const {userName, product} = action.payload;
      return {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === userName
            ? {...user, products: [...user.products, product]}
            : user,
        ),
      };
    case 'DELETE_PRODUCT':
      const deleteProduct = action.payload.deleteProduct;
      const deleteUserName = action.payload.deleteUserName;

      return {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === deleteUserName
            ? {
                ...user,
                products: user.products.filter(
                  product => product.name !== deleteProduct.name,
                ),
              }
            : user,
        ),
      };
      case 'UPDATE_PRODUCT':
      const updateProduct = action.payload.updateProduct;
      const updateUserName = action.payload.updateUserName;

      console.log(updateProduct);
      console.log(updateUserName);

      return {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === updateUserName
            ? {
                ...user,
                products: user.products.map(product =>
                  product.id === updateProduct.id
                    ? {...product, ...updateProduct}
                    : product,
                ),
              }
            : user,
        ),
      };
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === state.user.userName
            ? {...user, address: action.payload}
            : user,
        ),
      };
    case 'SET_POINT_DELIVERY':
      return {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === state.user.userName
            ? {...user, pointDelivery: action.payload}
            : user,
        ),
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, {...action.payload, quantity: 1}],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'INCREMENT_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? {
                ...item,
                quantity:
                  item.quantity > 98 ? item.quantity : item.quantity + 1,
              }
            : item,
        ),
      };
    case 'DECREMENT_ITEM':
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload
              ? {...item, quantity: item.quantity - 1}
              : item,
          )
          .filter(item => item.quantity > 0),
      };
    default:
      return state;
  }
};

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
