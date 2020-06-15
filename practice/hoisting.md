## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message -- Error- animal undefined
```

```js
console.log(animal);
let animal = "monkey";  
// Output or Error Message  // Error - animal not defined 
```

```js
console.log(animal);
const animal = "monkey";
// Output or Error Message -- Error - cannot access animal before initialization
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message      -- Message - Hey! Everyone
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message -- Message - Hey ! Everyone
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message -- Error-- SayHello is not a function (one reason maybe because arrow functions are anony,oius) 
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
``` 
<!-- Error -- sayHello is not defined  -->