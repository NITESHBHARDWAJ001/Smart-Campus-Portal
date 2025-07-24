# 🎓 Smart Campus Portal

A fully functional, role-based web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) to automate and modernize campus management, including **placements**, **course materials**, **attendance**, and **student/teacher dashboards**.

---

## 🚀 Demo & Repository

- 🔗 **Live Demo Video**: [Watch here](https://drive.google.com/file/d/1B82alKFIW3jAoTD3VXMFqnURtw6_2Q0s/view?usp=drivesdk )
- 📦 **GitHub Frontend**: [Smart Campus Portal Frontend](https://github.com/NITESHBHARDWAJ001/Smart-Campus-Portal)
- 📦 **GitHub Backend**: [Smart Campus Portal Backend](https://github.com/NITESHBHARDWAJ001/Smart-Campus-Portal)

---

## 👥 Role-Based Dashboards

The application supports **3 user roles**, each with a dedicated dashboard and functionality:

### 🔐 Admin

- ✅ Login with hardcoded credentials
- 👥 Manage Users: View, approve, reject or remove teachers and students
- 📢 Post Notices & Events: Visible to all users
- 📊 Track Placement Stats: View student-wise placement application history
- 💼 Create Placement Opportunities: Add roles, companies, eligibility, and deadlines
- 📚 Monitor Courses and Activities: Get an overview of all activity across the portal

### 👨‍🏫 Teacher

- 📝 Register/Login securely
- 📚 Create Courses: Define course title, code, and description
- 🙋‍♂️ Add/Manage Enrolled Students: Assign students to courses
- ✅ Mark Attendance: Daily or per session basis
- 📝 Upload Course Materials: PDFs, links, lecture notes
- 🗂️ Create Assignments: Students can submit; teachers can evaluate
- 📌 View Notices & Events

### 👨‍🎓 Student

- 📝 Register/Login
- 🧾 View Personal Profile: Update details like resume, skills, links
- 📘 Access Enrolled Courses: View course content, lectures
- ✅ Check Attendance Records: By course and overall
- 📄 View & Submit Assignments
- 💼 Apply for Placement Opportunities: Auto-matching with eligibility
- 📌 Stay Updated with Notices & Events

---

## 🛠️ Features Summary

| Module                 | Description |
|------------------------|-------------|
| 👤 Authentication       | JWT-based secure login & role-based routing |
| 📚 Course Management    | Teachers create courses, students enroll |
| 📄 Attendance Module    | Teachers mark, students view attendance |
| 📁 Course Materials     | Teachers upload PDFs, links, videos |
| 📂 Assignment Module    | Teacher uploads & reviews, students submit |
| 📢 Notices & Events     | Admin/teachers post, students view |
| 🎯 Placement Portal     | Admin posts opportunities, students apply |
| 🧑‍🎓 Student Profile     | Updated resume, links, coding profiles |
| 📊 Admin Dashboard      | Real-time data on user activities & placements |

---

## 📦 Tech Stack

### Frontend

- React.js
- React Router
- Bootstrap 5
- Tailwind CSS
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- REST APIs

---

## 🖼️ Screenshots

> _Attach your screenshots below this section in your repository for best results:_

- Admin dashboard
- Teacher course creation
- Student course view
- Assignment creation/submission
- Attendance view
- Placement application
- Event/Notice board

---

## 🧑‍💻 Installation & Setup

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

### Environment Variables

Create a `.env` file inside the `server/` directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
```

### Admin Login

- ID: nitesh
- Password: nitesh

### Accessing the Application

Access the application at [http://localhost:3000](http://localhost:3000)

---

## 📚 Project Structure

```
smart_campus/
├── client/              # React frontend
│   ├── public/          # Public assets
│   └── src/
│       ├── components/  # Reusable components
│       ├── context/     # Context API
│       ├── pages/       # Main pages
│       └── App.js       # Main component
├── server/              # Express backend
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Entry point
└── README.md            # This file
```

---

## 📌 Future Enhancements

* 🧾 Add sessional grades module (planned)
* 🧠 AI-powered resume review for students
* 📈 Advanced analytics for placement cell
* 🔔 Push/email notifications for events and deadlines

---

## 🔧 Troubleshooting

If you encounter CORS issues:
- Make sure the server is running on port 5000
- Check that the client is running on port 3000
- CORS is configured to allow requests from localhost:3000 to localhost:5000

If you see 401 Unauthorized errors:
- Your JWT token might be invalid or expired
- Try logging out and logging in again

---

## 🙌 Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss your ideas.

1. Fork the repo
2. Create your branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

---

## 📬 Contact

**Nitesh Sharma**  
📍 Yamunanagar, Haryana  
📩 [niteshsharmans775@gmail.com](mailto:niteshsharmans775@gmail.com)  
📱 +91-9671881556  
🔗 [LinkedIn](https://www.linkedin.com/in/nitesh-sharma-5b4115306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).