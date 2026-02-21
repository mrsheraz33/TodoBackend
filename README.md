# 🚀 Todo App Backend API

RESTful API for Todo application built with Node.js, Express, and MongoDB.

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- Dotenv
- Nodemon (dev dependency)

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🔧 Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a .env file

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todoApp
```

Using MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoApp
```

### 4. Start the server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will run at:
```
http://localhost:5000
```

## 🌐 API Endpoints

### Get all todos
```http
GET /api/todos
```

### Get single todo
```http
GET /api/todos/:id
```

### Create new todo
```http
POST /api/todos
```

Example request body:
```json
{
  "title": "Learn Redux Toolkit",
  "description": "Practice async thunks and slices"
}
```

### Update todo
```http
PUT /api/todos/:id
```

### Delete todo
```http
DELETE /api/todos/:id
```
