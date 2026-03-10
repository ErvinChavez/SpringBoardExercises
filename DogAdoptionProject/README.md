# Dog Adoption Platform API

A RESTful API for managing dog registrations and adoptions. Built with **Node.js**, **Express**, and **MongoDB**. Supports user authentication, dog registration, adoption, and listing of registered/adopted dogs.

## Features

- User registration and login with **JWT authentication**
- Register new dogs for adoption
- Adopt available dogs
- View dogs you’ve registered or adopted
- Secure routes with authentication middleware
- Pagination support for listing dogs
- Fully tested with **Mocha**, **Chai**, and **Supertest**

## Tech Stack

- **Node.js** & **Express** – Backend server  
- **MongoDB Atlas** – Database  
- **Mongoose** – ODM for MongoDB  
- **JWT** – User authentication  
- **bcrypt** – Password hashing  
- **Mocha / Chai / Supertest** – Automated tests  
- **dotenv** – Environment variable management  

## Folder Structure

The folder structure designed by our software architects ensures adherence to best practices:

- `controllers`: Handles incoming requests and returns responses.
- `models`: Defines data models and interacts with the database.
- `routes`: Manages API routes and directs requests to controllers.
- `middlewares`: Houses custom middleware, including authentication.
- `.env`: Stores environment variables (database URIs, JWT secrets).
- `app.js`: Main entry point configuring the Express app.
- `db.js`: Handles database connection.
- `package.json`: Manages dependencies and npm scripts.

This structure keeps the project **clean, scalable, and easy to maintain**.

View the rubric for this assessment [here](https://storage.googleapis.com/hatchways.appspot.com/employers/springboard/student_rubrics/Dog%20Adoption%20Platform%20Rubric.pdf)

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd DogAdoptionProject