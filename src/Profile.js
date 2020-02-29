import React, { Component, useState } from 'react';
import { UserSession, Person } from 'blockstack';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

    loadPosts = () => {
      const options = {decrypt:true};
      this.props.userSession
    }

    componentDidMount() {
      this.loadPosts();
    }
    // refactor hooks back in later
    // what all state is a profile going to have?
    // posts
    // comments
    // const [posts, setPosts] = useState({post: '', caption: '',})
    // const [comments, setComments] = useState({author: '', content: ''})
  }
}

export default Profile