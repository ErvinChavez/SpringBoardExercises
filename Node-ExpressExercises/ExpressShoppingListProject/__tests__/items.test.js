const request = require("supertest");
const app = require("../app"); // import the Express app
const items = require("../fakeDb");

// Reset items before each test
beforeEach(() => {
    items.length = 0;
    items.push({ name: "popsicle", price: 1.45 });
});

afterEach(() => {
    items.length = 0; // clear items after test
});

describe("GET /items", () => {
    test("gets all items", async () => {
        const res = await request(app).get("/items");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ name: "popsicle", price: 1.45 }]);
    });
});

describe("POST /items", () => {
    test("adds a new item", async () => {
        const res = await request(app)
            .post("/items")
            .send({ name: "cheerios", price: 3.4 });

        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            message: "Item added",
            item: { name: "cheerios", price: 3.4 },
        });
        expect(items.length).toBe(2);
    });

    test("returns 400 if missing name or price", async () => {
        const res = await request(app)
            .post("/items")
            .send({ name: "mystery" });

        expect(res.statusCode).toBe(400);
    });
});

describe("GET /items/:name", () => {
    test("gets a single item by name", async () => {
        const res = await request(app).get("/items/popsicle");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ name: "popsicle", price: 1.45 });
    });

    test("returns 404 if item not found", async () => {
        const res = await request(app).get("/items/unknown");
        expect(res.statusCode).toBe(404);
    });
});

describe("PATCH /items/:name", () => {
    test("updates an item", async () => {
        const res = await request(app)
            .patch("/items/popsicle")
            .send({ price: 2.5, name: "new popsicle" });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            updated: { name: "new popsicle", price: 2.5 },
        });
    });

    test("returns 404 if item not found", async () => {
        const res = await request(app).patch("/items/unknown").send({ price: 1 });
        expect(res.statusCode).toBe(404);
    });
});

describe("DELETE /items/:name", () => {
    test("deletes an item", async () => {
        const res = await request(app).delete("/items/popsicle");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "Deleted successfully" });
        expect(items.length).toBe(0);
    });

    test("returns 404 if item not found", async () => {
        const res = await request(app).delete("/items/unknown");
        expect(res.statusCode).toBe(404);
    });
});