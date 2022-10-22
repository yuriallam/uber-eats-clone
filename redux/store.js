// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}