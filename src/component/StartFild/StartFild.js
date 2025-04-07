import { Component } from "react";
import s from "./StartFild.module.css";
import Pictures from "../Pictures/Pictures";

export default class StartFild extends Component {
  render() {
    const { flower, stickPicture } = this.props;

    return (
      <div className={s.fild}>
        <Pictures flower={flower} stickPicture={stickPicture} />
      </div>
    );
  }
}
