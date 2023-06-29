import express from "express";
import userController from "backend_code/controller/user.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use(userController);

export default app;
