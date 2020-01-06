// given a linked list head, determine if the list is circular

// start iterating from the given head
// create a map where the the node points to true
// if the next property is null, return false
// otherwise check if the node has already been visited


function circularList(head) {
  let seen = new Map();
  console.log(seen);

  while (head.next) {
    let current = head.next;
    if (seen[current]) {
      return true;
    } else if (!seen[current]) {
      seen[current] = true;
    } else if (current === null) {
      return false;
    }
  }
  return false;
}

console.log(circularList('x'));
