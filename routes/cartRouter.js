const cartController = require("../controller/cart_controller")
const Router = require("express");
const router = new Router();

router.post("/", cartController.addToCart);
router.get("/:userId", cartController.getCart);
router.put("/", cartController.updateCart);
router.delete("/", cartController.deleteFromCart);

module.exports = router;