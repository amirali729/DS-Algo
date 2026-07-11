export interface DynamicArrayInterface<T> {
  get(index: number): T;
  set(index: number, value: number): void;
  push(value: T): void;
  pop(): T;
  deletedAt(index: number): T;
  insertAt(index: number, value: T): void;
  indexOf(value: T): number;
  valueAt(index: number): T;
  sizeOf(): number;
  ToArray(): T[];

}

