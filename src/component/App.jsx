import { Component } from "react";
import s from './App.module.css';

import initialFlower from "../flower.json"

import Top from "./Top/Top"
import StartFild from "./StartFild/StartFild"
import FildMouseMove from "./FildMouseMove/FildMouseMove"

import flyPictures from "./flyPictures.js"

export default class App extends Component {
  state = {
    good: [],
    normal: [],
    hard: [],
    pictures: initialFlower,
    fildMouseMove: [],
    stickPicture: false,
    flightPictures: {
      x: "",
      y: "",
    }
  }

  sticks = (el) => {

    this.setState(prevState => ({
      flightPictures: {
        // ...prevState.flightPictures,
        x: el.nativeEvent.layerX,
        y: el.nativeEvent.layerY,
        // x: el.nativeEvent.screenX,
        // y: el.nativeEvent.screenY,
        // x: el.screenX,
        // y: el.screenY,
      }
    }), () => {
      console.log(flyPictures(this.state.flightPictures));
    });

  };

  sticksUp = (el) => {
    this.setState({
      flightPictures: {
        x: el.nativeEvent.layerX,
        y: el.nativeEvent.layerY,
      }
    });
  };

  reversStick = () => {

    this.setState(prevState => ({
      stickPicture: !prevState.stickPicture,
    }));
  };

  moveFlower = (idFlower) => {

    console.log(idFlower);
    this.setState(prewState => ({
      good: prewState.good.concat(initialFlower.find(flower => flower.id === idFlower)),
      pictures: prewState.pictures.filter(flower => flower.id !== idFlower),
    }));
  };

  render() {
    const { good, normal, hard, pictures, flightPictures, stickPicture } = this.state

    return (
      <div className={s.container}
        onMouseUp={this.sticksUp}
      // onMouseMove={this.sticksUp}
      >

        <Top text="good" flower={good}
          flightPictures={flightPictures}
          onMoveFlower={this.moveFlower}
          onReversStick={this.reversStick}
          stickPicture={stickPicture}
        />
        <Top text="normal" flower={normal} />
        <Top text="hard" flower={hard} />
        <StartFild flower={pictures}
          flightPictures={flightPictures}
          onMoveFlower={this.moveFlower}
          onReversStick={this.reversStick}
          stickPicture={stickPicture}
        />

        <FildMouseMove
          stickPicture={this.state.stickPicture}
          onSticks={this.sticks}
          onReversStick={this.reversStick}
        />

      </div>
    );
  };
};