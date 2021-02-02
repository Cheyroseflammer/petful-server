const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/:pet", (req, res) => {
  const { pet } = req.params;
  const resPet = Pets.get()[pet];
  let response = { data: resPet ? resPet : `${pet} is not up for adoption` };
  res.send(response);
});

router.delete("/:pet", json, (req, res) => {
  const { pet } = req.params;
  let response = Pets.dequeue(pet);
  res.send(response ? response : {});
});

module.exports = router;
