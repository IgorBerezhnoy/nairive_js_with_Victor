// const students = [
//     {
//         name: 'Bob',
//         age: 22,
//         isMarried: true,
//         scores: 95
//     },
//     {
//         name: 'Alex',
//         age: 22,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: 'Helge',
//         age: 24,
//         isMarried: true,
//         scores: 90
//     },
//     {
//         name: 'Nick',
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: 'John',
//         age: 19,
//         isMarried: false,
//         scores: 121
//     },
//     {
//         name: 'alex',
//         age: 22,
//         isMarried: true,
//         scores: 89
//     },
// ];
// console.log(students.sort((a, b) => a.scores - b.scores));
// console.log(students.sort((a, b) => a.name.localeCompare(b.scores)));
//
//
// const numbers = [1, 2, 2222, 4, 5, -1, -3, -9];
// for (let j = 0; j < numbers.length - 1; j++) {
//     let isSorted = true;
//     for (let i = 0; i < numbers.length - 1 - j; i++) {
//         if (numbers[i] > numbers[i + 1]) {
//             isSorted = false;
//             //меняем местами
//             // let temp = numbers[i];
//             // numbers[i] = numbers[i + 1];
//             // numbers[i + 1] = temp;
//             [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]];
//         }
//     }
//     if (isSorted) break;
// }
// console.log(numbers);
// console.log(numbers);