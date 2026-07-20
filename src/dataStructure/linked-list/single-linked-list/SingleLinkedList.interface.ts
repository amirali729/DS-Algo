export interface SingleLinekedList<T> {
  append(value: T): void;
  insertAt(value: T): void;
  remove(value: T): void;
  print(): void;
  find(value: T): boolean;
}
