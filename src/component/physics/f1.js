// export default function ({ x, y }) {
//     // console.log(x, y);
//     if (y > startFild.offsetTop && y < startFild.offsetTop + startFild.offsetHeight
//         && x > startFild.offsetLeft && x < startFild.offsetLeft + startFild.offsetWidth
//     ) { return "startFild" }

//     if (y > Hard.offsetTop && y < Hard.offsetTop + Hard.offsetHeight
//         && x > Hard.offsetLeft && x < Hard.offsetLeft + Hard.offsetWidth
//     ) { return "Hard" }

//     if (y > Normal.offsetTop && y < Normal.offsetTop + Normal.offsetHeight
//         && x > Normal.offsetLeft && x < Normal.offsetLeft + Normal.offsetWidth
//     ) { return "Normal" }

//     if (y > Good.offsetTop && y < Good.offsetTop + Good.offsetHeight
//         && x > Good.offsetLeft && x < Good.offsetLeft + Good.offsetWidth
//     ) { return "Good" }

//     return "container"
// }
export default function (top, pictures) {
  let newFlyPicture = null; // будующий flyPicture
  const newTop = [...top]; // Почемуто быстрее работает если копирывать массив

  for (let i = 0; i < newTop.length; i++) {
    for (let j = 0; j < newTop[i].length; j++) {
      if (newTop[i][j].id === pictures.id) {
        // Нашли элемент
        newFlyPicture = [newTop[i][j]]; // Сохраняем найденный элемент

        newTop[i].splice(j, 1); // Удаляем элемент из подмассива
        return [newFlyPicture, newTop];
      }
    }
  }
}
