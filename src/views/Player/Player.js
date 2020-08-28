import React    from "react";
import template from "./Player.jsx";

class Player extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Player;
