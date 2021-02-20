import React from "react";
import { AppContext } from "./Context";

class ClassContext extends React.Component {
  static contextType = AppContext;

  render() {
    // This is how to consume the context
    const { windowHeight, windowWidth } = this.context;
    return (
      <div>
        <p>Window width: {windowWidth}</p>
        <p>Window height: {windowHeight}</p>
        {this.context.name}
      </div>
    );
  }
}

export default ClassContext;
