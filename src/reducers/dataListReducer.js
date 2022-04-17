import {
  LIST_FETCH_START,
  LIST_FETCH_SUCCESS,
  LIST_FETCH_FAILURE,
  SINGLE_DATA_FACE_START,
  SINGLE_DATA_FACE_SUCCESS,
  SINGLE_DATA_FACE_FAILURE,
  DATA_ADD_START,
  DATA_ADD_SUCCESS,
  DATA_ADD_FAILURE,
  DATA_EDIT_START,
  DATA_EDIT_SUCCESS,
  DATA_EDIT_FAILURE,
  DATA_DELETE_START,
  DATA_DELETE_SUCCESS,
  DATA_DELETE_FAILURE,
} from "../constants/ActionTypes";

const initialState = {
  data: "",
  datafetchLoading: false,
  singledata:""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_FETCH_START:
      return Object.assign({}, state, action.payload);
    case LIST_FETCH_SUCCESS:
      return Object.assign({}, state, action.payload);
    case LIST_FETCH_FAILURE:
      return Object.assign({}, state, action.payload);

    case SINGLE_DATA_FACE_START:
      return Object.assign({}, state, action.payload);
    case SINGLE_DATA_FACE_SUCCESS:
      return Object.assign({}, state, action.payload);
    case SINGLE_DATA_FACE_FAILURE:
      return Object.assign({}, state, action.payload);

    case DATA_ADD_START:
      return Object.assign({}, state, action.payload);
    case DATA_ADD_SUCCESS:
      return Object.assign({}, state, action.payload);
    case DATA_ADD_FAILURE:
      return Object.assign({}, state, action.payload);

    case DATA_EDIT_START:
      return Object.assign({}, state, action.payload);
    case DATA_EDIT_SUCCESS:
      return Object.assign({}, state, action.payload);
    case DATA_EDIT_FAILURE:
      return Object.assign({}, state, action.payload);

    case DATA_DELETE_START:
      return Object.assign({}, state, action.payload);
    case DATA_DELETE_SUCCESS:
      return Object.assign({}, state, action.payload);
    case DATA_DELETE_FAILURE:
      return Object.assign({}, state, action.payload);
    default:
  }
  return state;
}
