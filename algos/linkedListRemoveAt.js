// describe.skip('RemoveAt', () => {
//   test('removeAt doesnt crash on an empty list', () => {
//     const l = new List();
//     expect(() => {
//       l.removeAt(0);
//       l.removeAt(1);
//       l.removeAt(2);
//     }).not.toThrow();
//   });
//
//   test('removeAt doesnt crash on an index out of bounds', () => {
//     const l = new List();
//     expect(() => {
//       const l = new List();
//       l.insertFirst('a');
//       l.removeAt(1);
//     }).not.toThrow();
//   });
//
//   test('removeAt deletes the first node', () => {
//     const l = new List();
//     l.insertLast(1);
//     l.insertLast(2);
//     l.insertLast(3);
//     l.insertLast(4);
//     expect(l.getAt(0).data).toEqual(1);
//     l.removeAt(0);
//     expect(l.getAt(0).data).toEqual(2);
//   });
//
//   test('removeAt deletes the node at the given index', () => {
//     const l = new List();
//     l.insertLast(1);
//     l.insertLast(2);
//     l.insertLast(3);
//     l.insertLast(4);
//     expect(l.getAt(1).data).toEqual(2);
//     l.removeAt(1);
//     expect(l.getAt(1).data).toEqual(3);
//   });
//
//   test('removeAt works on the last node', () => {
//     const l = new List();
//     l.insertLast(1);
//     l.insertLast(2);
//     l.insertLast(3);
//     l.insertLast(4);
//     expect(l.getAt(3).data).toEqual(4);
//     l.removeAt(3);
//     expect(l.getAt(3)).toEqual(null);
//   });
// });


// iterate through list with 2 pointers
// one pointing to last and one to current
// once arrived at the wanted index, change next proprty of previous
