import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppFooter from "./AppFooter";
import AppContent from "./AppContent";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppHeader from "./AppHeader";
class App extends Component {
  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state = { posts: [] };
  }
  handlePostChange(posts) {
    this.setState({ posts: posts });
  }
  render() {
    const myProps = {
      title: "Shobhi's App",
    };
    return (
      <div className="app">
        <AppHeader
          {...myProps}
          posts={this.state.posts}
          handlePostChange={this.handlePostChange}
        />
        <AppContent
          handlePostChange={this.handlePostChange}
          posts={this.state.posts}
        />
        <AppFooter name={"by vijesh"} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
