🍴 CookUp Kitchen

A full-stack food ordering web app that showcases Caribbean cuisine. Users can browse dishes, add them to a cart, and view totals before checkout.

🚀 Live Demo
![Uploading image.png…]()
Live Demo: [🌐 View ](https://cookup-kitchen.onrender.com/)


⚙️ Tech Stack

Frontend: React, Vite, Context API, Axios, CSS

Backend: Node.js, Express, Multer (image uploads)

Database: MongoDB Atlas + Mongoose

Deployment: Render (frontend + backend)

✨ Features

Browse food items by category

View item details (name, description, price, image)

Add/remove items from cart

Dynamic cart totals and delivery fee calculation

Backend API with endpoints for:

POST /api/food/add → Add food (with image upload)

GET /api/food/list → List all food items

POST /api/food/remove → Remove food

📂 Project Structure
cookup-kitchen/
│
├── backend/               # Express backend
│   ├── config/            # DB connection
│   ├── controllers/       # API controllers
│   ├── routes/            # API routes
│   └── uploads/           # Uploaded food images
│
├── frontend/              # React frontend (Vite)
│   ├── src/
│   │   ├── Components/    # FoodDisplay, FoodItem, Cart, etc.
│   │   ├── Context/       # StoreContext for global state
│   │   └── Pages/         # Home, Cart, etc.
│
└── README.md

🛠️ Setup & Installation
Clone repo
git clone https://github.com/<your-username>/<your-repo>.git
cd cookup-kitchen

Backend setup
cd backend
npm install


Create a .env file in /backend with:

MONGO_URI=your-mongodb-connection-string
PORT=4000


Run backend:

npm run server

Frontend setup
cd frontend
npm install
npm run dev

👩🏽‍💻 My Role

I built this project end-to-end, including:

Designing and coding the frontend (React + Context API).

Implementing the backend (Express + MongoDB).

Creating the API routes for food management.

Handling cart state and order flow.

Deploying both the backend and frontend on Render.

🙌 Acknowledgements

MongoDB Atlas for hosting the database

Render for deployment

React + Express community docs
