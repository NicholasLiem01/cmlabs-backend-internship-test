for(let i = 1; i < 101; i++) {
    const isDivisibleByThree = i % 3 === 0
    const isDivisibleByFive = i % 5 === 0
    if (isDivisibleByThree && isDivisibleByFive) {
        console.log('FizzBuzz')
    } else if (isDivisibleByThree) {
        console.log('Fizz')
    } else if (isDivisibleByFive) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
