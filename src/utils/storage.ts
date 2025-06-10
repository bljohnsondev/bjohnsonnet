'use client';

const STORAGE_PREFIX = 'bjohnsonnet';

export const setStorageVar = (name: string, value: string): void => {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}_${name}`, value);
  } catch (err) {
    console.error('error setting localStorage: ', err);
  }
};

export const getStorageVar = (name: string): string | null => {
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}_${name}`);
  } catch (err) {
    console.error('error getting localStorage: ', err);
    return null;
  }
};

export const removeStorageVar = (name: string): void => {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}_${name}`);
  } catch (err) {
    console.error('error removing localStorage: ', err);
  }
};
