import { Component } from "react";
import s from "./Pictures.module.css"

export default class Pictures extends Component {
    state = {
        activeOption: 1,
    }


    makeOptionClass = (index) => {
        const optionClass = [];

        if (index === this.state.activeOption) {
            optionClass.push(s.flay)
        }

        return optionClass.join(" ");
    };

    foo = (index) => {
        this.setState({ activeOption: index, })
    }

    render() {

        return (
            <div className={s.fild}>
                {this.props.flower.map((flower, index) =>
                    <div key={flower.id}
                        style={{ backgroundImage: `url(${flower.url})` }}
                        className={this.makeOptionClass(index)}
                        onClick={() => this.foo(index)}
                    ></div>
                )}
            </div>
        )

    }
}