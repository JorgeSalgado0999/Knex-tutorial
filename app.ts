import Server from "./src/server";
// import serverless from "serverless-http";
import {ENVIROMENT} from "./src/helpers/constants";

const server = new Server();

// if (ENVIROMENT == "local") {
// 	console.log("Development enviroment...");
// 	server.listen();
// } else if (ENVIROMENT == "cloud") {
// 	console.log("Productive enviroment...");
// 	module.exports.handler = serverless(server.app);
// }

server.listen();
