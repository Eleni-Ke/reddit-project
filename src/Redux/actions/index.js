export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      let res = await fetch("https://www.reddit.com/r/popular.json");
      if (res.ok) {
        let fetchedPosts = await res.json();
        console.log(fetchedPosts);
        dispatch({
          type: GET_POSTS,
          payload: fetchedPosts,
        });
      } else {
        console.log("error fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
