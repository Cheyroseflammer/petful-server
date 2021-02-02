const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");

const router = express.Router();

router.get("/:pet", (req, res) => {
  // Return all pets currently up for adoption.
  const { pet } = req.params;
  const resPet = Pets.get()[pet];
  let response = { data: resPet ? resPet : `${pet} is not up for adoption` };
  res.send(response);
});

router.delete("/:pet", json, (req, res) => {
  // Remove a pet from adoption.
  const { pet } = req.params;
  let response = Pets.dequeue(pet);
  res.send(response ? response : {});
});

module.exports = router;
