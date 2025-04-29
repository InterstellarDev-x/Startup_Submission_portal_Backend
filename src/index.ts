import express from "express"
const app = express();
import cors from 'cors'
import Admin from "./routes/Admin";
import Submit from "./routes/submit";
app.use(cors())
app.use(express.json())


app.use("/api/v1/admin" , Admin)
app.use("/api/v1/form/" , Submit )


app.listen(3000)