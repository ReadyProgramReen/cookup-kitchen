# 🍴 CookUp Kitchen  

A responsive, full-stack food ordering app showcasing **Caribbean cuisine**. Users can browse dishes, add them to a cart, and view totals before checkout.  

**Live Demo:** [🌐 View](https://cookup-kitchen.onrender.com/)  

---

## 📸 Features  

- 🍽️ **Browse** food items by category  
- 📄 **View** item details (name, description, price, image)  
- 🛒 **Add/remove** items from cart  
- 💲 **Dynamic** cart totals with delivery fee calculation  
- 🔌 **Backend API** with endpoints for:  
  - `POST /api/food/add` → Add food (with image upload)  
  - `GET /api/food/list` → List all food items  
  - `POST /api/food/remove` → Remove food  

---

## 🛠️ Tech Stack  

- **Frontend:** React.js (Vite), Context API, Axios, CSS  
- **Backend:** Node.js, Express, Multer (image uploads)  
- **Database:** MongoDB Atlas + Mongoose  
- **Deployment:** Render (frontend + backend)  

---

## 🔧 Setup Instructions  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/cookup-kitchen.git
   cd cookup-kitchen
