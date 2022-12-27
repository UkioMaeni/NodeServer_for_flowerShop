const transactionController = require("../controller/transaction_controller")
const Router = require("express");
const router = new Router();

router.post("/", transactionController.createTransaction);
router.get("/", transactionController.getAllTransactions);
router.get("/:id", transactionController.getOneTransaction);
router.delete("/", transactionController.deleteTransaction);

module.exports = router;