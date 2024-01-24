const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.config()
const connectDB = require('./DBConnection/db')
const {notFound, errorHandler} = require("./Middleware/errorMiddleware")
const userRoutes = require("./routes/routes")
connectDB()
const port = process.env.PORT
app.use(express.json())
app.use("/api/user", userRoutes)
// app.use(notFound)
// app.use(errorHandler)
app.listen(port, (err) => {
    if (err) {
        console.log("something went wrong", err);
    } else {
        console.log(`Server running on ${port}`);
    }
});
