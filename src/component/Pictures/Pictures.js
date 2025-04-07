import { Component } from "react";
import s from "./Pictures.module.css";

export default class Pictures extends Component {
  static defaultProps = {
    flyPicturyStart: false,
    flightPictures: {
      x: 0,
      y: 0,
    },
  };

  render() {
    const { flower, flyPicturyStart, flightPictures, stickPicture } =
      this.props;
    return (
      <>
        {flower.map(({ id, url }, index) => (
          <div
            key={id}
            style={{
              backgroundImage: `url(${url})`,
              top: flightPictures.y + "px",
              left: flightPictures.x + "px",
            }}
            className={flyPicturyStart ? `${s.pictures} ${s.flay}` : s.pictures}
            onMouseDown={() => stickPicture({ id, url })}
            onTouchStart={() => stickPicture({ id, url })}
          ></div>
        ))}
      </>
    );
  }
}
