import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import rootReducers from "./root.reducers";
const middleware = [logger];
const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
