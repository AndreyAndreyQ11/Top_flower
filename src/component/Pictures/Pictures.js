import { Component } from "react"

import s from "./Pictures.module.css"

export default class Pictures extends Component {
    // static defaultProps = {
    //     flightPictures: {
    //         stick: !false,
    //         x: "",
    //         y: "",
    //     }
    // }

    state = {
        activeOption: "",
    }

    makeClassName = (index) => {
        const optionClass = [s.pictures];

        if (index === this.state.activeOption) {

            optionClass.push(s.flay)
        }

        return optionClass.join(" ");
    };


    target = (index) => {
        if (index !== this.state.activeOption) {
            this.setState({
                activeOption: index,
            })
        } else {
            this.setState({
                activeOption: "",
            })
        }
    }

    render() {
        const { flower, flightPictures, onReversStick, onMoveFlower } = this.props

        return (
            <>
                {flower.map(({ id, url }, index) =>
                    <div key={id}
                        style={{
                            backgroundImage: `url(${url})`,

                            top: flightPictures.y,
                            left: flightPictures.x,
                        }}
                        className={this.makeClassName(index)}
                        onClick={(el) => {
                            this.target(index);
                            onReversStick();
                        }}
                        onDoubleClick={() => onMoveFlower(id)}
                    ></div>
                )
                }
            </>
        )
    }
}