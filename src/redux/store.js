import { createStore, combineReducers } from "redux";

import cakeReducer from "./cakeShop/cakeReducer";
import iceCreamReducer from "./iceCreamShop/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

const store = createStore(rootReducer);
export default store;
