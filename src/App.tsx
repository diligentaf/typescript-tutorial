import React from 'react';
import './App.css';
import InputField from './components/InputField';
/* eslint-disable  @typescript-eslint/no-unused-vars */

let name: string;
name = '5';
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
role = [5, 'yo'];
let anyType: any;
let unkwonType: unknown; // recommended over any

// union in Typescript
age = "Twenty two";
console.log(age);
age = 5;
console.log(age);

let functionVoid: (name: string) => void; // void returns undefined
let functionNever: (name: string) => never; // void returns nothing

// function printName(name: string) {
//   console.log(name);
// }

// // creating a Person object
type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: 'DiligentAF',
  // age: 22,
}

let lotsofPoeple: Person[];

type X = {
  a: string;
  b: number;
}

type Y = X & {
  c: string;
  d: number;
}

let xANDy: Y = {
  a: 'efdas',
  b: 42,
  c: 'efdas',
  d: 42,
}

interface Bmw {
  name: string;
  age?: number;
};

interface Car extends Bmw {
  profession: string;
}

let car: Car = {
  profession: 'ayyy',
  name: 'bmw2007',
  // age: 13
}

console.log(car);

// function App() {
// const App: React.ReactNode = () => {
const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
