import { Component } from "react";
import s from "./FildMouseMove.module.css";

export default class FildMouseMove extends Component {
  optionClass = () => {
    const optionClass = [s.mouseMove];
    if (!this.props.stickPicture) {
      optionClass.push(s._displey_none);
    }
    return optionClass.join(" ");
  };

  render() {
    return (
      <div
        className={this.optionClass()}
        onMouseMove={this.props.onSticks}
        onClick={() => this.props.onReversStick()}
      ></div>
    );
  }
}