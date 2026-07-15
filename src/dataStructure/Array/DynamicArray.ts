import { DynamicArrayInterface } from './DynamicArray.interface.js';

export class DynamicArray<T> implements DynamicArrayInterface<T> {
  private capacity: number;

  private length: number;

  private data: (T | undefined)[];

  constructor(...values: T[]) {
    this.capacity = Math.max(2, values.length);

    this.data = new Array(this.capacity);

    this.length = values.length;

    for (let i = 0; i < values.length; i++) {
      this.data[i] = values[i];
    }
  }

  get(index: number): T {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bound');
    }

    return this.data[index] as T;
  }

  set(index: number, value: T) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bound');
    }

    this.data[index] = value;
  }

  resize() {
    this.capacity *= 2;

    let newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }
  push(value: T) {
    if (this.capacity == this.length) {
      this.resize();
    }
    this.data[this.length] = value;
    this.length++;
  }
  pop(): T {
    if (this.length == 0) throw new Error('Array is Empty');
    let value = this.data[this.length - 1] as T;
    this.data[this.length - 1] = undefined;
    this.length--;
    return value;
  }
  indexOf(value: T): number {
    if (this.length === 0) return -1;
    for (let i = 0; i < this.length; i++) {
      if (value === this.data[i]) return i;
    }
    return -1;
  }
  valueAt(index: number): T {
    if (index < 0 || index > this.length) throw new Error('index out of bound');
    return this.data[index] as T;
  }

  sizeOf(): number {
    return this.length;
  }

  ToArray(): T[] {
    return this.data.splice(0, this.length) as T[];
  }

  deletedAt(index: number): T {
    if (index < 0 || index > this.length) throw new Error('index out of bound');

    let value = this.data[index] as T;
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data[this.length - 1] = undefined;
    this.length--;
    return value;
  }

  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.length) throw new Error('index out of bound');
    if (this.length === this.capacity) {
      this.resize();
    }
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = value;
    this.length++;
  }

  myMap(callback: Function): T[] {
    let MynewArray = [];
    for (let i = 0; i < this.length; i++) {
      MynewArray[i] = callback(this.data[i]);
    }
    return MynewArray;
  }

  filter(callback: (value: T) => boolean): T[] {
    let MynewArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i] as T)) {
        MynewArray.push(this.data[i] as T);
      }
    }
    return MynewArray;
  }

  lastIndex(): number {
    if (this.length === 0) throw new Error('Array is Empty');

    return this.length;
  }
}
export class NumberDynamicArray extends DynamicArray<number> implements DynamicArrayInterface<Number> {

}
