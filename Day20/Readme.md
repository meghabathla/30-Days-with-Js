## Local Storage

- Definition: Local storage is a type of web storage that allows you to store data persistently in the browser. The data stored in local storage has no expiration time.
- Persistence: Data in local storage persists even after the browser is closed and reopened.
- Capacity: Typically, local storage allows you to store up to 5MB of data (this limit can vary by browser).
- Scope: Data is accessible only within the same origin (protocol, host, and port).
- Use Case: Ideal for storing data that needs to be available across multiple sessions, such as user preferences or settings.

## Session Storage

- Definition: Session storage is similar to local storage but with a key difference in the persistence of the data. It stores data for the duration of the page session.
- Persistence: Data in session storage is cleared when the page session ends. A page session lasts as long as the browser is open, and survives over page reloads and restores. However, opening a page in a new tab or window will cause a new session to be initiated.
- Capacity: Like local storage, session storage typically allows up to 5MB of data.
- Scope: Data is accessible only within the same origin and for the duration of the page session.
- Use Case: Ideal for storing data that only needs to be available for a single browsing session, such as temporary form data.

### How to retrieve and display data whenever page loads

- Add the function in body tag. This way you'll get the data whenever page loads

```js
<body onload="retrieveFromLocalStorage()">
```
