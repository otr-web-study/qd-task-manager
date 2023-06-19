export const getLocalData = (key, defaultValue) => {
  const localData = localStorage.getItem(key);
  if (!localData) {
    return defaultValue;
  }

  return JSON.parse(localData) || defaultValue;
};

export const setLocalData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
