import { Component } from "react";
import s from "./Top.module.css";
import Pictures from "../Pictures/Pictures";

export default class Top extends Component {
  render() {
    const { text, bancPictures, stickPicture } = this.props;

    return (
      <div className={s.container}>
        <div className={s.text}>{text}</div>
        <div className={s.fild}>
          <Pictures flower={bancPictures} stickPicture={stickPicture} />
        </div>
      </div>
    );
  }
}
