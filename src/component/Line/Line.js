import { Component } from "react";
import s from "./Line.module.css";
import Pictures from "../Pictures/Pictures";

export default class Line extends Component {
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
