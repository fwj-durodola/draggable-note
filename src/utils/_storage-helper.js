import { MAX_LOCALSTORAGE_SIZE } from "./constants";

export const getCurrentLocalStorageSize = () => {
  let total = 0;

  for (let key in localStorage) {
    if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
      // Calculate the size of each key and its value
      total += (key.length + localStorage[key].length) * 2; // Multiply by 2 to account for UTF-16 encoding (each character takes 2 bytes)
    }
  }

  return total;
};

export const isEnoughStorageSpace = (newData) => {
  const newDataSize = JSON.stringify(newData).length * 2;

  const totalRemainingSpace =
    MAX_LOCALSTORAGE_SIZE - getCurrentLocalStorageSize();

  if (newDataSize > totalRemainingSpace) return false;

  return true;
};

export function autoSave(func) {
  let saveTimer;

  if (saveTimer) clearTimeout(saveTimer);

  saveTimer = setTimeout(() => func(), 2000);
}
