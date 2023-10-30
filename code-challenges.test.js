// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
// describe("fibonacciFunc", () => {
//   it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence.", () => {
//     expect(fibonacciFunc(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibonacciFunc(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
const fibonacciFunc = (number) => {
  // first two numbers of the array that will begin the fibonacci sequence
  const fibonacciSeq = [1, 1]
  // Starting a for loop at index 2 iterating up to the parameter "number" that will be the length of the array
  for (let i = 2; i < number; i++) {
    // start the fibonacci sequence by adding the last two numbers in the array
    const nextValue = fibonacciSeq[i - 1] + fibonacciSeq[i - 2]
    // push the calculated number to the end of the array
    fibonacciSeq.push(nextValue)
  }

  return fibonacciSeq;
}
// Pseudo code:

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("objectValueSorted", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest.", () => {
    expect(objectValueSorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objectValueSorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
const objectValueSorted = (obj) => {
  // get an array of the values from the objects
  const valuesArray = Object.values(obj) 
  // create a copy using .slice() and sort it in ascending order
  const valuesSorted = valuesArray.slice().sort((value1, value2) => {
    // compare value 1 & value 2
    if(value1 < value2){
      return -1
    } else if(value1 > value2){
      return 1
    } else {
      return 0
    }
  })
  return valuesSorted
}
// Pseudo code:
