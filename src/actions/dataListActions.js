import * as types from "../constants/ActionTypes";
import * as api from "../constants/ReUsageStaff";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
toast.configure();
//Data fetch
export const datafetchStart = () => ({
  type: types.LIST_FETCH_START,
  payload: {
    datafetchLoading: true,
    data:""
   
  },
});

export const datafetchSuccess = (data) => ({
  type: types.LIST_FETCH_SUCCESS,
  payload: {
    data: data,   
    datafetchLoading: false,
  },
});

export const datafetchFailure = (error) => ({
  type: types.LIST_FETCH_FAILURE,
  payload: {    
    error: error,   
    datafetchLoading:false
  },
});


export const dataFetch = () => (dispatch) => {
  dispatch(datafetchStart());
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Authorization", "Bearer ");
  headers.append("Origin", "*");
  const requestOptions = {
    method: "GET",
    headers: headers,
  };
  fetch(api.datafetch_url, requestOptions)
    .then((response) => {


      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    

    .then(([statusCode, data]) => {
        
      if (statusCode === 200) {
        dispatch(datafetchSuccess(data));
      } else if (statusCode === 422) {
        toast.error("datafetchFailure");
        dispatch(datafetchFailure("There are some Error！"));
      } else if (statusCode === 401) {
        dispatch(datafetchFailure(statusCode));
      } else if (data.detail) {
        toast.error(data.detail);
        dispatch(datafetchFailure(data.detail));
      } else {
        toast.error("Error！");
        dispatch(datafetchFailure("Server error!"));
      }
    })
    .catch((error) => {
      dispatch(datafetchFailure(error));
    });
};


//Single Data fetch
export const singleDataFetchStart = () => ({
  type: types.SINGLE_DATA_FACE_START,
  payload: {
    singleDataFetchLoading: true,
    singledata: "",
  },
});

export const singleDataFetchSuccess = (data) => ({
  type: types.SINGLE_DATA_FACE_SUCCESS,
  payload: {
    singledata: data,
    singleDataFetchLoading: false,
  },
});

export const singleDataFetchFailure = (error) => ({
  type: types.SINGLE_DATA_FACE_FAILURE,
  payload: {
    error: error,
    singleDataFetchLoading: false,
  },
});


export const singleDataFetch = (id) => (dispatch) => {
  dispatch(singleDataFetchStart());
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Authorization", "Bearer ");
  headers.append("Origin", "*");
  const requestOptions = {
    method: "GET",
    headers: headers,
  };
  fetch(api.single_datafetch_url+id, requestOptions)
    .then((response) => {


      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })

    .then(([statusCode, data]) => {
      if (statusCode === 200) {
        dispatch(singleDataFetchSuccess(data));
      } else if (statusCode === 422) {
        toast.error("singleDataFetchFailure");
        dispatch(singleDataFetchFailure("There are some Error！"));
      } else if (statusCode === 401) {
        dispatch(singleDataFetchFailure(statusCode));
      } else if (data.detail) {
        toast.error(data.detail);
        dispatch(singleDataFetchFailure(data.detail));
      } else {
        toast.error("Error！");
        dispatch(singleDataFetchFailure("Server error!"));
      }
    })
    .catch((error) => {
      dispatch(singleDataFetchFailure(error));
    });
};

//Data add

export const dataAddStart = () => ({
  type: types.DATA_ADD_START,
  payload: {
    dataAddLoading: true,
    dataAdd: "",
  },
});

export const dataAddSuccess = (data) => ({
  type: types.DATA_ADD_SUCCESS,
  payload: {
    dataAdd: data,
    dataAddLoading: false,
  },
});

export const dataAddFailure = (error) => ({
  type: types.DATA_ADD_FAILURE,
  payload: {
    error: error,
    dataAddLoading: false,
  },
});

export const dataAdd = (data) => (dispatch) => {
  dispatch(dataAddStart());
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Authorization", "Bearer ");
  headers.append("Origin", "*");
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      startDate: data.startDate,
      startTime: data.startTime,
      endDate: data.endDate,
      endTime: data.endTime,
      description: data.description,
    }),
  };
  fetch(api.data_add_url, requestOptions)
    .then((response) => {
      console.log("response", response);

      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })

    .then(([statusCode, data]) => {
      if (statusCode === 200) {
        dispatch(dataAddSuccess(data));
         toast.success("Success");
         setTimeout(function () {
           window.location.href = "/";
         }, 1000);
      } else if (statusCode === 422) {
        toast.error("dataAddFailure");
        dispatch(dataAddFailure("There are some Error！"));
      } else if (statusCode === 401) {
        dispatch(dataAddFailure(statusCode));
      } else if (data.detail) {
        toast.error(data.detail);
        dispatch(dataAddFailure(data.detail));
      } else {
        toast.error("Error！");
        dispatch(dataAddFailure("Server error!"));
      }
    })
    .catch((error) => {
      dispatch(dataAddFailure(error));
    });
};

//Data edit

export const dataEditStart = () => ({
  type: types.DATA_EDIT_START,
  payload: {
    dataEditLoading: true,
    dataEdit: "",
  },
});

export const dataEditSuccess = (data) => ({
  type: types.DATA_EDIT_SUCCESS,
  payload: {
    dataEdit: data,
    dataEditLoading: false,
  },
});

export const dataEditFailure = (error) => ({
  type: types.DATA_EDIT_FAILURE,
  payload: {
    error: error,
    dataEditLoading: false,
  },
});

export const dataEdit = (data,id) => (dispatch) => {
  dispatch(dataEditStart());
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Authorization", "Bearer ");
  headers.append("Origin", "*");
  const requestOptions = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      startDate: data.startDate,
      startTime: data.startTime,
      endDate: data.endDate,
      endTime: data.endTime,
      description: data.description,
    }),
  };
  fetch(api.data_edit_url+id, requestOptions)
    .then((response) => {


      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })

    .then(([statusCode, data]) => {
      if (statusCode === 200) {
        dispatch(dataEditSuccess(data));
         setTimeout(function () {
           window.location.href = "/";
         }, 1000);
      } else if (statusCode === 422) {
        toast.error("dataEdit Failed");
        dispatch(dataEditFailure("There are some Error！"));
      } else if (statusCode === 401) {
        dispatch(dataEditFailure(statusCode));
      } else if (data.detail) {
        toast.error(data.detail);
        dispatch(dataEditFailure(data.detail));
      } else {
        toast.error("Error！");
        dispatch(dataEditFailure("Server error!"));
      }
    })
    .catch((error) => {
      dispatch(dataEditFailure(error));
    });
};

//Data delete

export const dataDeleteStart = () => ({
  type: types.DATA_DELETE_START,
  payload: {
    dataDeleteLoading: true,
    deletedata: "",
  },
});

export const dataDeleteSuccess = (data) => ({
  type: types.DATA_DELETE_SUCCESS,
  payload: {
    deletedata: data,
    dataDeleteLoading: false,
  },
});

export const dataDeleteFailure = (error) => ({
  type: types.DATA_DELETE_FAILURE,
  payload: {
    error: error,
    dataDeleteLoading: false,
  },
});

export const dataDelete = (id) => (dispatch) => {
  dispatch(dataDeleteStart());
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Authorization", "Bearer ");
  headers.append("Origin", "*");
  const requestOptions = {
    method: "DELETE",
    headers: headers,
  };
  fetch(api.data_delete_url+id, requestOptions)
    .then((response) => {
      console.log("response", response);

      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })

    .then(([statusCode, data]) => {
      if (statusCode === 200) {
        dispatch(dataDeleteSuccess(data));
        
      } else if (statusCode === 422) {
        toast.error("dataDeleteFailure");
        dispatch(dataDeleteFailure("There are some Error！"));
      } else if (statusCode === 401) {
        dispatch(dataDeleteFailure(statusCode));
      } else if (data.detail) {
        toast.error(data.detail);
        dispatch(dataDeleteFailure(data.detail));
      } else {
        toast.error("Error！");
        dispatch(dataDeleteFailure("Server error!"));
      }
    })
    .catch((error) => {
      dispatch(dataDeleteFailure(error));
    });
};
