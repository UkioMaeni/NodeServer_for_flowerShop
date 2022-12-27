const Express = require("express");
const indexRouter = require("./routes/indexRouter");

const PORT = 5000;

const app = Express();

app.use(Express.json());

app.get("/", (request, response) => {
    response.json("Home sweet home")
})
app.use("/api", indexRouter);




app.listen(PORT, () => {
    console.log(`Работаем на порту: ${PORT}`);
})