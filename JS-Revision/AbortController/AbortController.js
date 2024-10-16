const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error == "AbortError") {
      console.log("Fetching data request is aborted");
    } else {
      console.log("error found", error);
    }
  });

controller.abort();
