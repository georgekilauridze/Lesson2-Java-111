//lesson2 ex 1 ///

// function sum(...numbers) {
//        let newSum = 0;
//        for(let item of numbers) {
//            if (item > 0) {
//                newSum = newSum + item;
//            }
//        }
//        console.log(newSum);
// }


// sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6,8);

// function sum(...numbers) {
//     let newSum = 0;
//     for(let item of numbers) {
//         if (item > 0) {
//             newSum = newSum + item;
//         }
//     }
//    return newSum;
// }


// let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6,8);
// console.log(result);


//  Exercise 2 ///

// function sum(...args) {
//     let numberSum = 0;
//     for (let item of args) {
//         numberSum = numberSum + item

//     }

//     console.log(numberSum);
// }
// sum(10, 50, 6, 7, 8, 11, 6, 3, 9);


//lesson2 ex 3 ///

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
// }

// function printName(obj) {
//     if(obj.isloggedin) {
//         return obj.firstname + ' ' + obj.lastname;
//     }
//     return false;
// }

// let resultPrintName = printName(user);
// console.log(resultPrintName);


//lesson2 ex 4 ///

// function getMax (numbers) {
//     let maxValue = 0;
//     for (let index = 0; index < numbers.length; index ++) {
//         const x = numbers[index];
//         if (x > maxValue) {
//             maxValue = x;
//         }
//     }
//     return maxValue;
// }

// console.log(getMax([3, 17, 19, 36, 160, 8 ]));