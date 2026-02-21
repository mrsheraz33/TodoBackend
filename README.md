# 🚀 Todo App Backend API

RESTful API for Todo application built with Node.js, Express, and MongoDB.  
This backend supports full CRUD operations and is ready for **local development** or **Vercel deployment**.

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB with Mongoose  
- CORS  
- Dotenv  
- Nodemon (dev dependency)  

---

## 📋 Prerequisites

- Node.js (v14 or higher)  
- MongoDB (Local installation or MongoDB Atlas account)  
- npm or yarn package manager  

---

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

### 3. Create a `.env` file

Add the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todoApp
```

> Using **MongoDB Atlas** (recommended for production):

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoApp
```

---

## ⚙️ Configuration Notes

- Ensure **CORS** is enabled in `server.js` or serverless backend:

```js
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // Frontend origin
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));
```

- For Vercel deployment, replace the `origin` with your frontend URL:  
  `https://todo-frontend-beige-rho.vercel.app`

---

## ▶️ Running the Server

Development mode (with nodemon):
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

---

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

Example request body:
```json
{
  "title": "Updated Todo Title",
  "description": "Updated description",
  "completed": true
}
```

### Delete todo
```http
DELETE /api/todos/:id
```

---

## 🌎 Deployment Notes

- **Vercel:** Backend can be deployed as a serverless function. Remove `app.listen` and export your Express app.  
- **MongoDB Atlas:** Use Atlas for production; local MongoDB will not work on Vercel.  
- Ensure **frontend origin** is allowed in CORS middleware.  

Example frontend environment variable:

```
VITE_API_URL=https://todo-backend-phi-two.vercel.app/api/todos
```

---

## 🧪 Testing API

You can test API using:

- Postman  
- Thunder Client (VS Code extension)  
- Insomnia  

---

## ⚠️ Common Issues

- `CORS` errors → fix by allowing frontend origin  
- `MongoDB connection error` → check `.env` MONGO_URI and MongoDB status  

---
