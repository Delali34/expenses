import ExpensesReducers  from "../reducer/ExpensesReducers";
import { legacy_createStore as createStore } from "redux";

 let Store = createStore(ExpensesReducers);

 export default Store;