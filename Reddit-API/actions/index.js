import fetch from 'isomorphic-fetch'

/*
 * action types - can be separated in other file
 */

export const REQUEST_POSTS = 'REQUEST_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

/*
 * Synchronous actions for the app
 */

 //Select the subreddit to be displayed
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

//Detect if the subreddit is invalid. Used with a refresh button
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

//When it´s time reequest a subreddit
export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

//When the network request comes through
export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

//Fetch the post with the API url
export function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch('http://www.reddit.com/r/${subreddit}.json')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

//Determine if post should be fetched
export function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

//Avoiding a network request if a cached value is already available
export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}
