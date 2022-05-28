import React, { Component } from "react";
export default class AppContent extends Component {
  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
  }

  handlePostChange(posts) {
    this.props.handlePostChange(posts);
  }

  fetchlist = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.handlePostChange(json);
      });
  };
  clickedItem = (x) => {
    console.log("cicked", x);
  };
  render() {
    return (
      <>
        <br />
        <hr />
        <button onClick={this.fetchlist} class="btn btn-primary">
          Fetch Data
        </button>
        <hr />
        <p>post is {this.props.posts.length} length long</p>
        <ul>
          {this.props.posts.map((c) => (
            <li key={c.id}>
              <a href="#!" onClick={() => this.clickedItem(c.id)}>
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
