export type TestProps<T> = T extends {}
  ? {
      [P in keyof T]-?: NonNullable<T[P]>;
    }
  : never;

type ExtractKey<T, U> = {
  [P in keyof T]: Extract<T[P], U> extends never ? never : P;
}[keyof T];

type ExtractObj<T, U> = Pick<T, ExtractKey<T, U>>;

export type ExtractPick<T, U> = T extends {}
  ? { [P in keyof ExtractObj<T, U>]: U }
  : never;
