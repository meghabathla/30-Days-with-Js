In JavaScript, call(), apply(), and bind() are methods used to control the context (this) in which a function is executed. They allow you to invoke a function with a specific value for this, which is useful when you need to borrow a method from one object and use it on another. Here's an explanation of each:

1. call()
   Purpose: Invokes a function, allowing you to specify the context (this) and pass arguments individually.
   How it works: The first argument is the value for this, and the subsequent arguments are passed individually to the function.

2. apply()
   Purpose: Similar to call(), but arguments are passed as an array instead of individually.
   How it works: The first argument is the value for this, and the second argument is an array containing the function arguments.
   This is useful when you have arguments in an array or array-like object and want to pass them to a function.

3. bind()
   Purpose: Returns a new function with a specific this value, allowing you to bind this permanently. It does not invoke the function immediately but creates a new function that can be called later.
   How it works: The first argument is the value for this, and the remaining arguments (if any) are pre-set arguments that the function will be called with.
