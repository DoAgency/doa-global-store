declare module 'doa-global-store' {
  export function writeGlobalValue(key: string, value: any): void;
  export function readGlobalValue(key: string): any;
}
