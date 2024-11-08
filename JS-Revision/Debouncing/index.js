let counter = 0;

const getData = () => {
  console.log("fetching data", counter++);
};

const debouncing = function (func, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
const betterFunc = debouncing(getData, 300);
