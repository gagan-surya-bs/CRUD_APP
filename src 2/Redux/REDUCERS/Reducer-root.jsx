import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import Createpost from "./CreatePost";
import Deletepost from "./DeletePost";
import EditPost from "./EditPost";


let reducers = combineReducers({CounterReducer , Createpost , Deletepost , EditPost})

export default reducers;