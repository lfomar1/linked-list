import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //Insert Last node
  insertLastNode(data) {
    let node = new Node(data);
    let current;

    //If empty make the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  //Insert at index
  insertAt(data, index) {
    //If index is out or range
    if (index > 0 && index > this.size) return;

    //If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, prev;

    current = this.head;
    let count = 0;

    while (count < index) {
      prev = current; // Node before index
      count++;
      current = current.next; // Node after the index
    }
    node.next = current;
    prev.next = node;

    this.size++;
  }
  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let prev;
    let count = 0;

    //Remove First

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }

  // Clear all list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print last index
  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return console.log(current.data);
  }

  //Print data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // To string all the data
  toString() {
    let current = this.head;
    let stringList = "";
    while (current != null) {
      stringList += `( ${current.data} ) ---> `;
      current = current.next;
    }
    return console.log((stringList += " null"));
  }
}

export default LinkedList;
