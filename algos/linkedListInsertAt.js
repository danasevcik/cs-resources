// describe.skip('InsertAt', () => {
//   test('inserts a new node with data at the 0 index when the list is empty', () => {
//     const l = new List();
//     l.insertAt('hi', 0);
//     expect(l.getFirst().data).toEqual('hi');
//   });
//
//   test('inserts a new node with data at the 0 index when the list has elements', () => {
//     const l = new List();
//     l.insertLast('a');
//     l.insertLast('b');
//     l.insertLast('c');
//     l.insertAt('hi', 0);
//     expect(l.getAt(0).data).toEqual('hi');
//     expect(l.getAt(1).data).toEqual('a');
//     expect(l.getAt(2).data).toEqual('b');
//     expect(l.getAt(3).data).toEqual('c');
//   });
//
//   test('inserts a new node with data at a middle index', () => {
//     const l = new List();
//     l.insertLast('a');
//     l.insertLast('b');
//     l.insertLast('c');
//     l.insertLast('d');
//     l.insertAt('hi', 2);
//     expect(l.getAt(0).data).toEqual('a');
//     expect(l.getAt(1).data).toEqual('b');
//     expect(l.getAt(2).data).toEqual('hi');
//     expect(l.getAt(3).data).toEqual('c');
//     expect(l.getAt(4).data).toEqual('d');
//   });
//
//   test('inserts a new node with data at a last index', () => {
//     const l = new List();
//     l.insertLast('a');
//     l.insertLast('b');
//     l.insertAt('hi', 2);
//     expect(l.getAt(0).data).toEqual('a');
//     expect(l.getAt(1).data).toEqual('b');
//     expect(l.getAt(2).data).toEqual('hi');
//   });
//
//   test('insert a new node when index is out of bounds', () => {
//     const l = new List();
//     l.insertLast('a');
//     l.insertLast('b');
//     l.insertAt('hi', 30);
//
//     expect(l.getAt(0).data).toEqual('a');
//     expect(l.getAt(1).data).toEqual('b');
//     expect(l.getAt(2).data).toEqual('hi');
//   });
// });

// check if there is a head
// if not, insert
// if yes and there are more elements
// iterate until found the index
// change the next property of previous and change next of inserted node to current
