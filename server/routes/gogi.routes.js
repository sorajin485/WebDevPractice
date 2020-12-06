var express = require('express');
var router = express.Router();
const mslmController = require("../mslm/mslm.controller.js");

//default
// Create a new Mslm
router.post("/", mslmController.create);

// Retrieve all Mslms
router.get("/item", mslmController.item);

// Retrieve a single Mslm with mslmId
router.get("/:mslmId", mslmController.findOne);

// Update a Mslm with mslmId
router.put("/:mslmId", mslmController.update);

// Delete a Mslm with mslmId
router.delete("/:mslmId", mslmController.delete);

// Create a new Mslm
router.delete("/", mslmController.deleteAll);

module.exports = router;