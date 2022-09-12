import * as types from "../constants/actionTypes";
import axios from "axios";

export const signUpActionCreator =
  (first_name, last_name, email, username, password) => (dispatch) => {
    if (!username || !password || !first_name || !last_name || !email)
      return dispatch({ type: types.UNSUCCESSFUL_AUTH });
    else {
      axios({
        method: "POST",
        url: "/api/auth/signup",
        headers: { "Content-Type": "application/json" },
        data: {
          first_name: first_name,
          last_name: last_name,
          email: email,
          username: username,
          password: password,
        },
      })
        .then((response) => {
          dispatch({
            type: types.SUCCESSFUL_AUTH,
            payload: {
              user_id: response.data._id,
              username: response.data.username,
            },
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: types.UNSUCCESSFUL_AUTH });
        });
    }
  };

export const loginActionCreator = (email, password) => (dispatch) => {
  if (!email || !password) return dispatch({ type: types.UNSUCCESSFUL_AUTH });
  else {
    axios({
      method: "POST",
      url: "/api/auth/login",
      headers: { "Content-Type": "application/json" },
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        if (response.data.status === false)
          return dispatch({ type: types.UNSUCCESSFUL_AUTH });
        dispatch({
          type: types.SUCCESSFUL_AUTH,
          payload: {
            user_id: response.data._id,
            username: response.data.username,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: types.UNSUCCESSFUL_AUTH });
      });
  }
};

export const changePageActionCreator = (newPage) => ({
  type: types.CHANGE_PAGE,
  payload: newPage,
});

export const addFeedbackActionCreator =
  (user_id, title, description, category) => (dispatch) => {
    console.log("addfeedback params", user_id, title, description, category);
    if (!user_id || !title || !description || !category)
      return dispatch({ type: types.SUBMISSION_ERROR });
    else {
      axios
        .post("/api/feedback", {
          user_id,
          title,
          description,
          category,
        })
        .then((response) => {
          dispatch({ type: types.SUBMISSION_SUCCESS });
        })
        .catch((err) => {
          console.log("err", err);
          dispatch({ type: types.SUBMISSION_ERROR });
        });
    }
  };

export const getFeedbackActionCreator = (user_id) => (dispatch) => {
  axios({
    method: "GET",
    url: "/api/feedback",
    headers: { "Content-Type": "application/json" },
    data: {
      _id: user_id,
    },
  })
    .then((response) => {
      dispatch({
        type: types.GET_FEEDBACK,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const upVoteActionCreator = (itemId, user_id, votes) => (dispatch) => {
  console.log("in the upvoteactioncreator!!");
  axios
    .put("/api/feedback", {
      itemId,
      user_id,
      votes,
    })
    .then((response) => {
      console.log("upvoteaction axios response:", response);

      dispatch({
        type: types.UP_VOTE,
        payload: { votes: response.data.votes, _id: itemId },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeVoteActionCreator =
  (itemId, user_id, votes) => (dispatch) => {
    axios({
      method: "DELETE",
      url: "/api/feedback",
      headers: { "Content-Type": "application/json" },
      data: {
        itemId,
        user_id,
        votes,
      },
    }).then((response) => {
      dispatch({
        type: types.REMOVE_VOTE,
        payload: response.data.votes,
      });
    });
  };

export const addTagFilterActionCreator = () => ({
  type: types.ADD_TAG_FILTER,
});

export const getUserActionCreator = () => (dispatch) => {
  axios
    .get("/api/auth")
    .then((res) => {
      dispatch({
        type: types.GET_USER,
        payload: { username: res.data.username, user_id: res.data._id },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
