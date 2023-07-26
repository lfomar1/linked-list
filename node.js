class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
const newNode = new Node(100);

export default Node;
