import { Component } from "react";
import s from "./Top.module.css"
import Pictures from "../Pictures/Pictures";



export default class Top extends Component {



    render() {
        const { flower, onMoveFlower, flightPictures, onReversStick, stickPicture } = this.props

        return (
            <div className={s.container}  >
                <div className={s.text}>{this.props.text}</div>
                <div className={s.fild} >
                    <Pictures flower={flower}
                        onMoveFlower={onMoveFlower}
                        flightPictures={flightPictures}
                        onReversStick={onReversStick}
                        stickPicture={stickPicture}
                    />
                </div>
            </div >
        )
    }
}