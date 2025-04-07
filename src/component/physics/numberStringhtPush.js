export default function (containerClass, flightPictures, line) {
  const { x, y } = flightPictures;
  const container = document.querySelector("." + containerClass);
  //координаты и Габариты дочерних елементов
  if (!container) return null;
  const childrens = container.children; // Получаем все дочерние элементы
  const containerRect = container.getBoundingClientRect(); // Получаем координаты родителя

  const coordinates = Array.from(childrens).map((child, index, arr) => {
    const childRect = child.getBoundingClientRect(); // Координаты дочернего элемента
    const firstChild = child.children[0];

    const firstChildWidth = firstChild
      ? firstChild.getBoundingClientRect().width
      : 0;

    return {
      top: childRect.top - containerRect.top, // Вычисляем относительную координату top
      left: childRect.left - containerRect.left, // Вычисляем относительную координату left
      width: childRect.width, // Габариты ширины
      height: childRect.height, // Габариты высоты
      widthName: index < arr.length - 2 ? firstChildWidth : 0,
    };
  });
  let result = null;

  for (let i = 0; i < childrens.length - 1; i++) {
    const { top, left, width, height, widthName } = coordinates[i];

    if (top <= y && y <= top + height) {
      //считаем положение среди картинок 30х30 и margin: 3px и длина дивки с названием 64px ;
      let imageCoordinates;
      if (i !== childrens.length - 2) {
        imageCoordinates = line[i].map(
          (el, index) => 64 + (3 * 2 + 30) * (index + 1)
        );
        imageCoordinates.unshift(64);
      } else {
        imageCoordinates = line[i].map(
          (el, index) => (3 * 2 + 30) * (index + 1)
        );
      }
      const index = imageCoordinates.findIndex((num) => num > x - 30);
      const resultIndex = index === -1 ? line[i].length : index;

      result = [i, resultIndex];
      break;
    }
  }
  return result;
}