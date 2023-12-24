# ANNOS API Documentation

This document provides a detailed description of the API endpoints for the Advanced Neural Network Optimization System (ANNOS).

## Base URL

All URLs referenced in the documentation have the following base:

```
http://localhost:3000/api
```

The base URL represents the root of the API. You prepend the base URL to the endpoint paths to form the complete URL.

## Endpoints

### POST /api/optimization/start

This endpoint starts the optimization process for a given neural network using a specified algorithm.

#### Request

```json
{
    "algorithm": "genetic",
    "neuralNetwork": {
        "id": "123",
        "config": {
            "layers": [10, 20, 10],
            "activation": "relu"
        }
    }
}
```

#### Response

```json
{
    "status": "success",
    "message": "Optimization process started successfully"
}
```

### POST /api/neuralNetwork/create

This endpoint creates a new neural network based on the provided configuration.

#### Request

```json
{
    "networkConfig": {
        "layers": [10, 20, 10],
        "activation": "relu"
    }
}
```

#### Response

```json
{
    "status": "success",
    "message": "Neural network created successfully",
    "data": {
        "neuralNetwork": {
            "id": "123",
            "config": {
                "layers": [10, 20, 10],
                "activation": "relu"
            }
        }
    }
}
```

## Error Handling

In case of an error, the API will return a JSON response with a message describing the error. For example:

```json
{
    "status": "error",
    "message": "Algorithm and neural network must be provided"
}
```

## Status Codes

The API uses the following status codes:

* `200` `OK` - The request was successful.
* `400` `Bad Request` - The request could not be understood or was missing required parameters.
* `500` `Internal Server Error` - Something went wrong on the server.

