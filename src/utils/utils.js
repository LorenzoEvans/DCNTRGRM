import { AppConfig } from 'blockstack';

export const appConfig = new AppConfig(['store_write', 'publish_data']);

export const DCTRGRMS_FILENAME = 'dcntrgrms.json';

export const EXPLORER_URL = 'https://explorer.blockstack.org';

export const copyJSON = (object) => {
  return JSON.parse(JSON.stringify(object));
}

export const removePost = (idx, state) => {

  const posts = copyJSON(state.posts);
  
  const removedPosts = posts.splice(idx, 1);

  posts = removePost;

  return posts;
}

export const addPost = (state) => {
  const post = state.value;
  const posts = copyJSON(state.posts);
  posts.push(post);
}