const Express = require("express");
const userRouter = require("./routes/userRouter");
// const shopRouter = require("./routes/shopRouter");
// const cartRouter = require("./routes/cartRouter");
// const flowerRouter = require("./routes/flowerRouter");

const PORT = 5000;

const app = Express();

app.use(Express.json());

app.get("/", (request, response) => {
    response.json("Home sweet home")
})
app.use("/user", userRouter);
// app.use("/shop", shopRouter);
// app.use("/cart", cartRouter);
// app.use("/flower", flowerRouter);



app.listen(PORT, () => {
    console.log(`Работаем на порту: ${PORT}`);
})