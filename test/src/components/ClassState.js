import React, { Component } from "react";

class ClassState extends Component {
  // 현재 버전
  state = {
    teacher: "이효석",
  };
  render() {
    const { teacher } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ teacher: "tetz" })}>
          영어로!
        </button>
        <br />
        <span style={{ fontSize: "100px" }}>{teacher}</span>
      </div>
    );
  }
}

export default ClassState;
