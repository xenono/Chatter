import axios from 'axios'

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILED = "LOGOUT_FAILED"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_FAILED = "AUTH_FAILED"
export const SET_ACTIVE_CHAT_SUCCESS = "SET_ACTIVE_CHAT_SUCCESS"
export const SET_ACTIVE_CHAT_FAILED = "SET_ACTIVE_CHAT_FAILED"
export const API_URL = process.env.REACT_APP_API_URL

export const login = (username,password) => async dispatch => {
    try{
        const res = await axios.post(API_URL + "/login", {username,password},{withCredentials:true})
        const publicChat = await axios.get(API_URL + "/getPublicChat",{withCredentials:true})
        if(res.data.status === 200){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user: res.data.user,
                    chat: publicChat.data
                }
            })
        }
    }catch(err){
        console.log(err.message)
        dispatch({
            type: LOGIN_FAILED,
            error: err.message
        })
    }
}

export const logout = () => async dispatch => {

    try{
        await axios.post(API_URL + "/logout",{}, {withCredentials:true})
            dispatch({
                type: LOGOUT_SUCCESS,
            })

    }catch(err){
        dispatch({
            type: LOGOUT_FAILED,
            error: err.message
        })
    }
}

export const authorize = () => async dispatch => {
    try {
        const res = await axios.post(API_URL + "/authorize", {},{withCredentials:true})
        const publicChat = await axios.get(API_URL + "/getPublicChat",{withCredentials:true})
        if(res.data.status === 200){
            dispatch({
                type: AUTH_SUCCESS,
                payload: {
                    user: {
                        _id: res.data._id,
                        username: res.data.username,
                    },
                    chats: res.data.chats,
                    chat: publicChat.data

                }
            })
        }
    }catch (err){
        dispatch({
            type: AUTH_FAILED,
            error: err.message
        })
    }
}

export const fetchChat = () => async dispatch => {

}


export const setActiveChat = (chatId,chatName) => async dispatch => {
    const chat = {
        id: chatId,
        name:chatName
    }
    dispatch({
        type: SET_ACTIVE_CHAT_SUCCESS,
        payload: {
            chat
        }
    })
}
