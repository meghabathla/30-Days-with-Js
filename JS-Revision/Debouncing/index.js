let counter = 0;

const getData = () => {
  console.log("fetching data", counter++);
};

function doSomeMagic(fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const getFunc = doSomeMagic(getData, 300);
