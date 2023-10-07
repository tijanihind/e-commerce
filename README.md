# E-commerce Back End Starter Code
## Sequelize & Express.js API
This project is an Express.js API utilizing the Sequelize ORM to interface with a MySQL database. The application caters to CRUD operations on categories, products, and tags.

## Table of Contents
### Prerequisites

Node.js
MySQL
Insomnia Core (or similar API testing tool, e.g., Postman)

### Setup

Clone the repository.
Navigate to the root directory.
Create a .env file and populate it with your MySQL credentials:
makefile

### Environment Variables

DB_NAME='db_name'
DB_USER='db_user'
DB_PW='db_password'

### Installing Dependencies

Run the following command:
```npm install```

### Database Initialization

To set up the database and seed it with test data:
Create the database:
```npx sequelize-cli db:create```
Execute the schema:
```npx sequelize-cli db:migrate```
Seed the database:
```npx sequelize-cli db:seed:all```

### Running the application

```npm start```

### Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

### License

This project is licensed under the MIT License.