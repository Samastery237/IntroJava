const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
    console.log(`${key}: ${colors[key]}`);
}

const newColors = colors.toReversed();