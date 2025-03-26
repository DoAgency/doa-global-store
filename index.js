import { useState, useEffect, useCallback } from 'react';

let globalValues = {};
let subscribers = [];

export function writeGlobalValue(key, value) {
  globalValues[key] = value;
  // Notifica tutti i subscriber che un valore è cambiato
  subscribers.forEach((callback) => callback());
}

export function readGlobalValue(key) {
  return globalValues[key];
}

// Hook per permettere ai componenti di ascoltare i cambiamenti
export function useGlobalValue(key) {
  const [value, setValue] = useState(globalValues[key]);

  const updateValue = useCallback(() => {
    setValue(globalValues[key]);
  }, [key]);

  useEffect(() => {
    // Aggiungi il componente come subscriber
    subscribers.push(updateValue);

    // Pulisci il subscriber quando il componente viene smontato
    return () => {
      subscribers = subscribers.filter((callback) => callback !== updateValue);
    };
  }, [key, updateValue]);

  return value;
}