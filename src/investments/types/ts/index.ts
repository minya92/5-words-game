/**
 * Преобразует ключи в обязательные, т.е. нужно принудительно присваивать undefined.
 */
export type Complete<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : T[P] | undefined;
};

export type NullableValues<T> = {
  [P in keyof T]: TMaybe<T[P]>;
};

export type TMaybe<T> = T | null | undefined;

export type TWritableDeep<T> = {
  -readonly [K in keyof T]: T[K] extends object ? TWritableDeep<T[K]> : T[K];
};

export type ExcludeNullable<T> = Exclude<T, null | undefined>;

export type NullableObjectKeyOf<T> = keyof ExcludeNullable<T>;

export type RequiredFields<T, K extends keyof T> = Omit<T, K> &
  Required<{
    [P in K]: T[P];
  }>;
