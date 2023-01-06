const JsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const GetStorageValue = (key) => {
  return JsonLocalStorage.getItem(key);
};

const IsValidTokenValue = (key) => {
  const value = GetStorageValue(key);
  return (value && value.length > 30) ? true : false;
};

export { JsonLocalStorage, GetStorageValue, IsValidTokenValue }