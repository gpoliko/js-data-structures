import LinkedList from "../linkedList";
import Node from "../node";

describe("Linked List Tests", () => {
  it("should create a new linked list", () => {
    const newList = new LinkedList();

    expect(newList.toString()).toBe("");
  });

  it("should add a new node to the end of the linked list", () => {
    const newList = new LinkedList();

    newList.add("testing-123");
    expect(newList.toString()).toBe("testing-123");
    expect(newList.head).toEqual({ data: "testing-123", next: null });
    expect(newList.tail.next).toBeNull();
  });

  it("should add a node to the beginning of the linked list", () => {
    const newList = new LinkedList();

    newList.addFirst("test1");
    expect(newList.head).toEqual({ data: "test1", next: null });
    expect(newList.tail).toEqual({ data: "test1", next: null });
    expect(newList.head.toString()).toBe("test1");
    expect(newList.tail.toString()).toBe("test1");

    newList.add("test2");
    newList.addFirst("test3");
    expect(newList.toString()).toBe("test3,test1,test2");
  });

  it("should validate if statement in add() to be true or false", () => {
    const newList = new LinkedList();
    const n1 = new Node(3);

    expect(newList.head).toBeFalsy();

    newList.add(n1);
    expect(newList.head).toBeTruthy();
  });

  it("should validate if statements in addFirst() to be true or false", () => {
    const newList = new LinkedList();
    const n1 = new Node(3);

    expect(newList.head).toBeFalsy();
    expect(newList.tail).toBeFalsy();

    newList.add(n1);
    expect(newList.head).toBeTruthy();
    expect(newList.head.toString()).toBe("3");
    expect(newList.tail).toBeTruthy();
    expect(newList.tail.next).toBeNull();
  });

  it("should return the size of the linked list", () => {
    const newList = new LinkedList();

    newList.add(1);
    newList.add("2");
    newList.add("three");
    expect(newList.size()).toBe(3);
    expect(newList.head.toString()).toBe("1");
    expect(newList.tail.toString()).toBe("three");
    expect(newList.toString()).toBe("1,2,three");
  });

  it("should return the node at the given index of the linked list", () => {
    const newList = new LinkedList();

    newList.add(1);
    newList.add("2");
    newList.add("two also");
    newList.add(3);
    expect(newList.get(1).toString()).toBe("2");
    expect(newList.toString()).toBe("1,2,two also,3");
    expect(newList.tail.next).toBeNull();
    expect(newList.get(3).data).toBe(3);
    expect(newList.get(4)).toBeNull();
  });

  it("should return the first node of the linked list", () => {
    const newList = new LinkedList();

    newList.add(1);
    newList.add("2");
    newList.add("three");
    expect(newList.getFirst().toString()).toBe("1");
    expect(newList.getFirst().data).toBe(1);
    expect(newList.getFirst().data).toEqual(1);
  });

  it("should delete a node given an object", () => {
    const newList = new LinkedList();

    expect(newList.delete(3)).toBeNull();

    newList.add(1);
    newList.add(2);
    newList.add(3);
    newList.add(3);
    newList.add("four");

    expect(newList.head.toString()).toBe("1");
    expect(newList.tail.toString()).toBe("four");

    const nodeToDelete = newList.delete(3);
    expect(nodeToDelete.data).toBe(3);
    expect(newList.toString()).toBe("1,2,four");

    newList.delete(3);
    expect(newList.toString()).toBe("1,2,four");

    newList.delete(1);
    expect(newList.toString()).toBe("2,four");

    expect(newList.head.toString()).toBe("2");
    expect(newList.tail.toString()).toBe("four");

    newList.delete("four");
    expect(newList.toString()).toBe("2");

    expect(newList.head.toString()).toBe("2");
    expect(newList.tail.toString()).toBe("2");

    newList.delete(1);
    expect(newList.toString()).toBe("2");

    newList.delete(2);
    expect(newList.toString()).toBe("");

    expect(newList.head).toBeNull();
    expect(newList.tail).toBeNull();
  });
});
