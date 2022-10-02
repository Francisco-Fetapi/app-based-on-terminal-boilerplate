import { helloWorld } from "./helloWorld";

describe("HelloWorld function", () => {
  it("should be able to return a 'hello message'", () => {
    const name = "Francisco Fetapi";
    expect(helloWorld(name)).toBe(`Hello World, ${name}`);
  });
});
