# When to Use Bubbling or Capturing

- Bubbling: Useful when you want to add a handler to a parent element to listen for events from multiple child elements, such as form submissions or clicks on a list.

- Capturing: Typically used for specific scenarios where you need to catch the event before it reaches the target element.

## Event Bubbling and Capturing Overview:

- Event Bubbling: The event starts from the target element and propagates up through its ancestors until it reaches the root (document).
- Event Capturing (or Trickling): The event starts from the root and propagates down to the target element.

By default, all event handlers are registered in the bubbling phase (from the target element to all its ancestor elements). This default configuration can be modified by adding the event. stopPropagation method to the target element. As its name suggests, the Event.
