import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, ADDPRODUCT_SUCCESS, ADDPRODUCT_FAIL, UPDATEPRODUCT_SUCCESS, UPDATEPRODUCT_FAIL, DELETEPRODUCT_SUCCESS, DELETEPRODUCT_FAIL, ADDREVIEW_SUCCESS, ADDREVIEW_FAIL, UPDATEREVIEW_SUCCESS, UPDATEREVIEW_FAIL, FETCHREVIEWS_REQUEST, FETCHREVIEWS_SUCCESS, FETCHREVIEWS_FAIL } from "./types"
import axios from 'axios'

export const registerUser = formData => async dispatch=> {
    try {
        console.log(JSON.stringify(formData))
        const res = await  axios.post('http://localhost:9050/api/auth/signup',formData)
        
        dispatch({
            type:REGISTER_SUCCESS,
            payload : res.data}
        )
    }
    catch(err) {
        dispatch({
            type:REGISTER_FAIL
        })
    }

}

export const login =(username,password)=> async dispatch =>{
    const body = {username,password}
    try{
        
        const res = await axios.post("http://localhost:9050/api/auth/signin", body)

        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:LOGIN_FAIL
        })
    }

}

export const addProduct = formData => async dispatch=> {
    try{
        console.log(JSON.stringify(formData))
        const res = await axios.post("http://localhost:9050/api/ProductCat/create", formData)

        dispatch({
            type:ADDPRODUCT_SUCCESS,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:ADDPRODUCT_FAIL
        })
    }

}

export const updateProduct1 = formData => async dispatch=> {
    try{
        console.log(JSON.stringify(formData))
        //axios.defaults.headers.common['Authorization'] = Bearer + accessToken
        const res = await axios.post("http://localhost:9050/api/ProductCat/update", formData)

        dispatch({
            type:UPDATEPRODUCT_SUCCESS,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:UPDATEPRODUCT_FAIL
        })
    }

}

export const deleteProduct = formData => async dispatch=> {
    try{
        console.log(JSON.stringify(formData))
        //axios.defaults.headers.common['Authorization'] = Bearer + accessToken
        const res = await axios.post("http://localhost:9050/api/ProductCat/id", formData)

        dispatch({
            type:DELETEPRODUCT_SUCCESS,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:DELETEPRODUCT_FAIL
        })
    }

}



export const addReview = formData => async dispatch=> {
    try{
        console.log(JSON.stringify(formData))
        const res = await axios.post("http://localhost:9050/api/Review/create", formData)

        dispatch({
            type:ADDREVIEW_SUCCESS,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:ADDREVIEW_FAIL
        })
    }
}

export const updateReview = formData => async dispatch=> {
    try{
        console.log(JSON.stringify(formData))
        //axios.defaults.headers.common['Authorization'] = Bearer + accessToken
        const res = await axios.put("http://localhost:9050/api/Review/update/"+formData.id, formData)

        dispatch({
            type:UPDATEPRODUCT_SUCCESS,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:UPDATEPRODUCT_FAIL
        })
    }
}

export const deleteReview = formData => async dispatch=> {
    try{
        console.log(JSON.stringify(formData))
        //axios.defaults.headers.common['Authorization'] = Bearer + accessToken
        const res = await axios.delete("http://localhost:9050/api/Review/"+formData.id, formData)

        dispatch({
            type:DELETEPRODUCT_SUCCESS,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:DELETEPRODUCT_FAIL
        })
    }
}

export const getallReviewsRequest = () => {
    return {
        type: FETCHREVIEWS_REQUEST
    }
}

export const getallReviewsSuccess = reviews => {
    return {
        type: FETCHREVIEWS_SUCCESS,
        payload: reviews
    }
}

export const getallReviews = () => {
    try{
        return (dispatch) => {
            dispatch(getallReviewsRequest)
            axios.get("http://localhost:9050/api/Review/reviews")
            .then(response => {
                const reviews = response.data
                console.log(response.data);
                //console.log(response.status);
                dispatch(getallReviewsSuccess(reviews))
                //dispatch({
                  //  type:FETCHREVIEWS_SUCCESS,
                    //payload:response.data
            //})
        })
        .catch(err => {
            dispatch({
                type:FETCHREVIEWS_FAIL
            })
        })
    }
}
    catch(err){
    }          
    }

export const logout = ()=>({type:LOGOUT})