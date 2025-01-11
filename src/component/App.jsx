import { Component } from "react";
import s from './App.module.css';

import debounce from "lodash/debounce";

import initialFlower from "../flower.json"

import Top from "./Top/Top"
import StartFild from "./StartFild/StartFild"
import Pictures from "./Pictures/Pictures";


//Всякая физика
import f1 from "./physics/f1.js"

// import FildMouseMove from "./FildMouseMove/FildMouseMove"
// import flyPictures from "./flyPictures.js"

export default class App extends Component {
  state = {
    top: [
      [],
      [],
      [],
      initialFlower, // стартовые
    ],
    arreyTopKeys: [
      "good",
      "normal",
      "hard",
    ],

    flyPicture: [], //та шо летает
    stickPicture: false,
    flightPictures: {
      x: "",
      y: "",
    },
    boundingRect: null,
  }

  sticksUp = (el) => {
    this.setState({
      flightPictures: {
        x: el.nativeEvent.layerX,
        y: el.nativeEvent.layerY,
      }
    });
  };

  // объект координат элемента при загрузке и обновлении экрана boundingRect = document.querySelector(`.${s.container}`).getBoundingClientRect();
  componentDidMount() {
    const boundingRect = document.querySelector(`.${s.container}`).getBoundingClientRect();
    this.setState({ boundingRect }); // Сохраняем размеры контейнера в state

    window.addEventListener('resize', this.updateBoundingRect); // Обновляем boundingRect при изменении окна
  }
  updateBoundingRect = () => {
    const boundingRect = document.querySelector(`.${s.container}`).getBoundingClientRect();
    this.setState({ boundingRect });
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBoundingRect); // Очищаем обработчик при размонтировании
  }

  // функция срабатывает раз в 10ед
  mouseMove = debounce((el) => {
    if (!this.state.boundingRect) return;

    const { boundingRect } = this.state;
    let x = 0, y = 0;

    // Если из телефона иначе из кампютера
    if (el.touches) {
      x = el.touches[0].clientX - boundingRect.left;
      y = el.touches[0].clientY - boundingRect.top;
    } else {
      // Если событие мыши, получаем координаты из el.clientX и el.clientY
      x = el.clientX - boundingRect.left;
      y = el.clientY - boundingRect.top;
    }

    this.setState({
      flightPictures: { x, y },
    });
    // console.log(`x: ${x}, y: ${y}`);
  }, 10);

  // stickPicture = (el) => {
  //   console.log(el);
  //   ///
  // };

  stickPicture = (pictures) => {
    const { top, flyPicture } = this.state

    const f2 = f1(top, pictures);
    this.setState({
      flyPicture: f2[0],
      top: f2[1],
    });

  };

  render() {
    const { top, arreyTopKeys, flyPicture, flightPictures } = this.state
    const { stickPicture } = this

    return (
      <div
        className={s.container}
        onMouseMove={this.mouseMove}
        onTouchMove={this.mouseMove}
      >
        {
          top.slice(0, arreyTopKeys.length).map((item, i) => {
            const key = arreyTopKeys[i];
            return (
              <Top
                key={key} // добавлен key для оптимизации рендера
                text={key}
                bancPictures={item}
                stickPicture={stickPicture}
              />);
          })
        }


        < StartFild flower={top[top.length - 1]}
          stickPicture={stickPicture}
        />

        <div>
          <Pictures
            flower={flyPicture}
            flyPicturyStart={flyPicture.length !== 0}
            flightPictures={flightPictures}
            stickPicture={stickPicture}
          // onMouseMove={(e) => e.stopPropagation()} // Останавливает всплытие события
          />
        </div>

      </div >
    );
  };
};

