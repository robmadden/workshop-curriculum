<!--{ ids:[187], language:'JavaScript', type:'workshop', order: 6, name:'Method Chaining', description:'Use multiple array methods at the same time' } -->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to use multiple array methods at the same time

### Example

Method chaining is a technique that simplifies calling multiple functions on the same object consecutively (remember that arrays are objects). For method chaining to work, the first method called must return an object that the next invoked method can use.

Let's start with our simple fruits array:

```js
var fruits = ["banana", "apple", "orange"];
```

The following methods, called in this order:

```js
fruits.sort();
fruits.push("kiwi");
fruits; // returns ["apple", "banana", "orange", "kiwi"]
```

is the same as:

```js
fruits.sort().push("kiwi");
fruits; // returns ["apple", "banana", "orange", "kiwi"]
```

We call two methods on the fruits array in the above example: `sort()` and `push()`, and we do it on the same line. This is possible because the `sort()` method returns the array after it has been sorted (in this case, in alphabetical order). We can then call the `push()` method on the sorted array and add a new item to the array.

The order of the methods matter. If we were to reverse the methods above and call `fruits.push("kiwi").sort();`, we might expect `["apple", "banana", "kiwi", "orange"]` to be the value of the new array, but that is not the case.

Instead, we would receive a `TypeError`. The `push()` method does not return the array with the new item pushed to it – it returns the length of the new array, which is a number. By calling the `push()` method before the `sort()` method, we are telling the script to sort a number, not an array. The `sort()` method cannot be used on a number data type.

JavaScript has many built-in methods that can be used on arrays. [Here is a comprehensive list.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) Bookmark this page and review the methods to get a sense of the many ways you can manipulate arrays.
