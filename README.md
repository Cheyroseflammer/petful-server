# Petful Server

Petful is a webapp to simulate the adoption process for pets using a first-in, first-out system that showcases the functions of linked lists and queues!

### Back-end Technologies Used in Dev

- Node.js
- Express.js.
- Heroku
- Postman

## Links

Petful Client Repository:

Petful API Repository:

Live App:

## Petful API Overview

This is the API for the Petful pet adoption app.

## Petful API Endpoints

### /people

```
GET - Will retrieve the next person in the queue.

POST - Will add a new person to the end of the queue. Used to ensure that there are always five people in the queue.
```

### /pets

```
GET - Will retrieve the next pets (both dog and cat) in the queue.

DELETE - Will remove the person at the top of the queue, and the pet of the chosen type. This function is used to remove a person and pet from the queue once they've been matched.
```

### /pets/cat

```
GET - Will retrieve the next cat in the queue.
```

### /pets/dog

```
GET - Will retrieve the next dog in the queue.
```


## Running the tests

To run back-end tests, run `npm test` in the terminal.
