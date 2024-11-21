class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }
  append(value) {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    console.log("curr.next:", curr.next);
    const newNode = new Node(value);
    curr.next = newNode;
  }

  getNode(index) {
    let search = this.head;
    for (i = 0; i < index; i++) {
      search == search.next;
    }
    return search;
  }
}

console.log(LinkedList.getNode(3));

function getNode(index) {
  let search = this.head;
  for (let i = 0; i < index; i++) {
    search == search.next;
  }
  return search;
}
