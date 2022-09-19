import type { Element } from "./QueueTypes";

interface Queue {
  elements: Element
  head: number
  tail: number
}

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  insert(element: any) { // add element to the queue
    this.elements[this.tail] = element;
    this.tail++;
  }
  insertHead(element: any) {
    const newElements: Element = {};
    newElements[this.head] = element;
    Object.keys(this.elements).map((k: any) => { newElements[k + 1] = this.elements[k] });
    this.tail++;
    this.elements = newElements;
  }

  dequeue() { // return and remove the last element
    if (Object.keys(this.elements).length == 0) return null
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() { // return the first element
    return this.elements[this.head];
  }
  get length() { // return the length of the queue
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

export default Queue;