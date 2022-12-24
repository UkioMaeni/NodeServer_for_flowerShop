const Express = require("express");
const userRouter = require("./routes/user_routes");
const PORT = 5000;

const app = Express();

app.use(Express.json());

app.get("/", (request, response) => {
    console.log("hello world")
    response.json("hello world")
    console.log(request.body)
})
app.use("/user", userRouter);




app.listen(PORT, () => {
    console.log(`Работаем на порту: ${PORT}`);
})