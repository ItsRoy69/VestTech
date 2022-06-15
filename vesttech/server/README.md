# Backend

## Setup

### Install Dependencies

```bash
npm install
```

### Environment Variables

The environment variables can be found and modified in the `.env` file.

```env
# Port number (default: 8080)
PORT=

# URL of the Mongo DB (required)
DB_HOST=

# JSON Web Token secret (required)
JWT_SECRET=
```

### Project Structure

```
src\
 |--Controllers\    # Route controllers (controller layer)
 |--Database\       # Database configuration
 |--Middlewares\    # Custom express middlewares
 |--Models\         # Mongoose models (data layer)
 |--Routes\         # Routes
 |--Utils\          # Utility classes and functions
 |--Validations\    # Request data validation schemas
 |--App.js          # Express app
```

## Available Scripts

In the project directory, you can run:

### Run start

Start nodemon.

```bash
npm start
```

### Run prod

Start the server.

```bash
npm run prod
```
