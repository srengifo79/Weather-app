import {
  setSessionStorageWithExpiration,
  getSessionStorageWithExpiration,
} from './sessionStorageCache';

describe('setSessionStorageWithExpiration', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test('should store data in sessionStorage with expiration', () => {
    const data = { name: 'John' };
    const expirationMinutes = 30;
    const key = 'myKey';

    setSessionStorageWithExpiration(key, data, expirationMinutes);

    const storedItem = sessionStorage.getItem(key);
    expect(storedItem).toBeDefined();

    const parsedItem = JSON.parse(storedItem!);
    expect(parsedItem.data).toEqual(data);
    expect(parsedItem.expiration).toBeGreaterThan(new Date().getTime());
  });
});

describe('getSessionStorageWithExpiration', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test('should return stored data if not expired', () => {
    const data = { name: 'John' };
    const expirationMinutes = 30;
    const key = 'myKey';

    setSessionStorageWithExpiration(key, data, expirationMinutes);

    const retrievedData = getSessionStorageWithExpiration<{ name: string }>(
      key
    );
    expect(retrievedData).toEqual(data);
  });

  test('should return null if data does not exist', () => {
    const key = 'nonexistentKey';

    const retrievedData = getSessionStorageWithExpiration<{ name: string }>(
      key
    );
    expect(retrievedData).toBeNull();
  });
});
