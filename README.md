# Number Classification API

This API classifies numbers based on their mathematical properties. It checks if a number is prime, perfect, Armstrong, even/odd, and provides a fun fact from the Numbers API. It also calculates the digit sum of the number.

## Features
- Classifies a number as prime, perfect, Armstrong, and even/odd.
- Returns a fun fact about the number from the Numbers API.
- Handles invalid input with appropriate error responses.

## API Endpoint

```bash
GET /api/classify-number?number=<number>
```
This endpoint accepts a query parameter number and returns a JSON response containing the classification of the number and other mathematical properties.

### Request Parameters
- number (required): The number to classify. Should be a valid integer

### Response Format
#### Success Response (200 OK)

```json
{
  "number": 28,
  "is_prime": false,
  "is_armstrong": false,
  "properties": ["even", "perfect"],
  "is_perfect": true,
  "digit_sum": 10,
  "fun_fact": "28 is a perfect number."
}
```
### Error Response (400 Bad Request)
```json
{
  "number": "abc",
  "error": true
}
```

## Mathematical Classifications
- Prime: A number that is only divisible by 1 and itself.
- Perfect: A number that is equal to the sum of its proper divisors-(excluding the number itself).
- Armstrong: A number equal to the sum of its own digits raised to the power of the number of digits.
- Even/Odd: Classifies the number as either even (divisible by 2) or odd.
- Digit Sum: The sum of all digits of the number.

## Installation
### Prerequisites:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps to run the project:
1. #### Clone the repository
```sh
git clone https://github.com/TG199/number-classification-api.git
cd number-classification-api
```
2. #### Install dependencies
Run the following command to install required dependencies:
```sh
npm install
```
3. #### Set up environment variables

Create a .env file in the root directory and add your configuration (if any). Example:

```makefile
PORT=5000
```
4. #### Start the server

Run the following command to start the server:
```sh
npm start
```
Your API will now be accessible at http://localhost:5000.

## Testing the API
You can test the API using curl or Postman.

### Example with curl:
```sh
curl -X GET "http://localhost:5000/api/classify-number?number=28"
```
### Example Request with Invalid Input:
```sh
curl -X GET "http://localhost:5000/api/classify-number?number=alphabet"
```

## Error Handling
- If the number parameter is missing or not a valid integer, the API returns a 400 Bad Request status with an error message.

## Contributing
Feel free to fork the repository and submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License

## Acknowledgments
- The Numbers API for fun facts about numbers: [Numbers API](http://numbersapi.com/#42)

- Mathematical definitions: Wikipedia - [Parity](https://en.wikipedia.org/wiki/Parity_(mathematics))

