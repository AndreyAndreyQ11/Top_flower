import { Component } from "react";
import s from "./Top.module.css"

export default class Top extends Component {
    render() {
        return (
            <div className={s.text} >
                <div >{this.props.text}</div>
            </div>
        )
    }

}