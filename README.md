# 🌍 TripPlanner - Discover Hidden Gems & Plan Your Perfect Trip

A comprehensive travel planning web application that helps users discover hidden gems, plan personalized itineraries, and explore travel blogs. Built with modern web technologies and **fully responsive design** that works seamlessly across all devices - desktop, tablet, and mobile. Deployed on Render for reliable access.

## 🚀 Live Demo

[Visit TripPlanner](https://tripplanner-7d1l.onrender.com/)

---

## ✨ Features

* 🏠 **Home Page:** Clean layout with navbar (Hotspots, Categories, Blogs, About Us, Signup/Login), search bar, and trip planner.  
* 📅 **Trip Planner:** Get custom itineraries by entering city, days, budget, interests, and group size.  
* 🌄 **Hidden Gems:** Discover unique places with images, budget, routes, Google Maps, and 🕒 best visiting times.  
* ✍️ **Travel Blogs:** Explore blog cards with travel stories and a “Read More” full blog page.  
* 🔒 **Authentication:** Secure login/signup with JWT & bcrypt encryption.  
* 📱 **Responsive Design:** Works smoothly on mobile, tablet, and desktop.  

---


## 🛠️ Tech Stack


### 🌐 Frontend

* HTML, CSS, JavaScript

### 🛠 Backend

* Node.js, Express.js
* MongoDB (Local) via Mongoose
* JWT Authentication
* RESTful APIs

### ☁️ Other Tools & Libraries

* Cloudinary (Image uploads)
* Multer (File handling)
* Google Maps API (Location embedding)
* Dotenv (Environment config)
* CORS, Axios, Cookie-parser

---


## 📱 Application Screenshots

### 🔐 User Registration/Login
<img width="1470" height="911" alt="Screenshot 2025-07-19 at 4 46 09 PM" src="https://github.com/user-attachments/assets/3d4249b5-4454-4c62-a882-846e3b4faf05" />

<img width="1470" height="901" alt="Screenshot 2025-07-19 at 4 46 41 PM" src="https://github.com/user-attachments/assets/c68a2e14-3a5c-41fb-b626-6a4af02be1a1" />

### 🏠 Homepage
<img width="1470" height="779" alt="Screenshot 2025-07-19 at 4 47 10 PM" src="https://github.com/user-attachments/assets/8fbdad15-248f-4a36-96b2-b5f5e642b9b5" />

<img width="1470" height="798" alt="Screenshot 2025-07-19 at 5 19 27 PM" src="https://github.com/user-attachments/assets/e810881c-dc0e-4897-87fa-cf7a88a30041" />

<img width="1470" height="766" alt="Screenshot 2025-07-19 at 5 18 19 PM" src="https://github.com/user-attachments/assets/ec2610dc-078c-4208-8138-d2744a4735af" />

### 🔍 Homepage Search


### 🔍 All blogs


### ➕ All Hidden Gems


### 🏨 Hidden Gem detail


### ✏️ Blog detail

---


## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Google Maps API key
- Cloudinary account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshgajera/TripPlanner.git
   cd TripPlanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/tripplanner
   JWT_SECRET=your-jwt-secret-key
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

---

## 🗂️ Project Structure

```
tripplanner/
├── public/
│   ├── blog-page/
│   ├── categories/
│   ├── images/
│   ├── location/
│   ├── login/
│   ├── signup/
│   ├── blogs.html
│   ├── form.css
│   ├── from.js
│   ├── hotspots.html
│   ├── index.html
│   ├── result.html
│   ├── resultstyle.css
│   ├── script.js
│   ├── style.css
│   └── trash.txt
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── constants.js
│   └── index.js
├── .gitignore
├── .env
├── README.md
├── package-lock.json
└── package.json
```

---

## 🔮 Future Enhancements

### 🧭 Planned Features

* ☁️ **MongoDB Atlas Integration** – Migrate from local MongoDB to a cloud-based database.
* ✍️ **User-Generated Content** – Let authenticated users:  
  * 🧳 Add new hidden gems
  * 📝 Publish travel blogs
  * 📸 Upload photos and reviews
* 👤 **Enhanced User Profiles** – Dashboards with saved trips & favorite places.
* 🤝 **Social Features** – User reviews, ratings, and travel recommendations.

### 🛠️ Technical Improvements

* 🧑‍💼 **Admin Panel** – Built-in CMS for content and user management.
* 📱 **Progressive Web App** – Enable PWA for offline access and app-like experience.
* 🚀 **Performance Optimization** – Caching, lazy loading, and faster response times.

---

<!-- ## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

## 👨‍💻 Author

**Harsh Gajera**
- GitHub: [@harshgajera101](https://github.com/harshgajera101)
- LinkedIn: [Harsh Gajera](https://linkedin.com/in/gajera-harsh)

## 🙏 Acknowledgments

- Google Maps API for location services
- Cloudinary for image management
- Render for hosting services
- MongoDB for database solutions

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
