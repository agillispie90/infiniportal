const Truck = require("../models/truckModel");
const mongoose = require("mongoose");

// GET ALL TRUCKS

const getAllTrucks = async (req, res) => {
  const trucks = await Truck.find().sort('unitNumber');
  
  if (trucks) {
    res.status(200).json(trucks);
  } else {
    res.status(404).json({ error: "An error occurred!" });
  }
};

//GET A SINGLE TRUCK

const getTruck = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const truck = await Truck.findById(id);

  if (!truck) {
    res.status(404).json({ error: "No truck found" });
  } else {
    res.status(200).json(truck);
  }
};

//CREATE A NEW TRUCK

const createTruck = async (req, res, next) => {
  const { unitNumber, unitMake, unitModel,unitMileage,unitType } = req.body;

  try {
    const truck = await Truck.create({ unitNumber, unitMake, unitModel,unitMileage,unitType });
    res.status(200).json(truck);
  } catch (err) {
    res.status(400).json({ error: error.message });
  }

  next();
};

//DELETE A TRUCK

const deleteTruck = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: " Invalid ID" });
  }

  const truck = await Truck.findByIdAndRemove(id);

  if (!truck) {
    return res.status(404).json({ error: "No truck exists with that ID!" });
  }

  res.status(200).json(truck);
};

//MODIFY AN EXISTING TRUCK

const modifyTruck = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "This ID is invalid!" });
  }

  const truck = await Truck.findByIdAndUpdate({ _id: id })({ ...req.body });

  if (!truck) {
    res.status(404).json({ error: "This truck does not exist!" });
  } else {
    res.status(200).json(truck);
  }
};

//EXPORT FOR USAGE
module.exports = {
  getTruck,
  createTruck,
  deleteTruck,
  modifyTruck,
  getAllTrucks,
};
