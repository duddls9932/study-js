// 10 ~ 1까지 Array 객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0);
// datas.forEach((_, i, datas) => {
//     datas[i] = 10 - i;
// });
// datas.filter((data) => data % 2 === 0);
// console.log(datas);
// 1 ~ 100까지 Array객체에 담은 후 3의 배수만 추출 후 출력
// let datas = new Array(100).fill(0).map((_, i) => i + 1);
// datas = datas.filter((data) => data % 3 === 0);
// console.log(datas);
// 5개의 정수를 Array객체에 담은 후 최대값과 최소값 출력하기
let datas = [3, 20, 10, 40, 30];

let max = datas[0];
let min = datas[0];
for (let i = 0; i < datas.length; i++) {
    if (datas[i] > max) {
        max = datas[i];
    }
    if (datas[i] < min) {
        min = daatas[i];
    }
}
// 10 ~ 1까지 Array 객체에 담은 후 짝수만 출력
// const datas = new Array(10).fill(0).map((_, i) => 10 - i);
// console.log(datas.filter((data) => data % 2 === 0));

// 1 ~ 100까지 Array객체에 담은 후 3의 배수만 추출 후 출력
// const datas = new Array(100).fill(0).map((_, i) => i + 1);
// console.log(datas.filter((data) => data % 3 === 0));

// 5개의 정수를 Array객체에 담은 후 최대값과 최소값 출력하기
const datas1 = [3, 5, 6, 2, 1];
let max1 = datas[0];
let min1 = datas[0];

datas.slice(1).forEach((data) => {
    if (max < data) {
        max = data;
    }
    if (min > data) {
        min = data;
    }
});

console.log(max, min);

console.log(min);
