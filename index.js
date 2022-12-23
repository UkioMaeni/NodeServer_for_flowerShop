const Express = require("express");
const userRouter = require("./routes/user_routes");
const PORT = 5000;

const app = Express();

app.use(Express.json());

app.use("/user", userRouter);




app.listen(PORT, () => {
    console.log("Заебись");
})