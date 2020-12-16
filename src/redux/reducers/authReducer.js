import {LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, ADDPRODUCT_SUCCESS, ADDPRODUCT_FAIL, UPDATEPRODUCT_SUCCESS, UPDATEPRODUCT_FAIL, DELETEPRODUCT_SUCCESS, DELETEPRODUCT_FAIL, FETCHPRODUCTS_SUCCESS, FETCHPRODUCTS_FAIL, ADDREVIEW_SUCCESS, ADDREVIEW_FAIL, UPDATEREVIEW_SUCCESS, UPDATEREVIEW_FAIL, DELETEREVIEW_SUCCESS, DELETEREVIEW_FAIL, FETCHREVIEWS_SUCCESS, FETCHREVIEWS_FAIL, FETCHREVIEWS_REQUEST} from '../actions/types'
const initialState = {
token : localStorage.getItem('token'),
isAuthenticated : false,
loading : true,
user:null,
reviews: [],
error: ''
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

    case REGISTER_SUCCESS:
        return { ...state, ...payload,
        isAuthenticated:false}

    case LOGIN_SUCCESS:
        return {...state, ...payload,
        isAuthenticated:true}
            
    case LOGOUT:{
        return {...state, token : null, isAuthenticated:false, user :null}
            }
    
    case ADDPRODUCT_SUCCESS:
        return { ...state, ...payload}

    case UPDATEPRODUCT_SUCCESS:
        return { ...state, ...payload}

    case DELETEPRODUCT_SUCCESS:
        return { ...state, ...payload}

    case FETCHPRODUCTS_SUCCESS:
        return { ...state, ...payload}


    case ADDREVIEW_SUCCESS:
        return { ...state, ...payload}

    case UPDATEREVIEW_SUCCESS:
        return { ...state, ...payload}
    
    case DELETEREVIEW_SUCCESS:
        return { ...state, ...payload}

    case FETCHREVIEWS_REQUEST:
        return {...state, loading:true}
    
    case FETCHREVIEWS_SUCCESS:
        return { ...state, reviews:action.payload, error: '', loading:false}

    default:
        return state
    }
}