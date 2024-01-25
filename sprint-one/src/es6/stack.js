class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
  }

  push(value) {
    this[this.index] = value;
    this.index++;
  }

  pop() {
    this.index--;
    var result = this[this.index];
    delete this[this.index];
    return result;
  }

  size() {
    if (this.index <= 0) {
      return 0;
    }
    return this.index;
  }

}