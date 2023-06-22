interface StoredItem<T> {
  data: T;
  expiration: number;
}

export const setSessionStorageWithExpiration = <T>(
  key: string,
  data: T,
  expirationMinutes: number
) => {
  const expirationMs = expirationMinutes * 60 * 1000;
  const expirationTime = new Date().getTime() + expirationMs;

  const item: StoredItem<T> = {
    data: data,
    expiration: expirationTime,
  };

  sessionStorage.setItem(key, JSON.stringify(item));
};

export const getSessionStorageWithExpiration = <T>(key: string): T | null => {
  const item = sessionStorage.getItem(key);
  if (!item) {
    return null;
  }

  const parsedItem: StoredItem<T> = JSON.parse(item);

  const currentTime = new Date().getTime();
  if (parsedItem.expiration && parsedItem.expiration < currentTime) {
    sessionStorage.removeItem(key);
    return null;
  }

  return parsedItem.data;
};
