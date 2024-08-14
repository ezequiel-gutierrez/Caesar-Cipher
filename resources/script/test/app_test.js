const assert = require("assert");
const sayHello = require("../app.js");

describe("App", () => {
    it("Says Hello", () => {
        let returnedValue = sayHello();
        let expected = "Hello World";

        assert.equal(returnedValue, expected);
    })
})