To-Do App API
=============

This is a RESTful API created for my personal use only, intended to store tasks of a to-do app. The API allows me to create, read, update, and delete tasks.
### Base URL

The base URL for the API is: `https://tough-bee-bonnet.cyclic.app/`

### Authentication

Authentication is not currently required for accessing the API.

Endpoints
---------

The API provides the following endpoints:

### `GET /`

Returns a list of all tasks in the database.

### `POST /`

Creates a new task in the database. The request body must contain a JSON object with the following properties:

jsonCopy code

`{ "id": 12345, "title": "Task Title", "isCompleted": false, "tag": "health", "date": "2023-04-15T00:00:00.000Z" }`

### `PUT /:id`

Updates the task with the specified ID. The request body must contain a JSON object with the following properties:

jsonCopy code

`{ "id": 12345, "title": "Task Title", "isCompleted": false, "tag": "health", "date": "2023-04-15T00:00:00.000Z" }`

### `DELETE /:id`

Deletes the task with the specified ID.

Response Format
---------------

All responses from the API are returned in JSON format.

Error Handling
--------------

Errors are returned with a status code and a JSON response containing an error message. Possible error codes are:

-   `400`: Bad Request
-   `404`: Not Found
-   `500`: Internal Server Error
