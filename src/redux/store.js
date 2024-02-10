import { configureStore } from "@reduxjs/toolkit";

import TodoSclicce from "./TodoSclicce";

export const store = configureStore({
  reducer: TodoSclicce,
});
