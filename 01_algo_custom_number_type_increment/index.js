((arrayDigit) => {
    const number = parseInt(arrayDigit.join('')) + 1
    console.log(Array.from(number.toString()))
})([1,2,3])