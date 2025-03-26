declare module 'doa-global-store' {
  // Definire i tipi per i valori globali (ogni valore può essere di tipo qualsiasi)
  export function writeGlobalValue<T>(key: string, value: T): void;
  export function readGlobalValue<T>(key: string): T | undefined;

  // Definizione per useGlobalValue (opzionale)
  export function useGlobalValue<T>(key: string): T | undefined;
}