import React, { Component, useState } from 'react';
import { UserSession, Person } from 'blockstack';
import {appConfig, DCTRGRMS_FILENAME, removePost, addPost, copyJSON} from './utils/utils';
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      value: ""
    }

    // refactor hooks back in later
    // what all state is a profile going to have?
    // posts
    // comments
    // const [posts, setPosts] = useState({post: '', caption: '',})
    // const [comments, setComments] = useState({author: '', content: ''})
  }

  loadPostsHandler = () => {

    const options = {decrypt:true};
    this.props.userSession.getFile(DCTRGRMS_FILENAME, options)
                          .then((content) => {
                            if (content) {
                              const posts = JSON.parse(content);
                              this.setState({posts});
                            }
                          });
  }

  savePostsHandler = (posts) => {

    const options = {encrypt: true}
    this.props.userSession.putFile(DCTRGRMS_FILENAME, JSON.stringify(posts), options);

  }

  handleChange = (event) => {

    this.setState({value: event.target.value});
  }

  removePostHandler = (event) => {

    event.preventDefault();
    const posts = removePostHandler(event.currentTarget.dataset.index, this.state);
    this.setState({ posts });
    this.savePostsHandler(posts)

  }

  addPostHandler = (event) => {
    event.preventDefault();
    
    const posts = addPost(this.state);

    this.setState({value: ''});
    this.savePostsHandler(posts);
  }
  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const username = this.props.userSession.loadUserData().username;
    const profile = this.props.userSession.loadUserData();

    const person = new Person(profile);

    return(
      <div>
        
      </div>
    )
  }
}

export default Profile