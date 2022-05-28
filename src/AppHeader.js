import React, { Component } from "react";

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
  }

  handlePostChange(posts) {
    this.props.handlePostChange(posts);
  }
  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>There are {this.props.posts.length} entries in posts</p>
      </>
    );
  }
}
