import { Component } from "react";
import s from './App.module.css';

import initialFlower from "./flower.json"

import Line from "./Line/Line.js"
import StartFild from "./StartFild/StartFild.js"
import Pictures from "./Pictures/Pictures.js";

//Всякая физика
import extractPicture from "./physics/extractPicture.js"
import pushPictures from "./physics/pushPictures.js"

export default class App extends Component {
  state = {
    line: [
      [],
      [],
      [],
      initialFlower, // стартовые
    ],
    arreyLineKeys: [
      "good",
      "normal",
      "hard",
    ],
    flyPicture: [], //та шо летает
    flightPictures: {
      x: "",
      y: "",

    },
    boundingRect: null,
    down: false,
    saveLine: []
  }

  // объект координат элемента при загрузке и обновлении экрана boundingRect = document.querySelector(`.${s.container}`).getBoundingClientRect();
  componentDidMount() {
    const boundingRect = document.querySelector(`.${s.container}`).getBoundingClientRect();
    this.setState({ boundingRect }); // Сохраняем размеры контейнера в state
    window.addEventListener('resize', this.updateBoundingRect); // Обновляем boundingRect при изменении окна

    //глобальные слушатели события mouseup и touchend
    window.addEventListener('mouseup', this.mouseUp);
    window.addEventListener('touchend', this.mouseUp);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBoundingRect); // Очищаем обработчик при размонтировании

    // Удаляем глобальные слушатели
    window.removeEventListener('mouseup', this.mouseUp);
    window.removeEventListener('touchend', this.mouseUp);
  }
  updateBoundingRect = () => {
    const boundingRect = document.querySelector(`.${s.container}`).getBoundingClientRect();
    this.setState({ boundingRect });
  };

  // функция при нажатии
  stickPicture = (pictures) => {
    const { line, } = this.state
    //сохраняем предыдущее расположение картинок
    const saveLineTrue = JSON.parse(JSON.stringify(line));

    //переносим выбраную картинку в отдельный массив
    const newFlyPicture = extractPicture(line, pictures);

    // тут баг в том что при вызове this.setState  onTouchMove- перестает вызываться
    this.setState({
      flyPicture: newFlyPicture[0],
      line: newFlyPicture[1],
      down: true,
      saveLine: saveLineTrue
    });
  };
  //
  mouseUp = () => {

    if (!this.state.down) return
    this.setState({
      line: pushPictures(this.state.line, this.state.flyPicture[0], s.container, this.state.flightPictures, this.state.saveLine),
      flyPicture: [],
      down: false,
    });
  }

  mouseMove = (el) => {
    const { boundingRect, down } = this.state;

    if (!boundingRect) return;

    let x = 0, y = 0;
    // Если из телефона 
    if (el.touches) {
      x = el.touches[0].clientX - boundingRect.left;
      y = el.touches[0].clientY - boundingRect.top;
    } else {
      // Если событие мыши, получаем координаты из компютера
      x = el.clientX - boundingRect.left;
      y = el.clientY - boundingRect.top;
    }

    this.setState({
      flightPictures: { x, y },
    });
  };

  render() {
    const { line, arreyLineKeys, flyPicture, flightPictures } = this.state
    const { stickPicture, } = this

    return (

      <div
        className={s.container}
        onMouseMove={this.mouseMove}
        onTouchMove={this.mouseMove}
        onMouseUp={this.mouseUp}
        onTouchEnd={this.mouseUp}
      >
        {
          line.slice(0, arreyLineKeys.length).map((item, i) => {
            const key = arreyLineKeys[i];
            return (
              <Line
                key={key} // добавлен key для оптимизации рендера
                text={key}
                bancPictures={item}
                stickPicture={stickPicture}
              />);
          })
        }


        < StartFild flower={line[line.length - 1]}
          stickPicture={stickPicture}
        />
        <div>
          <Pictures
            flower={flyPicture}
            flyPicturyStart={flyPicture.length !== 0}
            flightPictures={flightPictures}
            stickPicture={stickPicture}
          // onMouseMove={(e) => e.slinePropagation()} // Останавливает всплытие события
          />
        </div>

      </div >
    );
  };
};
