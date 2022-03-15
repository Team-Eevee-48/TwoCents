import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    feedback: feedbackReducer,
    users: usersReducer,
});

export default reducers;
