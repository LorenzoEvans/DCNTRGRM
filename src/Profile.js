import React, { Component, useState } from 'react';
import { UserSession, Person } from 'blockstack';
import {appConfig, DCTRGRMS_FILENAME} from './utils/utils';
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
  loadPosts = () => {
    const options = {decrypt:true};
    this.props.userSession.getFile(DCTRGRMS_FILENAME, options)
                          .then((content) => {
                            if (content) {
                              const posts = JSON.parse(content);
                              this.setState({posts})
                            }
                          })
  }
  savePosts = (posts) => {
    const options = {encrypt: true}
    this.props.userSession.putFile(DCTRGRMS_FILENAME, JSON.stringify(tasks), options);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  removePost = (event) => {
    event.preventDefault();
    const posts =
  }
  componentDidMount() {
    this.loadPosts();
  }
}

export default Profile