interface valueType<T> {
  [key: string]: Array<T> | T;
}

interface LocalStorageProps<T> {
  key: string;
  value?: valueType<T>;
  defaultValue?: valueType<T> | string;
}

const STORAGE = window.localStorage;

export const getStorage = <T>({
  key,
  defaultValue = ''
}: LocalStorageProps<T>): T => {
  try {
    const data = STORAGE.getItem(key);

    if (!data) return defaultValue as T;

    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};

export const setStorage = <T>({ key, value }: LocalStorageProps<T>) => {
  try {
    STORAGE.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeStorage = <T>({ key }: LocalStorageProps<T>) => {
  try {
    STORAGE.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
