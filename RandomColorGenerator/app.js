const getColor = () => {
    // Hex Code
    // To get hexa decimal codes multiply with 1677215
    const randomNumber = Math.floor(Math.random() * 1677215)

    // To get hex code pass hexa decimal parameter to toString method
    const randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;

    document.getElementById('color-code').innerText = randomCode;

    navigator.clipboard.writeText(randomCode);

    console.log(randomNumber, randomCode);

}

// Event call
document.getElementById('btn').addEventListener(
    "click",
    getColor
)


// Inital Call
getColor();