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
          x: el.nativeEvent.layerX,
          y: el.nativeEvent.layerY,
          // x: el.nativeEvent.screenX,
          // y: el.nativeEvent.screenY,


          // x: el.clientX - 100,
          // y: el.clientY - 100
        }
      }));
    };
    console.log(el.nativeEvent);
  };


  // test_Foo = function (ev) {
  //   // ev.preventDefault()
  //   // ev.stopPropagation();
  //   // ev.nativeEvent.stopImmediatePropagation();
  //   console.log(ev);

  //   // console.dir(ev.currentTarget);
  //   console.log(ev.nativeEvent.layerX);
  //   // console.log(ev.clientX - ev.currentTarget.offsetLeft);
  // }

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
        onMouseMove={this.sticks}
      // onClick={this.test_Foo}
      >

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