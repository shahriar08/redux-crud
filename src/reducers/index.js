import { combineReducers } from "redux";
// import { IntlReducer as Intl } from "react-redux-multilingual";
import authReducer from "./authReducer";
// Import custom reducers
// import foreignerRegistrationReducer from "./foreignerReducer";
import data from "./dataListReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  //   foreignerReg: foreignerRegistrationReducer,
  data: data,
});

export default rootReducer;
