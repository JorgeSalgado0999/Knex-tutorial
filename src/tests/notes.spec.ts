// test for /notes path
import request from "supertest";
import Server from "../server";

const server = new Server();

const app = server.getApp();

describe("GET /notes", () => {
	test("should return an array of notes", async () => {
		const response = await request(app).get("/notes");
		expect(response.body).toEqual([]);
	});
});
