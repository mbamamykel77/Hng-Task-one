import express from "express";
import { router as infoRoute } from "./src/routes/info.route.js";

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(express.json());


app.use("/api", infoRoute);



app.listen(port, () => console.log(`server is listening on Port ${port}...`));

