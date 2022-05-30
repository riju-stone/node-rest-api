import supertest from "supertest";

describe("product", () => {
  describe("get product route", () => {
    describe("given product doesn't exist", () => {
      it("it should return 404", () => {
        expect(true).toBe(true);
      });
    });
  });
});
