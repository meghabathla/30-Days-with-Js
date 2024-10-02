// class Node {
//   constructor(data, next) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
// }
// LinkedList.prototype.insertAtEnd = () => {

// };

// const result = new LinkedList();
// console.log(result.insertAtEnd());

//Activity 2:
// Task3- Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  reverse(str) {
    let newStack = new Stack();
    for (let i = 0; i < str.length; i++) {
      newStack.push(str[i]);
    }
    let newStr = "";
    while (!newStack.isEmpty()) {
      newStr += newStack.pop();
    }
    return newStr;
  }
}

const result = new Stack();
result.push(90);
result.push(78);
result.push(34);
result.push(45);
console.log(result.printStack());
console.log(result.peek());
console.log(result.pop());
console.log(result.printStack());
console.log(result.reverse("Hello"));
