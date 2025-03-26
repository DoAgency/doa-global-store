# doa-global-store

## Description
`doa-global-store` is a lightweight library for React that allows you to save and read global values using simple JavaScript functions, without the need to set up Context, Redux, or other complex configurations.

With this library, you can easily write and access global data (strings, numbers, objects, arrays) throughout your React application.

## Installation
You can install `doa-global-store` via npm:

```bash
npm install doa-global-store
```

## Usage
```bash
# Usage for writing global variables
import { writeGlobalValue, readGlobalValue } from 'doa-global-store';
writeGlobalValue('valueExemple', 42);

## Usage for reading global variables
console.log(readGlobalValue('valueExemple')); // Output: 42
```

##License
[MIT](https://choosealicense.com/licenses/mit/)