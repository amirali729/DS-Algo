import { SingleLinekedListInterfae } from './SingleLinkedList.interface.js';

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinekedList<T> implements SingleLinekedListInterfae<T> {
  head: Node<T> | null;

  constructor() {
    this.head = null;
  }
  append(value: T): void {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    }

    let current: Node<T> = this.head.next;
    while (current?.next !== null) {
      current = current?.next;
    }
    current.next = newNode;
  }
  find(value: T): boolean {}
  insertAt(value: T): void {}
  remove(value: T): void {}
}
