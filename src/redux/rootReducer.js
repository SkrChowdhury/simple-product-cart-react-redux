import { combineReducers } from "redux";
import cartReducer from "./carts/cartReducer";
import pageReducer from "./page/pageReducer";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
  pages: pageReducer,
});

export default rootReducer;
