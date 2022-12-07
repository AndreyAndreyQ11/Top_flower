const Good = {
    offsetHeight: 44,
    offsetWidth: 441,
    offsetLeft: 67,
    offsetTop: 4,
}

const Normal = {
    offsetHeight: 44,
    offsetWidth: 441,
    offsetLeft: 67,
    offsetTop: 52,
}

const Hard = {
    offsetHeight: 44,
    offsetWidth: 441,
    offsetLeft: 67,
    offsetTop: 100,
}

const startFild = {
    offsetHeight: 210,
    offsetWidth: 506,
    offsetLeft: 2,
    offsetTop: 146,
}

const container = {
    clientHeight: 358,
    clientWidth: 510
}

export default function ({ x, y }) {
    // console.log(x, y);
    if (y > startFild.offsetTop && y < startFild.offsetTop + startFild.offsetHeight
        && x > startFild.offsetLeft && x < startFild.offsetLeft + startFild.offsetWidth
    ) { return "startFild" }

    if (y > Hard.offsetTop && y < Hard.offsetTop + Hard.offsetHeight
        && x > Hard.offsetLeft && x < Hard.offsetLeft + Hard.offsetWidth
    ) { return "Hard" }

    if (y > Normal.offsetTop && y < Normal.offsetTop + Normal.offsetHeight
        && x > Normal.offsetLeft && x < Normal.offsetLeft + Normal.offsetWidth
    ) { return "Normal" }

    if (y > Good.offsetTop && y < Good.offsetTop + Good.offsetHeight
        && x > Good.offsetLeft && x < Good.offsetLeft + Good.offsetWidth
    ) { return "Good" }

    return "container"
}