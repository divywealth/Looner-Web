import { createStore } from "redux";
import appReducer from "./reducers/reducers";
import middleware from "./middlewares";


const store = createStore(appReducer, middleware);

export default store;