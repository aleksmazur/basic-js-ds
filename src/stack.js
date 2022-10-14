const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next
  }
  push(element) {
    if (!this.value) {
      this.value = element;
    } else {
      this.next = new Stack(this.value, this.next);
      this.value = element;
    }
    return this
  }

  pop() {
    let current = this.value;
    if (this.next) {
      this.value = this.next.value;
      this.next = this.next.next;
    }
    return current;
  }

  peek() {
    return this.value
  }
}

module.exports = {
  Stack
};
