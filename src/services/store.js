import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./expenseReducer";
export default configureStore({
  reducer: {
    account: accountReducer,
  },
});
