`AbortController` is used to cancel ongoing asynchronous operations like fetch requests.

```tsx
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
  .then((response) => {
    // Handle response
  })
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request aborted");
    } else {
      console.error("Error:", error);
    }
  });

// Call abort() to abort the request
controller.abort();
```

Aborting web requests is useful for:

- Canceling requests based on user actions.
- Prioritizing the latest requests in scenarios with multiple simultaneous requests.
- Canceling requests that are no longer needed, e.g. after the user has navigated away from the page.
