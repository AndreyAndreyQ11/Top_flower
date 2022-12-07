import { Component } from "react";
import s from "./StartFild.module.css"

import Pictures from "../Pictures/Pictures";

export default class StartFild extends Component {


    render() {
        const { flower, onMoveFlower, flightPictures, onReversStick, stickPicture } = this.props

        return (
            <div className={s.fild}>
                <Pictures flower={flower}
                    onMoveFlower={onMoveFlower}
                    flightPictures={flightPictures}
                    onReversStick={onReversStick}
                    stickPicture={stickPicture}
                />
            </div>
        )

    }
}