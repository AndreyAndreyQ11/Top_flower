import { Component } from "react";
import s from './App.module.css';

import initialFlower from "../flower.json"

import Top from "./Top/Top"
import StartFild from "./StartFild/StartFild"


export default class App extends Component {
  state = {
    good: [],
    normal: [],
    hard: [],
    pictures: initialFlower,
    flightPictures: {
      stick: !false,
      x: "",
      y: "",
    }
  }

  sticks = (el) => {
    if (this.state.flightPictures.stick === true) {
      this.setState(prevState => ({
        flightPictures: {
          ...prevState.flightPictures,
          x: el.clientX,
          y: el.clientY,
        }
      }));
    };
  };

  reversStick = () => {

    // this.setState(prevState => ({

    //   flightPictures: {
    //     ...prevState.flightPictures,
    //     stick: !prevState.flightPictures.stick,
    //     x: prevState.flightPictures.x ? "" : this.state.flightPictures.x,
    //     y: prevState.flightPictures.y ? "" : this.state.flightPictures.y,
    //   }
    // }));
  };

  moveFlower = (idFlower) => {

    console.log(idFlower);
    this.setState(prewState => ({
      good: prewState.good.concat(initialFlower.find(flower => flower.id === idFlower)),
      pictures: prewState.pictures.filter(flower => flower.id !== idFlower),
    }));
  };

  render() {
    const { good, normal, hard, pictures, flightPictures } = this.state

    return (
      <div className={s.container}
        onMouseMove={this.sticks}>

        <Top text="good" flower={good}
          flightPictures={flightPictures}
          onMoveFlower={this.moveFlower}
          onReversStick={this.reversStick}
        />
        <Top text="normal" flower={normal} />
        <Top text="hard" flower={hard} />
        <StartFild flower={pictures}
          flightPictures={flightPictures}
          onMoveFlower={this.moveFlower}
          onReversStick={this.reversStick}
        />
      </div>

    );
  }
}