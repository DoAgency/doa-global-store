doa-global-store

Description
my-global-store is a lightweight library for React that allows you to save and read global values using simple JavaScript functions, without the need to set up Context, Redux, or other complex configurations.
With this library, you can easily write and access global data (strings, numbers, objects, arrays) throughout your React application.

Installation
You can install doa-global-store via npm:
npm install my-global-store

Usage
Importing the functions
import { writeGlobalValue, readGlobalValue } from 'my-global-store';
Writing a global value
You can write any global value using writeGlobalValue:

writeGlobalValue('myKey', 100);
writeGlobalValue('user', { name: 'Mario', age: 30 });
writeGlobalValue('tasks', [
  { id: 1, task: 'Learn React' },
  { id: 2, task: 'Build a library' },
]);

Reading a global value
To read a global value, use readGlobalValue by specifying the key:

const number = readGlobalValue('myKey');
console.log(number); // Output: 100

const user = readGlobalValue('user');
console.log(user); // Output: { name: 'Mario', age: 30 }

const tasks = readGlobalValue('tasks');
console.log(tasks); // Output: [{ id: 1, task: 'Learn React' }, { id: 2, task: 'Build a library' }]

Benefits
Simplicity: No complex setup required.
Flexibility: Supports strings, numbers, objects, arrays, and any other JavaScript data type.
Minimal: Compact API with just two functions: writeGlobalValue and readGlobalValue.

Contributing
If you want to contribute to the development of the library, you can clone the repository and submit a pull request:
git clone https://github.com/DoAgency/doa-global-store.git

License
doa-global-store is distributed under the MIT license.