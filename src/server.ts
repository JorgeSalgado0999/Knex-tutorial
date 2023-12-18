import express, {Application} from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import db from "./database/database";
import {PORT} from "./helpers/constants";
import NoteRouter from "./routes/notes.routes";

class Server {
	public app: Application;
	private port: number;
	private apiPaths: {[key: string]: string};

	constructor() {
		this.app = express();
		this.port = PORT;
		this.apiPaths = {
			root: "/",
			notes: "/notes",
		};

		// this.dbConnection();
		this.middlewares();
		this.routes();
	}

	public getApp(): Application {
		return this.app;
	}

	// private async dbConnection() {
	// 	try {
	// 		await db.authenticate();
	// 		console.log("Database online");
	// 	} catch (error: any) {
	// 		console.log("Problems with database");
	// 		throw new Error(error);
	// 	}
	// }

	private middlewares() {
		this.app.use(cors());
		this.app.use(express.json({limit: "50mb"}));
		this.app.use(express.urlencoded({limit: "50mb"}));
	}

	private routes() {
		this.app.get("", (req, res, next) => {
			return res.status(200).json({
				message: "Hello from root!",
			});
		});
		this.app.use(this.apiPaths.notes, NoteRouter);
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en puerto " + this.port);
		});
	}
}

export default Server;
