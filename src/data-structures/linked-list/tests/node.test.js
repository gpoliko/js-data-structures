import Node from "../node";

describe("Linked List Node", () => {
  it("should create a node containing data", () => {
    const n1 = new Node(3);
    const n2 = new Node("test");

    expect(n1.data).toBe(3);
    expect(n1.next).toBeNull();
    expect(n2.data).toBe("test");
    expect(n2.next).toBeNull();
  });

  it("should link a node to another node", () => {
    const n4 = new Node(2);
    const n3 = new Node("three", n4);

    expect(n4.data).toBe(2);
    expect(n3.data).toBe("three");
    expect(n3.next).toBe(n4);
    expect(n4.next).toBeNull();
  });

  it("should allow a node's data to be an object", () => {
    const n2Data = { d1: "test1", d2: "test2" };
    const n2 = new Node(n2Data);

    expect(n2.data.d1).toBe("test1");
    expect(n2.data.d2).toBe("test2");
  });

  it("should convert a node to a string", () => {
    const n1 = new Node(5);

    expect(n1.toString()).toBe("5");

    n1.data = "test-123";

    expect(n1.toString()).toBe("test-123");
  });

  it("should convert a node to string with our defined stringifier", () => {
    const nodeData = { d1: 1, d2: 2 };
    const node = new Node(nodeData);
    const callBackTrue = (data) => `d1: ${data.d1}, d2: ${data.d2}`;
    const callBackResult = node.toString(callBackTrue);

    expect(typeof callBackResult).toBe("string");
    expect(callBackResult).toBe("d1: 1, d2: 2");
  });
});
