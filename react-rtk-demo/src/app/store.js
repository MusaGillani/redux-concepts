import { configureStore } from "@reduxjs/toolkit";
// import reduxLogger from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  // here we specify all the reducers from slices that belong to features
  // this is similar to creating the rootRedcuer in plain redux
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
