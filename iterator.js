// 배열과 이터레이터 차이
// https://www.youtube.com/watch?v=FxBMhEy0aSk
const array = [1, 2, 3, 4, 5, 6, 7];

const iterator = (function () {
  let num = 1;

  return {
    next: function () {
      return num > 7 ? { done: true } : { done: false, value: num++ };
    },
  };
})();

console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().done);
console.log(iterator.next().done);
