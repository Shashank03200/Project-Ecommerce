export const setStorageData = (name = "cartData", obj) => {
  localStorage.setItem(name, JSON.stringify(obj));
};

export const getStorageData = (name = "cartData") => {
  return JSON.parse(localStorage.getItem(name));
};
