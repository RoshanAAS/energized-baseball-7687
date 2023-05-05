import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authreducer/reducer";
import { reducer as teacherReducer } from "./hireReducer/reducer";
// import AdminReducer from "./admin/admin.reducer"

const rootReducer = combineReducers({
  authReducer,
  teacherReducer
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
