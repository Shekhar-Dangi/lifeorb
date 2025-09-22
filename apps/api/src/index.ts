import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: 1 });
});

app.listen(3001, () => {
  console.log("server started");
});
