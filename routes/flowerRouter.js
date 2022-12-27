const flowerController = require("../controller/flower_controller")
const Router = require("express");
const router = new Router();

router.post("/", flowerController.createFlower);
router.get("/", flowerController.getAllFlowers);
router.get("/:id", flowerController.getOneFlower);
router.put("/", flowerController.updateFlower);
router.delete("/", flowerController.deleteFlower);

module.exports = router;