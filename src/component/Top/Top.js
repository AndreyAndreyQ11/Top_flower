import { Component } from "react";
import s from "./Top.module.css"
import Pictures from "../Pictures/Pictures";



export default class Top extends Component {

    aa = (el) => {
        console.log(el.target.offsetHeight);
    }
    // el.target.offsetHeight
    render() {
        const { flower, onMoveFlower, flightPictures, onReversStick } = this.props

        return (
            <div className={s.container} onClick={this.aa}  >
                <div className={s.text}>{this.props.text}</div>
                <div className={s.fild} >
                    <Pictures flower={flower}
                        onMoveFlower={onMoveFlower}
                        flightPictures={flightPictures}
                        onReversStick={onReversStick}
                    />
                </div>
            </div >
        )
    }
}