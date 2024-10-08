## Event delegation:

- It is a technique in JavaScript where a single event listener is added to a parent element to manage events for its current and future child elements. Instead of adding individual event listeners to each child element, event delegation leverages event bubbling to efficiently manage events on dynamically generated elements.

## How Event Delegation Works

- Event delegation works by taking advantage of event bubbling. When an event occurs on a child element, it "bubbles up" to its ancestors in the DOM tree. By attaching an event listener to a common ancestor, you can handle events for multiple child elements without adding listeners to each of them.

## Benefits of Event Delegation

- Performance Improvement: Attaching a single event listener to a parent instead of multiple listeners to many children reduces memory usage and improves performance.

- Dynamic Elements Handling: If child elements are dynamically added to or removed from the DOM, the parent event listener can still manage those events without modification.

- Simplified Code: Fewer event listeners result in cleaner, more maintainable code.
