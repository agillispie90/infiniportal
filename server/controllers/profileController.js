const Profile = require("../models/profileModel");
const mongoose = require("mongoose");

// GET ALL TRUCKS

const getAllProfiles = async (req, res) => {
  const profiles = await Profile.find();
  
  if (profiles) {
    res.status(200).json(profiles);
  } else {
    res.status(404).json({ error: "An error occurred!" });
  }
};

//GET A SINGLE PROFILE

const getProfile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const profile = await Profile.findById(id);

  if (!profile) {
    res.status(404).json({ error: "No profile found" });
  } else {
    res.status(200).json(profile);
  }
};

//CREATE A NEW PROFILE

const createProfile = async (req, res, next) => {
  const { firstName, lastName, division,title,certNumber } = req.body;

  try {
    const profile = await Profile.create({ firstName, lastName, division, title, certNumber });
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ error: error.message });
  }

  next();
};

//DELETE A PROFILE

const deleteProfile = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: " Invalid ID" });
  }

  const profile = await Profile.findByIdAndRemove(id);

  if (!profile) {
    return res.status(404).json({ error: "No truck exists with that ID!" });
  }

  res.status(200).json(profile);
};

//MODIFY AN EXISTING PROFILE

const modifyProfile = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "This ID is invalid!" });
  }

  const profile = await Profile.findByIdAndUpdate({ _id: id })({ ...req.body });

  if (!profile) {
    res.status(404).json({ error: "This profile does not exist!" });
  } else {
    res.status(200).json(profile);
  }
};

//EXPORT FOR USAGE
module.exports = {
  getProfile,
  createProfile,
  deleteProfile,
  modifyProfile,
  getAllProfiles,
};
