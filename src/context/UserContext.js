import React, {createContext, useEffect, useReducer} from 'react';
import {collection, getDocs, setDoc, updateDoc, doc} from 'firebase/firestore';
import {db} from '../firebase/firebase';

const UserContext = createContext();

const initialState = {
  dbMarket: [],
  user: null,
  cart: [],
  search: '',
};

const addNewUser = async newUser => {
  try {
    const userDocRef = doc(collection(db, 'dbMarket'), newUser.userName);
    await setDoc(userDocRef, newUser);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

const updateDataInFirestore = async dbMarket => {
  try {
    const querySnapshot = await getDocs(collection(db, 'dbMarket'));
    querySnapshot.forEach(async document => {
      const docRef = doc(db, 'dbMarket', document.id);
      await updateDoc(
        docRef,
        dbMarket.find(item => item.userName === document.id),
      );
    });
  } catch (error) {
    console.error('Error updating dbMarket in Firestore: ', error);
  }
};

let newStateDispatch = null;

const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const {newUser} = action.payload;
      newStateDispatch = {
        ...state,
        dbMarket: [...state.dbMarket, newUser],
      };
      addNewUser(newUser);
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
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
      newStateDispatch = {
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
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'UPDATE_PURCHASE_STATUS_ONLIST':
      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user => {
          if (user.clientPurchases) {
            user.clientPurchases.map(purchase => {
              if (purchase.productP === action.payload.product) {
                purchase.status = action.payload.status;
              }
            });
          }
          return user;
        }),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'UPDATE_PURCHASE_STATUS':
      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user => {
          user.purchases.map(purchase => {
            if (purchase.product === action.payload.product) {
              purchase.status = action.payload.status;
            }
          });
          return user;
        }),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'ADD_CLIENT_PURCHASE':
      const {
        distribuitor,
        productP,
        img,
        date,
        price,
        status,
        paymentMethod,
        count,
        client,
      } = action.payload;
      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === distribuitor
            ? {
                ...user,
                clientPurchases: [
                  ...user.clientPurchases,
                  {
                    productP,
                    img,
                    date,
                    price,
                    status,
                    paymentMethod,
                    count,
                    client,
                  },
                ],
              }
            : user,
        ),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'ADD_PRODUCT':
      const {userName, product} = action.payload;
      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === userName
            ? {...user, products: [...user.products, product]}
            : user,
        ),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'DELETE_PRODUCT':
      const deleteProduct = action.payload.deleteProduct;
      const deleteUserName = action.payload.deleteUserName;

      newStateDispatch = {
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
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'UPDATE_PRODUCT':
      const updateProduct = action.payload.updateProduct;
      const updateUserName = action.payload.updateUserName;

      newStateDispatch = {
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
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'UPDATE_PRODUCT_ON_FAVORITE_LIST':
      const updateProductFavorite = action.payload.updateProduct;

      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user => ({
          ...user,
          favoriteProducts: user.favoriteProducts.map(product =>
            product.id === updateProductFavorite.id
              ? {...product, ...updateProductFavorite}
              : product,
          ),
        })),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'UPDATE_ADDRESS':
      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === state.user.userName
            ? {...user, address: action.payload}
            : user,
        ),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'SET_POINT_DELIVERY':
      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === state.user.userName
            ? {...user, pointDelivery: action.payload}
            : user,
        ),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
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
    case 'ADD_QUESTION':
      const {productInfo, question, productDistribuitor} = action.payload;

      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === productDistribuitor
            ? {
                ...user,
                products: user.products.map(product =>
                  product.id === productInfo.id
                    ? {
                        ...product,
                        questions: [
                          ...product.questions,
                          {
                            id: product.questions.length + 1,
                            user: `${state.user.name} ${state.user.lastName}`,
                            question,
                          },
                        ],
                      }
                    : product,
                ),
              }
            : user,
        ),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'ADD_ANSWER':
      const {questionInfo, answer, productQInfo, productDistri} =
        action.payload;

      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === productDistri
            ? {
                ...user,
                products: user.products.map(product =>
                  product.id === productQInfo.id
                    ? {
                        ...product,
                        questions: product.questions.map(question =>
                          question.id === questionInfo.id
                            ? {...question, answer}
                            : question,
                        ),
                      }
                    : product,
                ),
              }
            : user,
        ),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'ADD_COMMENT':
      const {productInf, comment, rating, productDistrib} = action.payload;

      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === productDistrib
            ? {
                ...user,
                products: user.products.map(product =>
                  product.id === productInf.id
                    ? {
                        ...product,
                        comments: [
                          ...product.comments,
                          {
                            id: product.comments.length + 1,
                            user: `${state.user.name} ${state.user.lastName}`,
                            comment,
                            rating,
                          },
                        ],
                      }
                    : product,
                ),
              }
            : user,
        ),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'ADD_FAVORITE':
      const {productFav, userProduct} = action.payload;
      newStateDispatch = {
        ...state,
        dbMarket: state.dbMarket.map(user =>
          user.userName === userProduct.userName
            ? {
                ...user,
                favoriteProducts: [...user.favoriteProducts, productFav],
              }
            : user,
        ),
      };
      updateDataInFirestore(newStateDispatch.dbMarket);
      return newStateDispatch;
    case 'SET_DBMARKET':
      return {
        ...state,
        dbMarket: action.payload,
      };
    default:
      return state;
  }
};

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'dbMarket'));
        const data = querySnapshot.docs.map(doc => doc.data());
        dispatch({type: 'SET_DBMARKET', payload: data});
      } catch (error) {
        console.log('Error getting documents: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
