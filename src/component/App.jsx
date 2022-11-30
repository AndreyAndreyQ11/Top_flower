import { Component } from "react";
import s from './App.module.css';

import flower from "../flower.json"

import Top from "./Top/Top"
import Pictures from "./Pictures/Pictures"


export default class App extends Component {


  render() {
    return (
      <div className={s.container}>
        <Top text="good" />
        <Top text="normal" />
        <Top text="hard" />
        <Pictures
          flower={flower}
        />
      </div>

    );
  }
}

