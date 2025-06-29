# 🏡 MyEstate – Real Estate Web Application

**MyEstate** is a full-stack real estate web application that allows users to discover property listings and directly contact sellers. Built for performance and usability, it features property uploads, image handling, and smooth user interactions on a modern UI.

---

## 🚀 Features

- 🔍 Browse real estate listings with filters for location, price, and property type
- 🏠 Sellers can upload new properties with images and descriptions
- 💬 Buyers can contact sellers directly from the listing
- 🌐 Fully responsive UI for mobile, tablet, and desktop
- ☁️ Cloud image uploads and fast media delivery with Cloudinary

---

## 🛠️ Tech Stack

### Frontend
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)

### Other Tools
- [Cloudinary](https://cloudinary.com/) – image hosting and optimization
- [Postman](https://www.postman.com/) – API testing
- [Clerk](https://clerk.com/) – user authentication
- [Git](https://git-scm.com/) + [GitHub](https://github.com/) – version control

---

## 📦 Installation

### Prerequisites
- Node.js and npm
- MongoDB instance (local or Atlas)
- Cloudinary account and credentials

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/myestate.git
cd myestate

### 2. Install Dependencies

npm install

### 3. Set Up Environment Variables

MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### 4. Start App

 Start the App

Project Structure:
/client         # React + Vite frontend
/server         # Express backend
/models         # Mongoose schemas
/routes         # API endpoints
/utils          # Utility functions (e.g., Cloudinary config)


