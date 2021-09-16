const express = require("express");
const router = express.Router();
const controllers = require("../controllers/states");

router.get("/states", controllers.getAll);
router.get("/state/:id", controllers.getByid);
router.post("/states", controllers.createState);
router.put("/state/:id", controllers.updateState);
router.delete("/state/:id", controllers.deleteState);

module.exports = router;
