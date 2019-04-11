import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
    // BAD APPROACH - USE MIDDLEWARE
  const response = await jsonPlaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
