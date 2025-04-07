import numberStringhtPush from "./numberStringhtPush.js";

export default function (
  line,
  flyPicture,
  containerClass,
  flightPictures,
  saveLine
) {
  const newLine = [...line];

  const q1 = numberStringhtPush(containerClass, flightPictures, line);
  // Вставляем flyPicture в нужную позицию одмассива
  if (q1 === null) {
    return saveLine;
  } else {
    newLine[q1[0]].splice(q1[1], 0, flyPicture);
    return newLine;
  }
}
