import { AppConfig } from 'blockstack';

export const appConfig = new AppConfig(['store_write', 'publish_data']);

export const DCTRGRMS_FILENAME = 'dcntrgrms.json';

export const EXPLORER_URL = 'https://explorer.blockstack.org';

export const copyJSON = (object) => {
  return JSON.parse(JSON.stringify(object));
}

export const removePost = (idx, state) => {

  const posts = copyJSON(state.posts);
  
  const removedPosts = tasks.splice(idx, 1);

  posts = removePost;
  
  return posts
}