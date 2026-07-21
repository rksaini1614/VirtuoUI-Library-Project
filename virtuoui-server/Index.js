import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./configs/connectDB.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import componentRouter from "./routes/component.route.js";
import paymentRouter from "./routes/payment.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
))

app.use(express.json());
app.use(cookieParser());


app.get("/",(req,res)=> {
    res.json("Hello from Server");
});

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/component",componentRouter);
app.use("/api/v1/payment",paymentRouter);

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
    connectDb();
});