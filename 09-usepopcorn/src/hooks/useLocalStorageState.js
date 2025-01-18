import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
    });
    
  // 1. Use useState (with lazy initialization) for retrieving the initial value from localStorage.
  // 2. Use useEffect for saving updates to localStorage whenever the state changes.

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );
    return[value, setValue]
}