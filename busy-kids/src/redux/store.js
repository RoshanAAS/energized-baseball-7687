import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authreducer/reducer";
// import AdminReducer from "./admin/admin.reducer"

const rootReducer = combineReducers({
  authReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
