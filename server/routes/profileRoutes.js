const express = require("express");
const {
  getProfile,
  createProfile,
  deleteProfile,
  modifyProfile,
  getAllProfiles,
} = require("../controllers/profileController");

const router = express.Router();

//get all Profiles
router.get("/", getAllProfiles);

//create a Profile
router.post("/", createProfile);

//get a single Profile
router.get("/:id", getProfile);

//modify a Profile
router.patch("/:id", modifyProfile);

//delete a Profile
router.delete("/:id", deleteProfile);

module.exports = router;