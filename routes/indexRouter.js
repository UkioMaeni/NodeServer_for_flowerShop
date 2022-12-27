const Router = require("express");
const userRouter = require("./userRouter")
const cartRouter = require("./cartRouter")
const flowerRouter = require("./flowerRouter")
const transactionRouter = require("./transactionRouter")

const router = new Router();

router.use("/users", userRouter);
router.use("/carts", cartRouter);
router.use("/flowers", flowerRouter);
router.use("/transactions", transactionRouter);

module.exports = router;