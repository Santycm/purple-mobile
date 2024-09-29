import React, {createContext, useReducer} from 'react';
import {dbMarket} from '../assets/dbMarket';

const UserContext = createContext();

const initialState = {
  dbMarket: dbMarket,
  user: null,
  cart: [],
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
        cart: [], // Limpiar el carrito al cerrar sesión
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
            ? {...item, quantity: item.quantity + 1}
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
