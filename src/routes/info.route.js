import express from "express";

const router = express.Router();

import { info } from "../controllers/task.js";

router.route("/").get(info)


export {router};
