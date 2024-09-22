import React, {createContext, useContext, useReducer} from 'react';

const CartContext = createContext();

const initialState = {
  cart: [
    
  ],
};

const cartReducer = (state, action) => {
  switch (action.type) {
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

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
