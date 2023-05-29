import {api} from '../../api/api'
import { REGISTER_FAIL,REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from "../types/authType";
export const userRegister = (data) => {
    return async (dispatch) => {
        try {
            const response = await api.post('/api/messenger/user-register', data);
            
            localStorage.setItem('authToken', response.data.token);

            dispatch({
                type : REGISTER_SUCCESS,
                payload : {
                    successMessage : response.data.successMessage,
                    token : response.data.token
                }
            })

        } catch (error){
            dispatch({
                type : REGISTER_FAIL,
                payload : {
                    error: error.response.data.error.errorMessage
                }
            })
        }
    }
}


export const userLogin = (data) => {
    return async (dispath) => {
        try {
            const response = await api.post('/api/messenger/user-login', data);
            localStorage.setItem('authToken', response.data.token);
            dispath({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    successMessage: response.data.successMessage,
                    token: response.data.token
                }
            })
        } catch (error) {
            dispath({
                type: USER_LOGIN_FAIL,
                payload: {
                    error: error.response.data.error.errorMessage
                }
            })
        }
    }
}

export const userLogout = ()=>async(dispatch)=>{
    try {
        const response = await api.post('/api/messenger/user-logout');
        if(response.data.success){
            localStorage.removeItem('authToken');
            dispatch({
                type : 'LOGOUT_SUCCESS',
            })
        }
    } catch (error) {
        
    }
}