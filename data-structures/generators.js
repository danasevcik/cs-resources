// generators simplify iterator-authoring using function* and yield.
// A function declared as function* returns a Generator instance.
// Generators are subtypes of iterators which include additional next and throw.
// These enable values to flow back into the generator, so yield is an expression form which returns a value (or throws)
// Can also be used to enable 'await'-like async programming.

function increment(number) {
  return 1 + number;
}

// these will return as expected
increment(10);
increment(100);


// * syntax to represent a generator
function* numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

// calling this generator will return a Generator instance
const generator = numbers();
generator // this will return {}

generator.next() // this will return {'value': 2, 'done': false}

// calling .next on a generator will evaluate the code inside of the function UNTIL a yield statement is found
// when a yield statement is found, execution is paused

generator.next() // this will return {'value': null, 'done': true}
// if instead of calling .next again with no value and pass in 10...
generator.next(10) // this will return {'value': 30, 'done': true}
// this is because the yield statement is REPLACED with the value that is being passed in

function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generator = list();
generator.next() // this will return {'value': 1, 'done': false}
generator.next() // this will return {'value': 2, 'done': false}
generator.next() // this will return {'value': 3, 'done': false}
generator.next() // this will return {'value': 4, 'done': false}
generator.next() // this will return {'done': true}
// and so on...


const numbers = [];

for (let value of generator) {
  numbers.push(value);
}

numbers; // this will give us [1,2,3,4]

// create 2 new generators
function* numbers() {
  yield 1;
  yield 2;
  yield* moreNumbers;
  yield 6;
  yield 7;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

const generator = numbers();

let values = [];

for (let value of generator) {
  values.push(value);
}

values; // this will give us [1,2,3,4,5,6,7]

// useful example

class Tree {
  constructor(value=null, children=[]) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [
  new Node(2, [new Node(4)]),
  new Node(3)
]);

tree.printValues().next() // this will give us {'value': 1, 'done': false} coming from the head on the tree BEFORE we have the for on line 95

// we'll use iterate over the tree dfs so that we get nodes of 1,2,4,3

const values = [];
for (let value of tree.printValues()) {
  values.push(value);
}
values; // this will give us [1,2,4,3]
