import Createpost from "./CreatePost";
import Deletepost from "./DeletePost";
import EditPost from "./EditPost";

let CounterReducer = (state, action) => {
  switch (action.type) {
    case "ADDING":
      return <Createpost/>
    case "EDITING":
      return <EditPost/>;
    case "DELETING":
      return <Deletepost/>;

    default:
      return state;
  }
};
export default CounterReducer;
