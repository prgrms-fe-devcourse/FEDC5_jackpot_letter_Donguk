const STORAGE = window.localStorage;

export function getStorage<T>(key: string): T | undefined;
export function getStorage<T>(key: string, defaultValue: T): T;
export function getStorage<T>(key: string, defaultValue?: T) {
  try {
    const data = STORAGE.getItem(key);

    if (!data) return defaultValue;

    return JSON.parse(data);
  } catch (error) {
    console.error(error);

    return defaultValue;
  }
}

export function setStorage<T>(key: string, value: T) {
  try {
    STORAGE.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
}

export function removeStorage(key: string) {
  try {
    STORAGE.removeItem(key);
  } catch (error) {
    console.error(error);
  }
}
