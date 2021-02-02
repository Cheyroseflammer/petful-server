const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    let nextPets = {
      cat: pets.cats.show(),
      dog: pets.dogs.show(),
    };
    return nextPets;
  },

  dequeue(type) {
    if (type === "cat") {
      return pets.cats.dequeue();
    }
    if (type === "dog") {
      return pets.dogs.dequeue();
    }
  },
};
