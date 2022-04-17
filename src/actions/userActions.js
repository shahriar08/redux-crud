import * as types from "../constants/ActionTypes";
import * as api from "../constants/ReUsageStaff";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
toast.configure();


export const loginStart = () => ({
    type: types.USER_LOGIN_START,
    payload: {
    	loginLoading: true,
      isLoggedin: false,
      statusCode:""
    }
});

export const loginSuccess = (authInfo) => ({
	type: types.USER_LOGIN_SUCCESS,
	payload: {
  		authInfo: authInfo,
  		isLoggedIn: true,
      loginLoading: false,
      
  	}
});

export const loginFailure = (error) => ({
    type: types.USER_LOGOUT_SUCCESS,
    payload: {
    	isLoggedIn: false,
    	error: error,
      authInfo: null,
      statusCode:error
      
    }
});


export const logout = (history) => (dispatch) => {
	dispatch(loginFailure());
	history.push('/login')
};

export const LoginAll = (data,history) => (dispatch) => {
  dispatch(loginStart());
  const formData  = new FormData();
  formData.append("email", data.email);
  formData.append('password', data.password)
	const requestOptions = {
		method: "POST",
		body: formData
	};

  fetch(`${api.login_url}`, requestOptions)
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    
    .then(([statusCode, data]) => {
      if(statusCode == 200){
        dispatch(loginSuccess(data))
          history.push("/home");         
      }
      else if(statusCode == 422){
        toast.error("不足しているフィールドがいくつかあります")
        dispatch(loginFailure("There are some missing fields"));
      }
      else if(data.detail === "Incorrect email or password"){
        dispatch(loginFailure(data.detail));
        history.push("/login")
      }
      else if(statusCode == 401){
          dispatch(loginFailure(statusCode))       
      }      
      else if(data.detail){
        toast.error(data.detail)
        dispatch(loginFailure(data.detail));
      }
      else{
        toast.error("サーバーエラー！")
        dispatch(loginFailure("Server error!"));
      }
    })
    .catch((error) => {
        dispatch(loginFailure(error));
    });
};
