const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ data: People.get() });
});

router.post("/", json, (req, res) => {
  const { person } = req.body;
  if (!person) return res.send(`${person} is missing in body`);
  res.send(People.enqueue(person));
});

router.delete("/", (req, res) => {
  let response = People.dequeue();
  res.send(response ? response : {});
});
module.exports = router;
