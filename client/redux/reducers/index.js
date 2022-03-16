import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    feedback: feedbackReducer,
    user: userReducer,
});

export default reducers;
