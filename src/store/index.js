import { configureStore } from "@reduxjs/toolkit";
import reducer from "./goodsSlicer";

export default configureStore({
    reducer: {
        goods:reducer
    }
})