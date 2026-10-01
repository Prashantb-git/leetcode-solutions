/**
 * @param {string} s
 * @return {boolean}
 */



var isValid = function (s) {
    class Stack {
        constructor() {
            this.items = [];
        }
        push(element) {
            this.items.push(element);
        }
        pop() {
            if (this.items.length === 0) {
                return 'Underflow';
            }
            return this.items.pop();
        }
        peek() {
            return this.items[this.items.length - 1];
        }
    }

    const stack = new Stack();

    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let el of s) {
        if (el === '(' || el === '{' || el === '[') {
            stack.push(el);
        } else if (el === ')' || el === ']' || el === '}') {
            if (pairs[el] !== stack.peek()) {
                return false
            }
            stack.pop();
        }
    }
    return stack.items.length === 0
}