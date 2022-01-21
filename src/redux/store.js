import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import RootReducer from "./RootReducer";

//set up middleware - an array
const middlewares = [logger]

const store = createStore(RootReducer, applyMiddleware(...middlewares))

export default store;