import _ from "lodash";

import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };

  //   Instead of Returning Object manually dispatch for a sync action
  //   return {
  //     type: "FETCH_POSTS",
  //     payload: response
  //   };
};

export const fetchUser = id => {
  return async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

// MEMOIZED VERSION ON HOW TO NOT RUN SAME QUERY AGAIN.
// ISSUE WITH THIS WAS, IF AFTER COMPLETING THIS OPERATION AND FOR SOME REASON
// WE REQUIRE ONE OF THE USER TO BE FETCHED, IT WON'T WORK
// export const fetchUser = id => {
//   return dispatch => {
//     _fetchUser(id, dispatch);
//   };
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));

  // Not required to await because we don't care when the users are fetched
  // and there are no operations after fetching the user
  userIds.forEach(userId => {
    dispatch(fetchUser(userId));
  });

  // async-await do not work with foreach. Hence if ever want
  // to use async await, we can use map instead of foreach
};
