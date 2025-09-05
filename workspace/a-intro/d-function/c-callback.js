// JS에서 false로 취급되는 값
// 0, "", null, undefined

// 두 정수의 덧셈, 결과 출력
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//         return;
//     }
//     return number1 + number2;
// };

// let result = add(1, 3, (result) => {
//     console.log(result);
// });
// console.log(result);

// 두 정수의 곱셈, 결과에 2를 곱해서 출력
// const multiply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//         return;
//     }
//     return number1 * number2;
// };

// const print = (result) => {
//     console.log(result * 2);
// };

// let result = multiply(3, 5);
// console.log(result);

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// const makeFullName = (firstName, lastName, callback) => {
//     let fullName = lastName + firstName;
//     if (callback) {
//         callback(fullName);
//     }
//     return fullName;
// };

// const printFullName = (fullName) => {
//     console.log(`${fullName}님`);
// };

// makeFullName("동석", "한", printFullName);

// 상품 1개 가격과 총 가격을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const getCount = (price, total, callback) => {
//     let count = total / price;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const checkLessEqualsThan5 = (count) => {
//     return count <= 5;
// };

// let condition = getCount(2000, 10000, checkLessEqualsThan5);
// console.log(condition);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총 마리 수를 각각 비교해 가축 중 수가 적은 쪽의 동물 이름을 리턴
// 두 수는 절대 같지 않다.
// const compareCowWithPig = (cowCount, pigCount, callback) => {
//     let result = cowCount > pigCount;
//     if (callback) {
//         return callback(result);
//     }

//     return result;
// };

// let message = compareCowWithPig(100, 40, (result) => (result ? "소" : "돼지"));

// console.log(message);

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 정확히 60점일 경우 합격, 아니면 불합격
// const getAverage = (korean, english, math, callback) => {
//     let total = korean + english + math;
//     let average = total / 3;

//     if (callback) {
//         return callback(average);
//     }

//     return average;
// };

// const checkScore = (average) => (average === 60 ? "합격" : "불합격");

// let message = getAverage(30, 0, 100, checkScore);

// console.log(message);

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력
// const getTotal = (end, callback) => {
//     let total = 0;

//     for (let i = 0; i < end; i++) {
//         total += i + 1;
//     }

//     if (callback) {
//         return callback(total);
//     }

//     return total;
// };

// let result = getTotal(100, (total) => total - (total >= 5000 && 5000));

// console.log(result);

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false
// const checkEven = (start, end, callback) => {
//     let target = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % 2 == 0) {
//             target = i;
//             break;
//         }
//     }

//     if (callback) {
//         return callback(target);
//     }

//     return target;
// };

// let condition = checkEven(6, 9, (target) => target >= 10);
// console.log(condition);

// 조영인 작품
// const checkEven = (start, callback) => {
//     let target = start + (start % 2 !== 0 && 1);
//     if (callback) {
//         return callback(target);
//     }

//     return target;
// };

// let result = checkEven(9, (target) => target >= 10);
// console.log(result);

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false

const calculate = (firstNum, secondNum, callback) => {
    minusResult = 0;
    multiplyResult = 0;
    minusResult = firstNum - secondNum;
    multiplyResult = firstNum * secondNum;
    if (callback) {
        return callback(minusResult, multiplyResult);
    }
};

let result = calculate(30, 28, (minusResult, multiplyResult) => {
    return minusResult > 4 && multiplyResult > 49;
});

console.log(result);

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false
const subtract = (number1, number2, callback) => {
    if (callback) {
        return callback(number1 - number2);
    }
};

const multiply = (number1, number2, callback) => {
    if (callback) {
        return callback(number1 * number2);
    }
};

const subtractCheck = (result) => result >= 5;
const multiplyCheck = (result) => result >= 50;

const check = (number1, number2, callback1, callback2) => {
    if (callback1 && callback2) {
        return (
            callback1(number1, number2, subtractCheck) &&
            callback2(number1, number2, multiplyCheck)
        );
    }
};

let condition = check(10, 6, subtract, multiply);

console.log(condition);

// n ~ m 범위에서 첫 번째로 홀수를 찾고,
// 그 값이 5 이상이면 true, 아니면 false를 반환하도록 callback을 사용하세요.

// const findOdd = (firstNum, secondNum, callback) => {
//     let target = 0;
//     for (let i = firstNum; i <= secondNum; i++) {
//         if (i % 2 == 1) {
//             target = i;
//             break;
//         }
//     }
//     if (callback) {
//         return callback(target);
//     }
// };
// let message = findOdd(6, 232, (target) => target > 4);
// console.log(message);

// n ~ m 범위에서 3의 배수를 찾아,
// 해당 수에 2를 곱한 값을 반환하도록 callback을 작성하세요.

// const findMultipleOf3 = (start, end, callback) => {
//     let target = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % 3 == 0) {
//             target = i;
//             break;
//         }
//     }
//     if (callback) {
//         return callback(target);
//     }
// };
// let result = findMultipleOf3(5, 26, (target) => target * 2);

// console.log(result);
// n ~ m 범위에서 짝수를 모두 배열로 모은 뒤,
// callback을 통해 그 배열의 길이를 반환하세요.
// const findEven = (first, end, callback) => {
//     let count = 0;
//     let even = [];
//     for (let i = first; i <= end; i++) {
//         if (i % 2 == 0) {
//             even.push(i);
//         }
//     }
//     if (callback) {
//         return callback(even);
//     }
// };
// let result = findEven(23, 30, (even) => even.length);
// console.log(result);

// n ~ m 범위의 수 중에서 첫 번째로 7의 배수가 나오면,
// callback에서 해당 수를 문자열로 변환하여 반환하세요.
// const findMultipleOf7 = (start, end, callback) => {
//     let target = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % 7 == 0) {
//             target = i;
//             break;
//         }
//     }
//     if (callback) {
//         return callback(target);
//     }
// };
// let result = findMultipleOf7(30, 73, (target) => String(target));
// console.log(result);

// n ~ m 범위에서 중 가장 큰 값을 찾아,
// callback을 통해 그 값에 3을곱해서 짝수면 "Even", 아니면 "Odd"를 출력하게 하세요.

// const findBigNum = (n, m, callback) => {
//     let target = 0;
//     // for (let i = start; i <= end; i++) {

//     // }
//     if (n > m) {
//         target = n;
//     } else {
//         target = m;
//     }
//     if (callback) {
//         return callback(target);
//     }
// };

// let result = findBigNum(30, 24, (target) => {
//     return target % 2 == 0 ? "Even" : "Odd";
// });

// console.log(result);

// 인사 후 추가 작업
// 사용자가 이름을 입력하면 인사를 하고, 인사 끝난 뒤에 "안녕!" 이라는 메시지를 따로 출력하는 작업을 실행하는 기능.

// 리스트 아이템 변환
// 숫자 리스트를 받아서 각 숫자를 제곱한 새 리스트를 만들고, 그 결과를 다른 함수로 넘겨서 출력하거나 저장하는 상황.
