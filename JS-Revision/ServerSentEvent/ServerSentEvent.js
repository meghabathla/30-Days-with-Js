const eventSource = new EventSource();

eventSource.addEventListener("open", () => {
  console.log("conection has been created");
});

eventSource.addEventListener("message", (e) => {
  console.log("Message has been recieved", e.data);
});
eventSource.addEventListener("error", () => {
  console.error("Failed to connect", error);
});
