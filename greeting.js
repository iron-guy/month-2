const name = prompt("Как вас зовут?")
console.log("Hello " + name)

const arr = [1,2,]
const arrTwo = ["34567", 4,"Dastan",]
if (arr.length < arrTwo.length){
    console.log("Второй")
}else if (arr.length > arrTwo.length){
    console.log("Первый")
}else {
    console.log("равны")
}
const color = "yellow";

switch (color) {
    case "green":
        console.log("зеленый");
        break;
    case "red":
        console.log("красный");
        break;
    case "yellow":
        console.log("желтый");
        break;
    default:
        console.log("Default");
}