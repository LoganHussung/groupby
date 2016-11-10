// write a function on the Array prototype
// called groupBy(callback) the takes a callback
// function. For each item in groupBy, callback's
// arguments will be (value, index, array).
//
// The value returned by the callback becomes the
// key for the original value in a new collection.
//
// i.e.
//
// [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })
//
// //--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }

// Array.prototype.groupBy = function(callback){
//   //creates empty object
//   var newGroups = {};
//   // runs loop through the numbers passed in
//   for (var i = 0; i < this.length; i++) {
//   // looks at single number
//     var currentItem = this[i];
//
//     var result = callback(currentItem, i, this);
//
//       if (typeof newGroups[result] === 'undefined'){
//         newGroups[result] = [currentItem];
//       } else{
//         newGroups[result].push(currentItem);
//       }
//   }
//       return newGroups;
// }
//
//
// var groups = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })



// //Whats this assignment

// utility for logging
if(!log)
    var log = function(){ console.log([].slice.call(arguments)) }

var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',')
}

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }

}

var inAFunction = function(a, b) {
    this.name = 'Sally'
    whatIsThis(a, b)
}

inAFunction.prototype.test3 = whatIsThis

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
}

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
}

// /**
//  * THE PROBLEMS
//  */

console.assert(whatIsThis('hello', 'world') === "[object Window],hello,world")
// this is not defined so it returns to its default as the object window. A and B are passed in as hello world // and then the three are joined together with a comma seperating them.
//

console.assert(window.whatIsThis('hello', 'world') === '[object Window],hello,world')
// this is also not defined because it is pulling from the global scope again.

console.assert(inAnObject.test1('face', 'book') === '[object Object],face,book' )
//

console.assert(inAnObject.test1('twitter', 'book') === '[object Object],twitter,book')
// //Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(inAnObject.anotherObject.test2('twitter', 'book') === '[object Object],twitter,book')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.call() === '[object Window],,')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.call(trickyTricky) === '[object Object],,')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === '[object Object],nice,job')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
console.assert(whatIsThis.call(confusing) === '[object Object],,')
// //Once you've figured out what the output is, answer here in a comment: Why is this so?
//
console.assert(whatIsThis.call(confusing, 'hello') === '[object Object],hello,')
// //Once you've figured out what the output is, answer here in a comment: Why is this so?
//
console.assert(whatIsThis.apply(trickyTricky) === '[object Object],,')
// //Once you've figured out what the output is, answer here in a comment: Why is this so?
//
console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === '[object Object],nice,job')
// //Once you've figured out what the output is, answer here in a comment: Why is this so?
//
//console.assert(whatIsThis.apply(confusing, 'nice', 'job') === FILL_ME_IN)
// This will not work because the arguments are not passed in as an array.
//
console.assert(inAFunction('what will', 'happen?') === undefined)
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
// try{
//     console.assert(inAFunction.test3('A', 'B') === TypeError)
// } catch(e){
//     log(e)
// }
// This returns an error.

var newObject = new inAFunction('what will', 'happen?')
console.assert(newObject.name === 'Sally' )
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
var newObject2 = new inAFunction('what will', 'happen?')
console.assert(newObject2.test3('C', 'D') === '[object Object],C,D')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === '[object Object],face,book')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === '[object Object],foo,bar')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?


// constructor assignment


// 1. Create a simple constructor function called `Foo` and create a new instance from it called `foo`.

function Foo() {
// Code here
}
var foo = new Foo();
// assertions
console.assert(foo instanceof Foo)

// 2. Create a constructor function called `Dog` that sets a property on itself within the constructor. The property should be called `says` and the value should be `life is ruff`
var Dog = {
  says: 'life is ruff';
}

var Dog = function(says){
  this.says = says
}

var dog = new Dog();

// assertions
console.assert(new Dog().says === "life is ruff")

// 3. Create a constructor function called `Cat` that has a method on it's prototype called `growl` that returns the string `meow`; create an instance of this called `cat`


// assertions
console.assert(cat instanceof Cat)
console.assert(cat.growl() === "meow")

// 4. Create a constructor called `KeepSecret`. The constructor function itself should accept a parameter called `secret` it should store this in a private variable (use a closure). Add a method to the prototype that is called `squeal` that returns the secret string.

// assertions
var mySecret = "My class rocks!"
var dontTellNobody = new KeepSecret(mySecret)
console.assert(dontTellNobody.squeal() === mySecret)

// 5. Create a constructor called `Key`. Create another constructor called `Safe`. Make the Safe constructor take 2 arguments. The first argument can be any piece if data to keep safe. This must be stored using a private variable like you did with KeepSecret. The 2nd param to the `Safe` constructor needs to be an instance of `Key` you need to store it privately as well. Add a function to the Safe prototype called `unlock` that accepts a key. If the key matches the key that was used to create the Safe; then return the secret data.

// assertions
var sensitive = "shhhhh!"
var rightKey  = new Key()
var wrongKey  = new Key()
var safe      = new Safe(sensitive, rightKey)

console.assert(safe.unlock(wrongKey) !== sensitive)
console.assert(safe.unlock(rightKey) === sensitive)
