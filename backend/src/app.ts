import Express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";
import userRoutes from "./routes/userRoutes";

const app = Express();

app.use(cors({ origin: "http://0.0.0.0:5000"  }));
app.use(Express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

export default app;