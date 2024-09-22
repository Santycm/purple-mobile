import React, {createContext, useReducer} from 'react';

const UserContext = createContext();

const initialState = {
    user : {}
}

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: {}
            }
        default:
            return state;
    }
}

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};