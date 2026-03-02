# Express Bookstore API

A simple **RESTful API** for managing books built with **Express.js**, **PostgreSQL**, and **JSON Schema validation**. Includes full CRUD operations and integration tests with **Jest** + **Supertest**.

---

## Table of Contents

- [Features](#features)  
- [Installation](#installation)  
- [Database Setup](#database-setup)  
- [Running the Server](#running-the-server)  
- [API Endpoints](#api-endpoints)  
- [Testing](#testing)  
- [Future Improvements](#future-improvements)  
- [Author](#author)  

---

## Features

- Create, read, update, and delete books (`CRUD`)  
- JSON Schema validation for book creation and updates  
- Proper error handling with meaningful HTTP status codes  
- Integration tests for all routes using Jest + Supertest  
- Test database isolation with `process.env.NODE_ENV = "test"`

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd ExpressBookstoreProject