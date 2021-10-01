import {createContext,useReducer} from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user:{
        _id:"6152a017b81c71d4b856dfa3",
        username:"juan",
        email:"juan@gmail.com",
        profilePicture:"person/1.jpeg",
        coverPicture:"",
        isAdmin:false,
        followers:[],
        followings:[]
    },
    isFetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider 
        value={{ 
        user:state.user ,
        isFetching:state.isFetching,
        error:state.error,
        dispatch
        }}
        >
        {children}
        </AuthContext.Provider>
    ); 
}