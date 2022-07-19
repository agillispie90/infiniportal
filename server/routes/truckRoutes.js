const express = require("express");
const {
  getTruck,
  createTruck,
  deleteTruck,
  modifyTruck,
  getAllTrucks,
} = require("../controllers/truckController");

const router = express.Router();

//get all trucks
router.get("/", getAllTrucks);

//create a truck
router.post("/", createTruck);

//get a single truck
router.get("/:id", getTruck);

//modify a truck
router.patch("/:id", modifyTruck);

//delete a truck
router.delete("/:id", deleteTruck);

module.exports = router;
