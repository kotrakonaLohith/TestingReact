import React, { Component } from "react";

export class CommentBox extends Component {
  state = {
    comment: "",
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    this.setState({ comment: "" });
  };
  render() {
    return (
      <form onsubmit={this.handlesubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Button</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
